import { useEffect, useState } from 'react'

export const usePrefersReducedMotion = () => {
  const getPreference = () =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(getPreference)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => {
      setPrefersReducedMotion(media.matches)
      document.documentElement.dataset.motion = media.matches
        ? 'reduced'
        : 'fluid'
    }

    updatePreference()
    media.addEventListener('change', updatePreference)

    return () => media.removeEventListener('change', updatePreference)
  }, [])

  return prefersReducedMotion
}
