declare global {
  interface Window {
    ym?: (id: number, event: string, ...args: unknown[]) => void
    Ya?: {
      Context: {
        AdvManager: {
          render: (options: {
            blockId: string
            renderTo: string
            type?: string
          }) => void
        }
      }
    }
    yaContextCb?: Array<() => void>
  }
}

const metricaId = Number(import.meta.env.VITE_YANDEX_METRICA_ID ?? 0)
const directBlockId = import.meta.env.VITE_YANDEX_DIRECT_BLOCK_ID

export const initYandexBridge = () => {
  if (typeof window === 'undefined' || !metricaId) {
    return
  }

  window.ym?.(metricaId, 'params', {
    ecosystem: 'tailorglass',
    platform: 'web',
  })
}

export const trackYandexGoal = (
  goal: string,
  payload?: Record<string, unknown>,
) => {
  if (typeof window === 'undefined' || !metricaId) {
    return
  }

  window.ym?.(metricaId, 'reachGoal', goal, payload ?? {})
}

export const scheduleYandexAd = (renderTo: string, type = 'floorAd') => {
  if (typeof window === 'undefined' || !directBlockId) {
    return
  }

  window.yaContextCb = window.yaContextCb || []
  window.yaContextCb.push(() => {
    try {
      window.Ya?.Context.AdvManager.render({
        blockId: directBlockId,
        renderTo,
        type,
      })
    } catch (error) {
      console.warn('Yandex.Direct render skipped', error)
    }
  })
}
