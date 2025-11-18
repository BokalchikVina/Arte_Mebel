declare global {
  interface Window {
    ym?: (...args: (string | number | Record<string, unknown>)[]) => void
    yandex_metrika_callbacks2?: Array<() => void>
  }
}

type YandexMetricaFn = ((...args: (string | number | Record<string, unknown>)[]) => void) & {
  a?: unknown[]
  l?: number
}

type ExtendedWindow = Window & {
  ym?: YandexMetricaFn
  yandex_metrika_callbacks2?: Array<() => void>
}

type MetricaConfig = {
  counterId: number
  clickmap?: boolean
  trackLinks?: boolean
  accurateTrackBounce?: boolean
}

export const initYandexMetrica = ({
  counterId,
  clickmap = true,
  trackLinks = true,
  accurateTrackBounce = true,
}: MetricaConfig) => {
  const w = window as ExtendedWindow
  if (w.ym) return

  const metricaFn: YandexMetricaFn = function (...args) {
    ;(metricaFn.a = metricaFn.a || []).push(args)
  }

  w.ym = metricaFn
  w.ym.l = Date.now()

  const script = document.createElement('script') as HTMLScriptElement
  script.async = true
  script.src = 'https://mc.yandex.ru/metrika/tag.js'
  script.onload = () =>
    w.ym?.(counterId, 'init', {
      clickmap,
      trackLinks,
      accurateTrackBounce,
    })

  const insert = () => {
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript?.parentNode?.insertBefore(script, firstScript)
  }

  if (document.readyState === 'complete') {
    insert()
  } else {
    window.addEventListener('load', insert, { once: true })
  }
}

export const pushYandexGoal = (counterId: number, goal: string, params?: Record<string, unknown>) => {
  const w = window as ExtendedWindow
  if (params) {
    w.ym?.(counterId, 'reachGoal', goal, params)
  } else {
    w.ym?.(counterId, 'reachGoal', goal)
  }
}

export const yandexContextTag = (accountId: string) => ({
  type: 'text/javascript',
  innerHTML: `
    (function(w,d,n,s,t){w[n]=w[n]||[];
      w[n].push(function(){Ya.Context.AdvManager.render({
        blockId:"${accountId}",
        renderTo:"yandex_rtb",
        async:true
      })});
      t=d.getElementsByTagName("script")[0];
      s=d.createElement("script");
      s.type="text/javascript";
      s.src="//an.yandex.ru/system/context.js";
      s.async=true;
      t.parentNode.insertBefore(s,t);
    })(this, this.document, "yandexContextAsyncCallbacks");
  `,
})
