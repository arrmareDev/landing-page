import { useEffect, useRef, useState } from 'react'

/** Cuenta de 0 a `to` cuando el elemento entra al viewport. */
export function useCountUp<T extends HTMLElement>(to: number, duration = 1400) {
  const ref = useRef<T>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    const run = () => {
      if (reduce) { setValue(to); return }
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        setValue(Math.round(to * (1 - Math.pow(1 - t, 3))))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { run(); io.disconnect() } }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to, duration])

  return { ref, value }
}
