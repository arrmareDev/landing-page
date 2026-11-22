import { useMemo, type ReactNode } from 'react'
import { buildUnits } from '../data/units'
import { es } from './es'
import { en } from './en'
import { I18nContext, type I18n } from './context'
import { PATHS, type Lang, type Page } from './routes'

const content = { es, en }

export default function I18nProvider({ lang, page, children }: { lang: Lang; page: Page; children: ReactNode }) {
  const value = useMemo<I18n>(() => {
    const t = content[lang]
    const otherLang: Lang = lang === 'es' ? 'en' : 'es'
    const otherPaths = PATHS[otherLang]
    return {
      lang, page, t,
      units: buildUnits(t.units.items),
      home: PATHS[lang].home,
      privacy: PATHS[lang].privacy,
      otherLang,
      otherPath: page === 'privacy' ? otherPaths.privacy : otherPaths.home,
    }
  }, [lang, page])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
