<?php
// Relé de correo para cPanel: recibe un POST (JSON) del backend de la web y envía el correo localmente.
// El destinatario NO viene en la petición: siempre es $config['to'] (así no se puede usar como relé abierto).
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function out($code, $body) {
    http_response_code($code);
    echo json_encode($body);
    exit;
}

$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) out(500, ['error' => 'config']);
$config = require $configFile;

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') out(405, ['error' => 'method']);

$token = $_SERVER['HTTP_X_RELAY_TOKEN'] ?? '';
if (!is_string($token) || $token === '' || empty($config['token']) || !hash_equals($config['token'], $token)) {
    out(403, ['error' => 'forbidden']);
}

$raw = file_get_contents('php://input', false, null, 0, 40001);
if ($raw === false || strlen($raw) > 40000) out(413, ['error' => 'too_large']);
$data = json_decode($raw, true);
if (!is_array($data)) out(400, ['error' => 'json']);

function cut($v, $max) {
    $v = trim(preg_replace('/[\r\n]+/', ' ', (string)($v ?? '')));
    return function_exists('mb_substr') ? mb_substr($v, 0, $max, 'UTF-8') : substr($v, 0, $max);
}
function enc($s) { return '=?UTF-8?B?' . base64_encode($s) . '?='; }

// Envío por SMTP (TLS implícito) con el buzón del propio cPanel; el hosting tiene mail() desactivado.
function smtp_send(array $c, string $to, string $from, string $message): bool {
    $host = $c['smtp_host'] ?? 'mail.arrmaregroup.com';
    $port = (int)($c['smtp_port'] ?? 465);
    $fp = @stream_socket_client("ssl://$host:$port", $errno, $errstr, 10);
    if (!$fp) { error_log("relay smtp connect: $errno $errstr"); return false; }
    stream_set_timeout($fp, 15);
    $read = function () use ($fp) {
        $out = '';
        while (($l = fgets($fp, 1024)) !== false) {
            $out .= $l;
            if (strlen($l) < 4 || $l[3] === ' ') break;
        }
        return $out;
    };
    $step = function (?string $send, string $expect) use ($fp, $read) {
        if ($send !== null) fwrite($fp, $send . "\r\n");
        $r = $read();
        if (strncmp($r, $expect, 3) !== 0) { error_log('relay smtp: esperaba ' . $expect . ', recibió ' . trim($r)); return false; }
        return true;
    };
    $ok = $step(null, '220')
        && $step('EHLO envios.arrmaregroup.com', '250')
        && $step('AUTH LOGIN', '334')
        && $step(base64_encode($c['smtp_user']), '334')
        && $step(base64_encode($c['smtp_pass']), '235')
        && $step('MAIL FROM:<' . $from . '>', '250')
        && $step('RCPT TO:<' . $to . '>', '250')
        && $step('DATA', '354');
    if ($ok) {
        $message = preg_replace('/^\./m', '..', str_replace(["\r\n", "\r"], "\n", $message));
        $message = str_replace("\n", "\r\n", $message);
        fwrite($fp, $message . "\r\n.\r\n");
        $ok = $step(null, '250');
    }
    @fwrite($fp, "QUIT\r\n");
    fclose($fp);
    return $ok;
}

$subject = cut($data['subject'] ?? '', 150);
$replyEmail = cut($data['replyTo'] ?? '', 120);
$replyName = str_replace(['"', '<', '>', '\\'], '', cut($data['replyName'] ?? '', 80));
$text = (string)($data['text'] ?? '');
$html = (string)($data['html'] ?? '');

if ($subject === '' || $text === '' || $html === '' || !filter_var($replyEmail, FILTER_VALIDATE_EMAIL)) {
    out(400, ['error' => 'invalid']);
}
if (strlen($text) > 12000 || strlen($html) > 24000) out(413, ['error' => 'too_large']);

$boundary = 'b' . bin2hex(random_bytes(12));
$replyTo = ($replyName !== '' ? enc($replyName) . ' ' : '') . '<' . $replyEmail . '>';
$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Date: ' . date('r'),
    'Message-ID: <' . bin2hex(random_bytes(10)) . '@arrmaregroup.com>',
    'From: ' . enc($config['from_name']) . ' <' . $config['from'] . '>',
    'To: <' . $config['to'] . '>',
    'Subject: ' . enc($subject),
    'Reply-To: ' . $replyTo,
    'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
]);
$body = "--$boundary\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
    . chunk_split(base64_encode($text))
    . "--$boundary\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
    . chunk_split(base64_encode($html))
    . "--$boundary--\r\n";

$ok = smtp_send($config, $config['to'], $config['from'], $headers . "\r\n\r\n" . $body);
if (!$ok) out(502, ['error' => 'mail']);
out(200, ['ok' => true]);
