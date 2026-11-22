import { whatsappLink } from '../data/site'
import { useI18n } from '../i18n/context'
import Icon from './Icons'

export default function WhatsAppFab() {
  const { t } = useI18n()
  const href = whatsappLink(t.contact.whatsappMessage)
  if (!href) return null
  return (
    <a className="fab" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${t.fab.aria}${t.common.newTab}`}>
      <Icon name="WhatsApp" size={26} />
      <span>{t.fab.label}</span>
    </a>
  )
}
