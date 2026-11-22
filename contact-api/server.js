import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import { rateLimit } from 'express-rate-limit'
import { buildContactEmail } from './emailTemplate.js'

const {
  PORT = 3001,
  CORS_ORIGINS = '',
  SMTP_HOST = '', SMTP_PORT = '465', SMTP_SECURE = 'true', SMTP_USER = '', SMTP_PASS = '',
  MAIL_TO = '', MAIL_FROM = SMTP_USER,
} = process.env

const origins = CORS_ORIGINS.split(',').map(s => s.trim()).filter(Boolean)
const dryRun = !SMTP_HOST
const transporter = dryRun
  ? nodemailer.createTransport({ jsonTransport: true })
  : nodemailer.createTransport({
      host: SMTP_HOST, port: Number(SMTP_PORT), secure: SMTP_SECURE === 'true',
      auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    })

const clean = (v, max) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max)

const app = express()
app.set('trust proxy', 1) // detrás de Nginx
app.use(express.json({ limit: '10kb' }))
app.use(cors({ origin: origins.length ? origins : false, methods: ['POST'] }))

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, limit: 5, standardHeaders: true, legacyHeaders: false,
  message: { error: 'Demasiados intentos. Inténtalo más tarde.' },
})

app.get('/api/health', (_req, res) => res.json({ ok: true, dryRun }))

app.post('/api/contact', limiter, async (req, res) => {
  const b = req.body ?? {}
  if (b.website) return res.json({ ok: true }) // honeypot: los bots caen aquí; se les responde "ok"

  const name = clean(b.name, 80)
  const email = clean(b.email, 120)
  const interest = clean(b.interest, 120) || 'Información general del grupo'
  const message = String(b.message ?? '').trim().slice(0, 2000)

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || message.length < 10) {
    return res.status(400).json({ error: 'Datos inválidos.' })
  }
  if (!MAIL_TO) return res.status(500).json({ error: 'Servidor sin destinatario configurado.' })

  try {
    const { html, text } = buildContactEmail({ name, email, interest, message })
    const info = await transporter.sendMail({
      from: MAIL_FROM, to: MAIL_TO, replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject: `Consulta web — ${interest}`,
      text, html,
    })
    if (dryRun) console.log('[modo prueba] correo NO enviado:', info.message)
    res.json({ ok: true })
  } catch (err) {
    console.error('Error enviando correo:', err.message)
    res.status(502).json({ error: 'No se pudo enviar el mensaje.' })
  }
})

app.listen(PORT, () => console.log(`contact-api en :${PORT} ${dryRun ? '(modo prueba, sin SMTP)' : ''}`))
