import { useEffect, useState } from 'react'

export const useAmbientMotion = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handler = ({ clientX, clientY }: MouseEvent) => {
      setTilt({
        x: ((clientX / window.innerWidth) * 2 - 1) * 8,
        y: ((clientY / window.innerHeight) * 2 - 1) * 8,
      })
    }
    window.addEventListener('pointermove', handler, { passive: true })
    return () => window.removeEventListener('pointermove', handler)
  }, [])

  return tilt
}
