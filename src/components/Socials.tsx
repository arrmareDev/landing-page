import { activeSocials } from '../data/site'
import { useI18n } from '../i18n/context'
import Icon from './Icons'

export default function Socials() {
  const { t } = useI18n()
  if (activeSocials.length === 0) return null
  return (
    <ul className="socials" aria-label={t.socials.aria}>
      {activeSocials.map(s => (
        <li key={s.name}>
          <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.name}${t.common.newTab}`}>
            <Icon name={s.name} />
          </a>
        </li>
      ))}
    </ul>
  )
}
