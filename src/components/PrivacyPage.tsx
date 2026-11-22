import { site } from '../data/site'
import { useI18n } from '../i18n/context'
import Rich from '../i18n/Rich'

export default function PrivacyPage() {
  const { t } = useI18n()
  const p = t.privacy
  const legal = site.legal

  return (
    <section className="page section">
      <div className="container prose">
        <span className="label">{p.label}</span>
        <h1>{p.title}</h1>
        <p className="prose__meta">{p.updated}</p>

        {p.sections.map(s => (
          <div className="prose__block" key={s.h}>
            <h2>{s.h}</h2>
            {s.p.map((text, i) => <p key={i}><Rich text={text} /></p>)}
            {s.ul && s.ul.length > 0 && (
              <ul>{s.ul.map(item => <li key={item}>{item}</li>)}</ul>
            )}
            {s.controller && (
              <dl className="prose__dl">
                <div><dt>{p.controller.name}</dt><dd>{legal.name || site.name}</dd></div>
                {legal.ruc && <div><dt>{p.controller.ruc}</dt><dd>{legal.ruc}</dd></div>}
                {legal.address && <div><dt>{p.controller.address}</dt><dd>{legal.address}</dd></div>}
                <div><dt>{p.controller.email}</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
              </dl>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
