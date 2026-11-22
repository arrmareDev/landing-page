export type Lang = 'es' | 'en'
export type Page = 'home' | 'privacy' | 'notfound'

export const PATHS = {
  es: { home: '/', privacy: '/privacidad' },
  en: { home: '/en', privacy: '/en/privacy' },
} as const

/** Idioma y página a partir de la URL. Cualquier ruta desconocida => 404. */
export function resolveRoute(pathname: string): { lang: Lang; page: Page } {
  const p = pathname.replace(/\/+$/, '') || '/'
  if (p === PATHS.es.home) return { lang: 'es', page: 'home' }
  if (p === PATHS.es.privacy) return { lang: 'es', page: 'privacy' }
  if (p === PATHS.en.home) return { lang: 'en', page: 'home' }
  if (p === PATHS.en.privacy) return { lang: 'en', page: 'privacy' }
  return { lang: p.startsWith('/en/') ? 'en' : 'es', page: 'notfound' }
}
