import { Fragment } from 'react'
import { site } from '../data/site'

/** Reemplaza {email} por un enlace mailto dentro de un texto. */
export default function Rich({ text }: { text: string }) {
  const parts = text.split('{email}')
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && <a href={`mailto:${site.email}`}>{site.email}</a>}
        </Fragment>
      ))}
    </>
  )
}
