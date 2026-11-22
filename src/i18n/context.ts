import { createContext, useContext } from 'react'
import type { Content } from './es'
import type { Unit } from '../data/units'
import type { Lang, Page } from './routes'

export interface I18n {
  lang: Lang
  page: Page
  t: Content
  units: Unit[]
  home: string          // ruta de inicio en este idioma
  privacy: string       // ruta de la política en este idioma
  otherLang: Lang
  otherPath: string     // misma página en el otro idioma
}

export const I18nContext = createContext<I18n | null>(null)

export function useI18n(): I18n {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n debe usarse dentro de <I18nProvider>')
  return ctx
}
