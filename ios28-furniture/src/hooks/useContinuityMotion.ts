import { useEffect } from 'react'

import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export const useContinuityMotion = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--continuity-opacity', '0')
      return
    }

    const updatePointer = (event: PointerEvent) => {
      const { clientX, clientY } = event
      const xPercent = (clientX / window.innerWidth) * 100
      const yPercent = (clientY / window.innerHeight) * 100

      document.documentElement.style.setProperty(
        '--continuity-x',
        `${xPercent}%`,
      )
      document.documentElement.style.setProperty(
        '--continuity-y',
        `${yPercent}%`,
      )
      document.documentElement.style.setProperty(
        '--continuity-opacity',
        '1',
      )
    }

    window.addEventListener('pointermove', updatePointer, { passive: true })
    return () => {
      window.removeEventListener('pointermove', updatePointer)
    }
  }, [prefersReducedMotion])
}
