import type { ProcessStage } from '@content/structure'
import { ProcessStageCard } from '@molecules/ProcessStageCard'
import { useTranslation } from '@i18n/useTranslation'
import type { TranslationKey } from '@i18n/keys'

interface ProcessTimelineProps {
  headingKey: TranslationKey
  captionKey: TranslationKey
  stages: ReadonlyArray<ProcessStage>
}

export const ProcessTimeline = ({
  headingKey,
  captionKey,
  stages,
}: ProcessTimelineProps) => {
  const { t } = useTranslation()

  return (
    <section id="process" className="section" aria-labelledby="process-heading">
      <header>
        <h2 id="process-heading" className="hero-title" style={{ fontSize: '2.4rem' }}>
          {t(headingKey)}
        </h2>
        <p className="hero-subtitle">{t(captionKey)}</p>
      </header>
      <div className="process-grid">
        {stages.map((stage) => (
          <ProcessStageCard key={stage.id} stage={stage} />
        ))}
      </div>
    </section>
  )
}
