import { useEffect, useRef } from 'react'
import type { Unit } from '../data/units'
import { useI18n } from '../i18n/context'

interface Props { unit: Unit | null; onClose: () => void }

export default function UnitDrawer({ unit, onClose }: Props) {
  const { t } = useI18n()
  const u = t.units
  const closeRef = useRef<HTMLButtonElement>(null)
  const open = unit !== null

  useEffect(() => {
    if (!open) return
    const prev = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prev?.focus?.()
    }
  }, [open, onClose])

  return (
    <div className={`drawer ${open ? 'is-open' : ''}`} inert={!open} aria-hidden={!open}>
      <div className="drawer__backdrop" onClick={onClose} />
      <aside className="drawer__panel" role="dialog" aria-modal="true" aria-label={unit?.title ?? u.drawerLabel}>
        {unit && (
          <>
            <div
              className="drawer__cover"
              style={unit.image ? { backgroundImage: `url(${unit.image})` } : undefined}
            >
              <button ref={closeRef} className="drawer__close" onClick={onClose} aria-label={u.close}>
                <span /><span />
              </button>
              <div className="drawer__cover-text">
                <span className="label">{u.drawerLabel}</span>
                <h2>{unit.detailTitle ?? unit.title}</h2>
              </div>
            </div>

            <div className="drawer__body">
              <p className="drawer__detail">{unit.detail}</p>

              <h3 className="drawer__sub">{u.drawerCompanies}</h3>
              <ul className="drawer__companies">
                {unit.companies.map(c => (
                  <li key={c.name} className="co">
                    <div className="co__logo">
                      {c.logo
                        ? <img src={c.logo} alt={u.logoAlt(c.name)} width="500" height="500" />
                        : <span>{c.name}</span>}
                    </div>
                    <div className="co__info">
                      <span className="co__tag">{c.tag}</span>
                      <h4>{c.name}</h4>
                      <p>{c.description}</p>
                      {c.url ? (
                        <a className="btn btn--solid co__btn" href={c.url} target="_blank" rel="noopener noreferrer">
                          {t.common.visitSite} <span className="arrow">↗</span>
                          <span className="sr-only">{t.common.newTab}</span>
                        </a>
                      ) : (
                        // Sitio aún inexistente: botón listo pero sin acción. Se activa al poner `url` en src/data/units.ts
                        <button type="button" className="btn co__btn co__btn--soon" disabled aria-label={`${t.common.visitSite}: ${t.common.comingSoon}`}>
                          {t.common.visitSite}
                          <span className="co__badge">{t.common.comingSoon}</span>
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
