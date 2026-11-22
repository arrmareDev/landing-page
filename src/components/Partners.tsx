import { partnerLogos, partnerLogoSize } from '../data/site'
import { useI18n } from '../i18n/context'

export default function Partners() {
  const { t } = useI18n()
  return (
    <section className="partners" aria-label={t.partners.label}>
      <p className="partners__label">{t.partners.label}</p>
      <div className="partners__viewport">
        <div className="partners__track">
          {[0, 1].map(copy => (
            <div className="partners__group" key={copy} aria-hidden={copy === 0 ? undefined : true}>
              {partnerLogos.map((src, i) => (
                <img key={i} src={src} alt={copy === 0 ? t.partners.brand(i + 1) : ''}
                     width={partnerLogoSize[i]?.[0]} height={partnerLogoSize[i]?.[1]} loading="lazy" decoding="async" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
