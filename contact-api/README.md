# contact-api

Recibe el formulario de la web y lo envía por correo, por SMTP o, si el VPS bloquea el SMTP, mediante un relé PHP en el hosting (`relay-php/`). Sin base de datos.

## Probar en local
```bash
cd contact-api
npm install
cp .env.example .env      # edita MAIL_TO y, si quieres envío real, los datos SMTP
node --env-file=.env server.js
```
Sin `SMTP_HOST` funciona en **modo prueba**: valida y muestra el correo en consola, sin enviarlo.

En la raíz de la web crea `.env.local` con:
```
VITE_CONTACT_ENDPOINT=http://localhost:3001/api/contact
```
y reinicia `npm run dev`. Sin esa variable, el formulario abre el correo del visitante (mailto) como alternativa.

## Producción (VPS)
1. Copia `contact-api/` al servidor, `npm install --omit=dev`, crea su `.env` con el SMTP real.
2. Mantenlo vivo: `pm2 start server.js --name arrmare-contact --node-args="--env-file=.env"` y `pm2 save`.
3. En Nginx, dentro del `server` de la web:
   ```nginx
   location /api/ { proxy_pass http://127.0.0.1:3001; proxy_set_header X-Forwarded-For $remote_addr; }
   ```
4. Compila la web con `VITE_CONTACT_ENDPOINT=/api/contact` (misma dominio, sin CORS).

Si el VPS bloquea los puertos de correo (p. ej. DigitalOcean), usa `RELAY_URL` y `RELAY_TOKEN` en el `.env` en lugar del SMTP: ver [`relay-php/README.md`](relay-php/README.md).

Incluye: validación, campo trampa anti-spam, límite de 5 envíos por IP cada 10 min, HTML escapado y `Reply-To` del visitante.
