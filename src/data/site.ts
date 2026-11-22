export const SITE_URL = 'https://arrmaregroup.com' // dominio final (sin barra al final)

export const site = {
  name: 'ARRMARE GROUP',
  email: 'contacto@arrmaregroup.com',
  location: 'Lima, Perú',

  // Lo que quede vacío ('') no se muestra en la web.
  phone: { display: '+51 932 954 617', href: '+51932954617' },
  whatsapp: { number: '51932954617' }, // solo dígitos con código de país

  // TODO: reemplazar cada url por el perfil real del grupo (ej.: 'https://www.instagram.com/arrmaregroup').
  // Por ahora llevan a la página principal de cada red.
  socials: [
    { name: 'Instagram', url: 'https://www.instagram.com/' },
    { name: 'Facebook',  url: 'https://www.facebook.com/' },
    { name: 'TikTok',    url: 'https://www.tiktok.com/' },
    { name: 'LinkedIn',  url: 'https://www.linkedin.com/' },
  ],

  // TODO: datos legales para la política de privacidad (si quedan vacíos, no se muestran)
  legal: { name: '', ruc: '', address: '' },
}

export const whatsappLink = (message: string) =>
  site.whatsapp.number
    ? `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`
    : ''

export const activeSocials = site.socials.filter(s => s.url)

export const heroImages = [
  '/img/birds1.webp',
  '/img/floricultura.webp',
  '/img/imprenta.webp',
  '/img/rosas.webp',
  '/img/salud.webp',
  '/img/tecnologia.webp',
  '/img/consultoria.webp',
]

export const partnerLogos = [1, 2, 3, 4, 5].map(n => `/img/recurso-${n}.webp`)

// Tamaño real de cada logo (evita saltos de diseño al cargar)
export const partnerLogoSize: [number, number][] = [[140, 114], [269, 118], [151, 115], [239, 115], [327, 71]]
