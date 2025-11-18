import { trackYandexGoal } from './yandex'

export const reportClientError = (
  error: Error,
  info?: string,
  fingerprint?: string,
) => {
  console.error('[TailorGlass:error]', error, info)
  trackYandexGoal('client_error', {
    message: error.message,
    fingerprint,
  })
}

export const logContinuityEvent = (event: string, payload?: unknown) => {
  if (import.meta.env.DEV) {
    console.info('[Continuity]', event, payload)
  }
}
