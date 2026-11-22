import type { ReactNode } from 'react'

const paths: Record<string, ReactNode> = {
  Instagram: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></>),
  Facebook: (<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />),
  TikTok: (<path d="M16 3v2.5a4 4 0 0 0 4 4v3a7 7 0 0 1-4-1.3V16a5.5 5.5 0 1 1-5.5-5.5v3A2.5 2.5 0 1 0 13 16V3h3z" />),
  LinkedIn: (<><rect x="3" y="9" width="4" height="12" /><circle cx="5" cy="5" r="2" /><path d="M10 9h4v2c.8-1.4 2.2-2.2 4-2.2 3 0 4 2 4 5V21h-4v-6c0-1.5-.5-2.5-2-2.5S14 13.5 14 15v6h-4V9z" /></>),
  WhatsApp: (<><path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.5L3 21z" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-1.9-1.3-2.3-2.3l.8-1-1-2L9 8.5z" /></>),
}

export default function Icon({ name, size = 20 }: { name: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
