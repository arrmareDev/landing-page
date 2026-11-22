import { useI18n } from '../i18n/context'

export default function About() {
  const { t } = useI18n()
  const a = t.about
  return (
    <section id="nosotros" className="section section--tint about">
      <div className="container about__grid">
        <div className="about__text">
          <span className="label" data-reveal>{a.label}</span>
          <h2 data-reveal style={{ ['--d' as string]: 1 }}>{a.titleA}<em>{a.titleB}</em></h2>
          <p data-reveal style={{ ['--d' as string]: 2 }}>{a.p1a}<strong>ARRMARE GROUP</strong>{a.p1b}</p>
          <p data-reveal style={{ ['--d' as string]: 3 }}>{a.p2}</p>
          <p data-reveal style={{ ['--d' as string]: 4 }}>{a.p3}</p>
          <a href="#unidades" className="btn btn--solid" data-reveal style={{ ['--d' as string]: 5 }}>{a.cta} <span className="arrow">↗</span></a>
        </div>
        <div className="about__visual" data-reveal style={{ ['--d' as string]: 2 }}>
          <div className="about__frame" />
          <img src="/img/holding.webp" alt={a.imageAlt} width="552" height="474" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  )
}
