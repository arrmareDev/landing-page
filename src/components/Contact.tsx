import { useState, type FormEvent } from 'react'
import { site, whatsappLink } from '../data/site'
import { useI18n } from '../i18n/context'
import Icon from './Icons'
import Socials from './Socials'

// URL del backend (ver contact-api/). Sin definir => se abre el correo del visitante como alternativa.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined

interface Values { name: string; email: string; interest: string; message: string; website: string }
type Errors = Partial<Record<'name' | 'email' | 'message', string>>
type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error'

function validate(v: Values, m: { errName: string; errEmail: string; errMessage: string }): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = m.errName
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = m.errEmail
  if (v.message.trim().length < 10) e.message = m.errMessage
  return e
}

export default function Contact() {
  const { t, units, privacy } = useI18n()
  const c = t.contact
  const interests = [c.interestDefault, ...units.flatMap(u => u.companies.map(co => co.name))]
  const empty: Values = { name: '', email: '', interest: interests[0], message: '', website: '' }
  const [values, setValues] = useState<Values>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const wa = whatsappLink(c.whatsappMessage)

  const set = (k: keyof Values) => (ev: { target: { value: string } }) => {
    setValues(v => ({ ...v, [k]: ev.target.value }))
    if (k in errors) setErrors(e => ({ ...e, [k]: undefined }))
  }

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault()
    if (status === 'sending') return
    const errs = validate(values, c)
    setErrors(errs)
    if (Object.keys(errs).length) {
      document.getElementById(`c-${Object.keys(errs)[0]}`)?.focus()
      return
    }
    if (values.website) { setStatus('sent'); return } // trampa anti-spam: los bots rellenan este campo oculto

    const payload = {
      name: values.name.trim(), email: values.email.trim(),
      interest: values.interest, message: values.message.trim(), website: values.website,
    }

    if (!ENDPOINT) {
      const body = `${c.mailName}: ${payload.name}\n${c.mailEmail}: ${payload.email}\n${c.mailInterest}: ${payload.interest}\n\n${payload.message}`
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(c.mailSubject + payload.interest)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      setValues(empty)
    } catch {
      setStatus('error')
    }
  }

  const reset = () => { setStatus('idle'); setValues(empty); setErrors({}) }

  return (
    <section id="contacto" className="section section--dark contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="label" data-reveal>{c.label}</span>
          <h2 data-reveal style={{ ['--d' as string]: 1 }}>{c.titleA}<em>{c.titleB}</em></h2>
          <p className="contact__lead" data-reveal style={{ ['--d' as string]: 2 }}>
            {c.lead}
          </p>

          <dl className="contact__list" data-reveal style={{ ['--d' as string]: 3 }}>
            <div><dt>{c.email}</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
            {site.phone.href && (
              <div><dt>{c.phone}</dt><dd><a href={`tel:${site.phone.href}`}>{site.phone.display}</a></dd></div>
            )}
            {wa && (
              <div><dt>{c.whatsapp}</dt><dd>
                <a href={wa} target="_blank" rel="noopener noreferrer">{c.whatsappCta}<span className="sr-only">{t.common.newTab}</span> ↗</a>
              </dd></div>
            )}
            <div><dt>{c.location}</dt><dd>{site.location}</dd></div>
          </dl>
          <div data-reveal style={{ ['--d' as string]: 4 }}><Socials /></div>
        </div>

        <div className="cform" data-reveal style={{ ['--d' as string]: 2 }}>
          {status === 'sent' || status === 'mailto' ? (
            <div className="cform__done" role="status">
              <span className="cform__check" aria-hidden="true">✓</span>
              <h3>{status === 'sent' ? c.doneSentTitle : c.doneMailTitle}</h3>
              <p>
                {status === 'sent' ? c.doneSentText : c.doneMailText}
              </p>
              <button type="button" className="btn btn--ghost" onClick={reset}>{c.again}</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <h3 className="cform__title">{c.formTitle}</h3>

              <div className="field">
                <label htmlFor="c-name">{c.name}</label>
                <input id="c-name" name="name" autoComplete="name" value={values.name} onChange={set('name')}
                       aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} maxLength={80} />
                {errors.name && <p className="field__error" id="e-name">{errors.name}</p>}
              </div>

              <div className="field">
                <label htmlFor="c-email">{c.emailField}</label>
                <input id="c-email" name="email" type="email" autoComplete="email" inputMode="email" value={values.email} onChange={set('email')}
                       aria-invalid={!!errors.email} aria-describedby={errors.email ? 'e-email' : undefined} maxLength={120} />
                {errors.email && <p className="field__error" id="e-email">{errors.email}</p>}
              </div>

              <div className="field">
                <label htmlFor="c-interest">{c.interest}</label>
                <select id="c-interest" name="interest" value={values.interest} onChange={set('interest')}>
                  {interests.map(i => <option key={i}>{i}</option>)}
                </select>
              </div>

              <div className="field">
                <label htmlFor="c-message">{c.message}</label>
                <textarea id="c-message" name="message" rows={4} value={values.message} onChange={set('message')}
                          aria-invalid={!!errors.message} aria-describedby={errors.message ? 'e-message' : undefined} maxLength={2000} />
                {errors.message && <p className="field__error" id="e-message">{errors.message}</p>}
              </div>

              {/* Campo trampa: invisible para personas */}
              <div className="hp" aria-hidden="true">
                <label>{c.honeypot}<input tabIndex={-1} autoComplete="off" name="website" value={values.website} onChange={set('website')} /></label>
              </div>

              <p className="cform__legal">
                {c.legalPre}<a href={privacy}>{t.common.privacy}</a>{c.legalPost}
              </p>

              {status === 'error' && (
                <p className="cform__alert" role="alert">
                  {c.errorPre}<a href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              )}

              <div className="cform__actions">
                <button type="submit" className="btn btn--gold" disabled={status === 'sending'}>
                  {status === 'sending' ? c.sending : <>{c.send} <span className="arrow">↗</span></>}
                </button>
                {wa && (
                  <a className="btn btn--ghost" href={wa} target="_blank" rel="noopener noreferrer">
                    <Icon name="WhatsApp" size={18} /> WhatsApp
                    <span className="sr-only">{t.common.newTab}</span>
                  </a>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
