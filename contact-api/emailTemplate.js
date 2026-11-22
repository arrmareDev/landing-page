// Plantilla del correo de consulta. HTML con tablas y estilos en línea (compatible con Gmail/Outlook).
const GOLD = '#b8975a'
const INK = '#0a0a0a'

export const esc = s =>
  String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

const row = (label, valueHtml) => `
  <tr>
    <td style="padding:14px 0;border-bottom:1px solid #ece7dd;">
      <div style="font:600 11px Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;color:${GOLD};margin-bottom:4px;">${label}</div>
      <div style="font:16px Georgia,'Times New Roman',serif;color:#1a1a1a;">${valueHtml}</div>
    </td>
  </tr>`

export function buildContactEmail({ name, email, interest, message }) {
  const when = new Intl.DateTimeFormat('es-PE', {
    dateStyle: 'long', timeStyle: 'short', timeZone: 'America/Lima',
  }).format(new Date())

  const subjectMail = encodeURIComponent(`Re: Consulta web — ${interest}`)
  const html = `<!doctype html>
<html lang="es"><body style="margin:0;padding:0;background:#f3f0ea;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(name)} escribió sobre ${esc(interest)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f0ea;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e4dfd3;">
        <tr><td style="background:${INK};padding:28px 32px;border-bottom:3px solid ${GOLD};">
          <div style="font:600 12px Arial,sans-serif;letter-spacing:4px;color:${GOLD};text-transform:uppercase;">ARRMARE GROUP</div>
          <div style="font:28px Georgia,'Times New Roman',serif;color:#ffffff;margin-top:8px;">Nueva consulta web</div>
        </td></tr>
        <tr><td style="padding:8px 32px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row('Nombre', esc(name))}
            ${row('Correo', `<a href="mailto:${esc(email)}" style="color:#1a1a1a;text-decoration:underline;">${esc(email)}</a>`)}
            ${row('Empresa de interés', esc(interest))}
          </table>
        </td></tr>
        <tr><td style="padding:20px 32px 8px;">
          <div style="font:600 11px Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;color:${GOLD};margin-bottom:10px;">Mensaje</div>
          <div style="font:16px/1.7 Georgia,'Times New Roman',serif;color:#1a1a1a;background:#faf8f4;border-left:3px solid ${GOLD};padding:16px 18px;">${esc(message).replace(/\n/g, '<br>')}</div>
        </td></tr>
        <tr><td align="center" style="padding:24px 32px 32px;">
          <a href="mailto:${esc(email)}?subject=${subjectMail}" style="display:inline-block;background:${INK};color:#ffffff;font:600 12px Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:14px 28px;border:1px solid ${GOLD};">Responder a ${esc(name.split(' ')[0])}</a>
        </td></tr>
        <tr><td style="background:#faf8f4;padding:16px 32px;border-top:1px solid #ece7dd;font:12px Arial,sans-serif;color:#8a8478;">
          Enviado desde el formulario de arrmaregroup.com · ${when} (hora de Lima)<br>
          También puedes responder directamente a este correo.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`

  const text = [
    'NUEVA CONSULTA WEB — ARRMARE GROUP', '',
    `Nombre: ${name}`, `Correo: ${email}`, `Empresa de interés: ${interest}`, '',
    'Mensaje:', message, '',
    `Enviado ${when} (hora de Lima)`,
  ].join('\n')

  return { html, text }
}
