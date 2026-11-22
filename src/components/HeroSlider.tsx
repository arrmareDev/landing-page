import { useState } from 'react'
import { heroImages } from '../data/site'
import { useCountUp } from '../hooks/useCountUp'
import { useI18n } from '../i18n/context'

const DELAY = 6000

function Stat({ to, suffix, label }: { to: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp<HTMLDivElement>(to)
  return (
    <div className="hero__stat" ref={ref}>
      <strong>{value}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}

export default function HeroSlider() {
  const { t } = useI18n()
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const next = () => setCurrent(i => (i + 1) % heroImages.length)

  return (
    <section
      className={`hero ${paused ? 'is-paused' : ''}`}
      id="inicio"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero__bg" aria-hidden="true">
        {heroImages.map((src, i) => (
          <img key={src} src={src} alt="" className={i === current ? 'is-active' : ''} loading={i === 0 ? 'eager' : 'lazy'} fetchPriority={i === 0 ? 'high' : 'auto'} decoding="async" />
        ))}
      </div>
      <div className="hero__shade" />

      <div className="container hero__content">
        <p className="hero__tag"><i />{t.hero.tag}</p>
        <h1>{t.hero.titleA}<br /><em>{t.hero.titleB}</em></h1>
        <p className="hero__desc">{t.hero.desc}</p>
        <div className="hero__actions">
          <a href="#nosotros" className="btn btn--gold">{t.hero.ctaGroup} <span className="arrow">↗</span></a>
          <a href="#unidades" className="btn btn--ghost">{t.hero.ctaUnits}</a>
        </div>
      </div>

      <div className="container hero__bottom">
        <div className="hero__stats">
          <Stat to={6} suffix="+" label={t.hero.stat1} />
          <Stat to={100} suffix="%" label={t.hero.stat2} />
        </div>
        <div className="hero__bars" role="tablist" aria-label={t.hero.barsAria}>
          {heroImages.map((_, i) => (
            <button key={i} role="tab" aria-selected={i === current} aria-label={t.hero.image(i + 1)} onClick={() => setCurrent(i)}>
              <i
                className={i === current ? 'is-active' : i < current ? 'is-done' : ''}
                style={{ animationDuration: `${DELAY}ms` }}
                onAnimationEnd={i === current ? next : undefined}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
