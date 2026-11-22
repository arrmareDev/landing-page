import { useI18n } from '../i18n/context'
import Socials from './Socials'

const year = new Date().getFullYear()

export default function Footer() {
  const { t, units, page, home, privacy } = useI18n()
  const prefix = page === 'home' ? '' : home
  const sites = units.flatMap(u => u.companies).filter(c => c.url)

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="logo__main">ARRMARE</span> <span className="logo__sub">GROUP</span>
          <p>{t.footer.tagline}</p>
          <Socials />
        </div>
        <nav aria-label={t.footer.aria}>
          <h4>{t.footer.group}</h4>
          {t.nav.links.map(l => <a key={l.id} href={`${prefix}#${l.id}`}>{l.label}</a>)}
          <a href={privacy}>{t.common.privacy}</a>
        </nav>
        {sites.length > 0 && (
          <nav aria-label={t.footer.companiesAria}>
            <h4>{t.footer.ourCompanies}</h4>
            {sites.map(c => (
              <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer">{c.name} ↗</a>
            ))}
          </nav>
        )}
      </div>
      <div className="container footer__bottom">
        <p>© {year} ARRMARE GROUP — {t.footer.rights}</p>
        <a href={privacy}>{t.common.privacy}</a>
      </div>
    </footer>
  )
}
