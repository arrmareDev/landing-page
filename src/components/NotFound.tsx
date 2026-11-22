import { useI18n } from '../i18n/context'

export default function NotFound() {
  const { t, home } = useI18n()
  const n = t.notFound
  return (
    <section className="page section notfound">
      <div className="container">
        <p className="notfound__code" aria-hidden="true">{n.code}</p>
        <h1>{n.title}</h1>
        <p className="notfound__text">{n.text}</p>
        <a href={home} className="btn btn--solid">{n.cta} <span className="arrow">↗</span></a>
      </div>
    </section>
  )
}
