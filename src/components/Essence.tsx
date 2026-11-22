import { useState } from 'react'
import { useI18n } from '../i18n/context'

export default function Essence() {
  const { t } = useI18n()
  const e = t.essence
  const [active, setActive] = useState(0)
  const item = e.items[active]

  return (
    <section id="esencia" className="section section--dark essence">
      <div className="container essence__grid">
        <div className="essence__head">
          <span className="label" data-reveal>{e.label}</span>
          <h2 data-reveal style={{ ['--d' as string]: 1 }}>{e.titleA}<em>{e.titleB}</em></h2>
          <div className="essence__tabs" role="tablist" aria-label={e.tabsAria} data-reveal style={{ ['--d' as string]: 2 }}>
            {e.items.map((it, i) => (
              <button
                key={it.id} role="tab" id={`tab-${it.id}`} aria-selected={i === active} aria-controls={`panel-${it.id}`}
                className={i === active ? 'is-active' : ''} onClick={() => setActive(i)}
              >
                <small>{String(i + 1).padStart(2, '0')}</small>{it.tab}
              </button>
            ))}
          </div>
        </div>

        <div className="essence__panel" key={item.id} role="tabpanel" id={`panel-${item.id}`} aria-labelledby={`tab-${item.id}`}>
          <p className="essence__kicker">{item.title}</p>
          {item.text && <p className="essence__text">{item.text}</p>}
          {item.list.length > 0 && (
            <ul className="essence__values">
              {item.list.map((v, i) => <li key={v} style={{ ['--i' as string]: i }}>{v}</li>)}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
