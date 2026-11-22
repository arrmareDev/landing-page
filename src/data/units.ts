export type UnitId =
  | 'floricultura' | 'tecnologia' | 'imprenta' | 'rosas' | 'salud' | 'consultoria'

export interface Company {
  name: string
  tag: string
  description: string
  logo?: string // sin logo => se muestra el nombre en texto
  url?: string  // sitio web propio; se abre en otra pestaña. Sin url => botón "Próximamente" (sin acción)
}

export interface Unit {
  id: UnitId
  title: string          // título completo
  shortTitle: string     // título corto para los paneles
  image?: string         // fondo del panel (sin imagen => degradado)
  detailTitle?: string   // título del detalle (si es distinto)
  summary: string        // texto corto de la tarjeta
  detail: string         // texto largo del detalle
  companies: Company[]
}

/** Datos que no cambian con el idioma. Los textos están en src/i18n/es.ts y en.ts (mismo orden). */
export const unitMeta: { id: UnitId; image?: string; companies: { name: string; logo?: string; url?: string }[] }[] = [
  {
    id: 'floricultura',
    image: '/img/floricultura.webp',
    companies: [
      { name: 'Galana Atelier Floral', logo: '/img/galana-bn.webp', url: 'https://galana.pe' },
      { name: 'Birds Luxury Flowers', logo: '/img/birds-bn.webp', url: 'https://birds.pe' },
      // TODO: cuando Aristocrat tenga sitio web, poner aquí su URL (ej.: 'https://aristocrat.pe'): el botón se activa solo
      { name: 'Aristocrat', logo: '/img/aristocrat-bn.webp', url: '' },
    ],
  },
  {
    id: 'tecnologia',
    image: '/img/tecnologia.webp',
    companies: [
      { name: 'Monarca Technology', logo: '/img/monarca-bn.webp', url: 'https://monarcacore.com' },
    ],
  },
  {
    id: 'imprenta',
    image: '/img/imprenta.webp',
    companies: [
      // TODO: cuando Reichs Branding Lab tenga sitio web, poner aquí su URL: el botón se activa solo
      { name: 'Reichs Branding Lab', logo: '/img/reichs-bn.webp', url: '' },
    ],
  },
  {
    id: 'rosas',
    image: '/img/rosas.webp',
    companies: [
      { name: 'Rey Roses', logo: '/img/rey-roses-bn.webp', url: 'https://reyruses.com' },
    ],
  },
  {
    id: 'salud',
    image: '/img/salud.webp',
    companies: [
      { name: 'Solkan', logo: '/img/solkan-bn.webp', url: 'https://solkan.pe' },
    ],
  },
  {
    id: 'consultoria',
    image: '/img/consultoria.webp',
    companies: [
      // TODO: agregar logo: '/img/arrmare-consulting-bn.webp' cuando exista
      { name: 'ARRMARE Consulting', url: 'https://arrmareconsulting.com' },
    ],
  },
]

interface UnitText {
  shortTitle: string; title: string; detailTitle: string; summary: string; detail: string
  companies: { tag: string; description: string }[]
}

export function buildUnits(texts: UnitText[]): Unit[] {
  return unitMeta.map((m, i) => ({
    id: m.id,
    image: m.image,
    shortTitle: texts[i].shortTitle,
    title: texts[i].title,
    detailTitle: texts[i].detailTitle || undefined,
    summary: texts[i].summary,
    detail: texts[i].detail,
    companies: m.companies.map((c, j) => ({ ...c, ...texts[i].companies[j] })),
  }))
}
