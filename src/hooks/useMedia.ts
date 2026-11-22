import { useSyncExternalStore } from 'react'

/** Devuelve si una media query coincide y se actualiza cuando cambia. */
export function useMedia(query: string): boolean {
  return useSyncExternalStore(
    cb => {
      const mq = window.matchMedia(query)
      mq.addEventListener('change', cb)
      return () => mq.removeEventListener('change', cb)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}
