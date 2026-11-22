import { useCallback, useEffect, useState } from 'react'
import type { Unit } from '../data/units'
import { useI18n } from '../i18n/context'
import { useMedia } from '../hooks/useMedia'
import UnitDrawer from './UnitDrawer'

const STEP_MS = 5500                    // tiempo que permanece abierto cada panel
const STACKED = '(max-width: 1100px)'   // en pantallas chicas los paneles se apilan (sin rotación)
const DEEP_LINK = /^#unidades\/([\w-]+)$/

export default function Units() {
  const { t, units } = useI18n()
  const u = t.units
  const [active, setActive] = useState(0)
  const [selected, setSelected] = useState<Unit | null>(null)
  const [userPaused, setUserPaused] = useState(false) // botón "Pausar rotación"
  const [interacting, setInteracting] = useState(false) // mouse o foco dentro de los paneles
  const [inView, setInView] = useState(false)
  const stacked = useMedia(STACKED)
  const reduced = useMedia('(prefers-reduced-motion: reduce)')

  const playing = !userPaused && !interacting && inView && !selected && !stacked && !reduced
  const next = () => setActive(i => (i + 1) % units.length)

  // Rotación solo mientras la sección está a la vista
  const [sectionEl, setSectionEl] = useState<HTMLElement | null>(null)
  useEffect(() => {
    if (!sectionEl) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 })
    io.observe(sectionEl)
    return () => io.disconnect()
  }, [sectionEl])

  // Enlaces directos: /#unidades/rosas abre el detalle de esa unidad
  const openById = useCallback((id: string) => {
    const i = units.findIndex(x => x.id === id)
    if (i < 0) return
    setActive(i)
    setSelected(units[i])
    document.getElementById('unidades')?.scrollIntoView({ behavior: 'auto', block: 'start' })
  }, [units])

  useEffect(() => {
    const read = () => { const m = window.location.hash.match(DEEP_LINK); if (m) openById(m[1]) }
    const timer = window.setTimeout(read, 0)
    window.addEventListener('hashchange', read)
    return () => { window.clearTimeout(timer); window.removeEventListener('hashchange', read) }
  }, [openById])

  const select = (unit: Unit) => {
    setSelected(unit)
    window.history.replaceState(null, '', `#unidades/${unit.id}`) // enlace compartible
  }
  const close = useCallback(() => {
    setSelected(null)
    if (DEEP_LINK.test(window.location.hash)) window.history.replaceState(null, '', '#unidades')
  }, [])

  return (
    <section id="unidades" className="section units" ref={setSectionEl}>
      <div className="container">
        <div className="units__head">
          <div>
            <span className="label" data-reveal>{u.label}</span>
            <h2 data-reveal style={{ ['--d' as string]: 1 }}>{u.titleA}<em>{u.titleB}</em></h2>
          </div>
          <p data-reveal style={{ ['--d' as string]: 2 }}>{u.intro}</p>
        </div>

        <div
          className="panels" data-reveal style={{ ['--d' as string]: 2 }}
          onMouseEnter={() => setInteracting(true)}
          onMouseLeave={() => setInteracting(false)}
          onFocus={() => setInteracting(true)}
          onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false) }}
        >
          {units.map((unit, i) => {
            const isActive = i === active
            return (
              <button
                key={unit.id}
                type="button"
                className={`panel ${isActive ? 'is-active' : ''} ${unit.image ? '' : 'panel--plain'}`}
                style={unit.image ? ({ ['--img' as string]: `url(${unit.image})` }) : undefined}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => select(unit)}
                aria-label={u.open(unit.shortTitle)}
              >
                <span className="panel__bg" />
                <span className="panel__num">{String(i + 1).padStart(2, '0')}</span>

                {/* Panel cerrado: título horizontal + cantidad de empresas */}
                <span className="panel__label">
                  <strong>{unit.shortTitle}</strong>
                  <small>{t.common.companies(unit.companies.length)}</small>
                </span>

                {/* Panel abierto */}
                <span className="panel__body">
                  <span className="panel__count">{t.common.companies(unit.companies.length)}</span>
                  <strong>{unit.shortTitle}</strong>
                  <span className="panel__summary">{unit.summary}</span>
                  <span className="panel__logos">
                    {unit.companies.map(c => c.logo
                      ? <img key={c.name} src={c.logo} alt="" width="500" height="500" loading="lazy" decoding="async" />
                      : <span key={c.name} className="panel__logo-name">{c.name}</span>)}
                  </span>
                  <span className="panel__cta">{u.cta} <i>→</i></span>
                </span>

                {playing && isActive && (
                  <i className="panel__timer" aria-hidden="true" style={{ animationDuration: `${STEP_MS}ms` }} onAnimationEnd={next} />
                )}
              </button>
            )
          })}
        </div>

        {!stacked && !reduced && (
          <div className="panels__tools">
            <button type="button" className="panels__toggle" aria-pressed={userPaused} onClick={() => setUserPaused(p => !p)}>
              <span aria-hidden="true">{userPaused ? '▶' : '❚❚'}</span> {userPaused ? u.play : u.pause}
            </button>
          </div>
        )}
      </div>

      <UnitDrawer unit={selected} onClose={close} />
    </section>
  )
}
