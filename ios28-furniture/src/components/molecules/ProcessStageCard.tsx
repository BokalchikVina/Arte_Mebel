import type { ProcessStage } from '@content/structure'
import { GlassCard } from '@atoms/GlassCard'
import { IconBadge } from '@atoms/IconBadge'
import { useTranslation } from '@i18n/useTranslation'

interface ProcessStageCardProps {
  stage: ProcessStage
}

export const ProcessStageCard = ({ stage }: ProcessStageCardProps) => {
  const { t } = useTranslation()

  return (
    <GlassCard accent="neutral" padding="md">
      <div className="hero-eyebrow">{stage.eta}</div>
      <IconBadge icon="timeline" />
      <h4 style={{ color: 'var(--text-primary)', margin: 'var(--space-md) 0' }}>
        {t(stage.titleKey)}
      </h4>
      <p>{t(stage.descriptionKey)}</p>
    </GlassCard>
  )
}
