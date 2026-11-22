# Relé de correo para cPanel (relay-php)

Úsalo cuando el VPS **no puede enviar por SMTP** (p. ej. DigitalOcean bloquea los puertos 465/587).
El backend (`contact-api`) hace un POST por HTTPS a `relay.php`, que corre en tu hosting cPanel y entrega el correo allí mismo.

Seguridad: exige la clave `X-Relay-Token`, el destinatario está fijo en `config.php` (la petición no puede cambiarlo), limpia saltos de línea en cabeceras y limita el tamaño.

## Instalación en cPanel
1. **Subdominio**: cPanel → *Domains* → *Create A New Domain* → `envios.arrmaregroup.com`.
   - Desmarca "Share document root" y pon como carpeta `/envios.arrmaregroup.com` (fuera de `public_html`, para que no se borre al limpiar la página vieja).
2. **Archivos**: en *File Manager*, entra a `/envios.arrmaregroup.com` y sube `relay.php` y `.htaccess` (activa "Show Hidden Files" para ver el `.htaccess`).
3. **Configuración**: sube `config.example.php`, renómbralo a `config.php` y edítalo: pon una clave larga en `token` (genérala con `openssl rand -hex 32`).
4. **HTTPS**: cPanel → *SSL/TLS Status* → *Run AutoSSL* y espera a que el subdominio tenga certificado.

## Conectar el backend (en el VPS, `contact-api/.env`)
```
RELAY_URL=https://envios.arrmaregroup.com/relay.php
RELAY_TOKEN=la_misma_clave_del_config.php
```
Con `RELAY_URL` definido no se usa el SMTP. Reinicia el servicio del backend.

## Probar
```bash
# Debe responder 403 (sin clave):
curl -i -X POST https://envios.arrmaregroup.com/relay.php
# Debe responder {"ok":true} y llegar el correo a contacto@arrmaregroup.com:
curl -i -X POST https://envios.arrmaregroup.com/relay.php -H "X-Relay-Token: TU_CLAVE" \
  -d '{"subject":"Prueba","text":"hola","html":"<p>hola</p>","replyTo":"tu@correo.com","replyName":"Prueba"}'
```
Cuando todo funcione, puedes activar en `.htaccess` el bloque que limita el acceso a la IP del VPS.

No subas `config.php` a GitHub (ya está en `.gitignore`).
