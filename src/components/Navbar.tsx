import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { useI18n } from '../i18n/context'
import type { Lang } from '../i18n/routes'

const LANGS: Lang[] = ['es', 'en']

export default function Navbar() {
  const { t, lang, page, home, otherLang, otherPath } = useI18n()
  const isHome = page === 'home'
  const prefix = isHome ? '' : home // fuera del inicio, los enlaces vuelven a la home: /#nosotros
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Sección activa según el scroll
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && setActive(e.target.id))
    }, { rootMargin: '-45% 0px -50% 0px' })
    t.nav.links.forEach(l => { const el = document.getElementById(l.id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [t])

  // Menú móvil: bloquear scroll y cerrar con Escape
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])

  // Si se agranda la ventana, cerrar el menú móvil
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 961px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <>
      <header className={`nav ${scrolled || open || !isHome ? 'is-solid' : ''} ${open ? 'is-open' : ''}`}>
        <div className="nav__inner">
          <a href={isHome ? '#' : home} className="logo" aria-label={t.nav.homeAria} onClick={() => setOpen(false)}>
            <span className="logo__main">ARRMARE</span>
            <span className="logo__sub">GROUP</span>
          </a>

          <nav className="nav__links" aria-label={t.nav.main}>
            {t.nav.links.map(l => (
              <a key={l.id} href={`${prefix}#${l.id}`} className={isHome && active === l.id ? 'is-active' : ''}>{l.label}</a>
            ))}
          </nav>

          <div className="nav__right">
            <div className="nav__lang" role="group" aria-label={t.nav.language}>
              {LANGS.map(l => l === lang
                ? <span key={l} className="is-current" aria-current="true">{l.toUpperCase()}</span>
                : <a key={l} href={otherPath} hrefLang={otherLang} lang={otherLang} aria-label={t.nav.switchTo}>{l.toUpperCase()}</a>)}
            </div>

            <button
              className={`burger ${open ? 'is-open' : ''}`}
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              aria-controls="menu"
              onClick={() => setOpen(o => !o)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
        <div className="nav__progress" style={{ width: `${progress}%` }} />
      </header>

      <div id="menu" className={`menu ${open ? 'is-open' : ''}`} inert={!open} aria-hidden={!open}>
        <nav className="menu__links" aria-label={t.nav.mobile}>
          {t.nav.links.map((l, i) => (
            <a key={l.id} href={`${prefix}#${l.id}`} style={{ ['--i' as string]: i }} onClick={() => setOpen(false)}>
              <small>{String(i + 1).padStart(2, '0')}</small>{l.label}
            </a>
          ))}
        </nav>
        <div className="menu__foot">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.location}</span>
        </div>
      </div>
    </>
  )
}
