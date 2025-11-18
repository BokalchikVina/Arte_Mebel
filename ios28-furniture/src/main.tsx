import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@styles/globals.css'
import App from './App'
import { ContinuityBoundary } from '@foundations/ContinuityBoundary'
import { initYandexBridge } from '@services/yandex'

const rootElement = document.getElementById('root')

const setInitialMotionPreference = () => {
  if (typeof window === 'undefined') return
  const prefersReducedMotion = window
    .matchMedia('(prefers-reduced-motion: reduce)')
    .matches
  document.documentElement.dataset.motion = prefersReducedMotion
    ? 'reduced'
    : 'fluid'
}

setInitialMotionPreference()
initYandexBridge()

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <ContinuityBoundary>
      <App />
    </ContinuityBoundary>
  </StrictMode>,
)
