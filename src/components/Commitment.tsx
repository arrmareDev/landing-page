import { useI18n } from '../i18n/context'

export default function Commitment() {
  const { t } = useI18n()
  const c = t.commitment
  return (
    <section id="compromiso" className="section commitment">
      <div className="container commitment__grid">
        <div className="commitment__visual" data-reveal>
          <img src="/img/birds0.webp" alt={c.imageAlt} width="1400" height="939" loading="lazy" decoding="async" />
          <blockquote>{c.quote}</blockquote>
        </div>
        <div className="commitment__text">
          <span className="label" data-reveal>{c.label}</span>
          <h2 data-reveal style={{ ['--d' as string]: 1 }}>{c.titleA}<em>{c.titleB}</em></h2>
          <p data-reveal style={{ ['--d' as string]: 2 }}>{c.p1}</p>
          <p data-reveal style={{ ['--d' as string]: 3 }}>{c.p2}</p>
          <p data-reveal style={{ ['--d' as string]: 4 }}>{c.p3}</p>
        </div>
      </div>
      <div className="container">
        <ul className="pillars">
          {c.pillars.map((p, i) => (
            <li key={p.t} data-reveal style={{ ['--d' as string]: i }}>
              <small>{String(i + 1).padStart(2, '0')}</small>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
