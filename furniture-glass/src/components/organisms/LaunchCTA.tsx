import { useTranslation } from 'react-i18next'
import { SectionShell } from '../layout/SectionShell'
import { GlassButton } from '../atoms/GlassButton'

export const LaunchCTA = () => {
  const { t } = useTranslation()

  return (
    <SectionShell id="analytics" align="center" headline={t('cta.title')} subline={t('cta.description')}>
      <div className="mx-auto w-full max-w-3xl rounded-[40px] border border-white/10 bg-[rgba(7,10,21,0.75)] p-10 text-white shadow-[0_60px_100px_rgba(0,0,0,0.5)] backdrop-blur-[60px]">
        <div className="flex flex-wrap justify-center gap-4">
          <GlassButton labelKey="cta.primary" analyticsGoal="book_slot" />
          <GlassButton labelKey="cta.secondary" variant="secondary" analyticsGoal="request_media_plan" />
        </div>
        <div className="mt-6 text-xs uppercase tracking-[0.35em] text-white/40">
          Yandex Direct · Yandex Metrica · AppMetrica · OpenTelemetry
        </div>
      </div>
    </SectionShell>
  )
}
