import { useEffect } from 'react'
import { SITE_URL } from '../data/site'
import { useI18n } from '../i18n/context'

function upsert(selector: string, tag: 'meta' | 'link', attrs: Record<string, string>, value: string, valueAttr: 'content' | 'href') {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) {
    el = document.createElement(tag)
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v))
    document.head.appendChild(el)
  }
  el.setAttribute(valueAttr, value)
}

/** Ajusta título, descripción, idioma y URL canónica según la página actual. */
export function useDocumentMeta() {
  const { lang, page, t, home, privacy } = useI18n()

  useEffect(() => {
    const title = page === 'privacy' ? t.privacy.metaTitle : page === 'notfound' ? t.notFound.metaTitle : t.meta.title
    const description = page === 'privacy' ? t.privacy.metaDescription : t.meta.description
    const path = page === 'privacy' ? privacy : home
    const url = SITE_URL + path

    document.documentElement.lang = lang
    document.title = title
    upsert('meta[name="description"]', 'meta', { name: 'description' }, description, 'content')
    upsert('meta[property="og:title"]', 'meta', { property: 'og:title' }, title, 'content')
    upsert('meta[property="og:description"]', 'meta', { property: 'og:description' }, description, 'content')
    upsert('meta[property="og:url"]', 'meta', { property: 'og:url' }, url, 'content')
    upsert('meta[property="og:locale"]', 'meta', { property: 'og:locale' }, t.locale, 'content')
    upsert('meta[name="twitter:title"]', 'meta', { name: 'twitter:title' }, title, 'content')
    upsert('meta[name="twitter:description"]', 'meta', { name: 'twitter:description' }, description, 'content')
    upsert('link[rel="canonical"]', 'link', { rel: 'canonical' }, url, 'href')
    upsert('meta[name="robots"]', 'meta', { name: 'robots' }, page === 'notfound' ? 'noindex' : 'index,follow', 'content')
  }, [lang, page, t, home, privacy])
}
