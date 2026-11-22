<?php
// Copia este archivo como config.php (en la misma carpeta que relay.php) y completa los valores.
// NUNCA subas config.php a GitHub.
return [
    // Clave compartida con el backend (RELAY_TOKEN en contact-api/.env). Genera una larga, por ejemplo con: openssl rand -hex 32
    'token'     => 'CAMBIA_ESTA_CLAVE',
    // Siempre recibe aquí; la petición no puede cambiarlo
    'to'        => 'contacto@arrmaregroup.com',
    // Remitente: debe ser una cuenta real de este cPanel
    'from'      => 'contacto@arrmaregroup.com',
    'from_name' => 'Web ARRMARE GROUP',
    // El hosting no permite mail(): se envía por el SMTP del propio cPanel con el buzón de arriba
    'smtp_host' => 'mail.arrmaregroup.com',
    'smtp_port' => 465,
    'smtp_user' => 'contacto@arrmaregroup.com',
    'smtp_pass' => 'CONTRASEÑA_DEL_BUZON',
];
