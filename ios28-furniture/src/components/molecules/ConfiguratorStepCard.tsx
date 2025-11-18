import type { ConfiguratorStep } from '@content/structure'
import { GlassCard } from '@atoms/GlassCard'
import { IconBadge } from '@atoms/IconBadge'
import { useTranslation } from '@i18n/useTranslation'

interface ConfiguratorStepProps {
  step: ConfiguratorStep
}

export const ConfiguratorStepCard = ({ step }: ConfiguratorStepProps) => {
  const { t } = useTranslation()

  return (
    <GlassCard accent="neutral" padding="md">
      <header className="hero-eyebrow">{step.step}</header>
      <IconBadge icon={step.icon} />
      <h3 className="hero-subtitle" style={{ marginBottom: 'var(--space-sm)' }}>
        {t(step.titleKey)}
      </h3>
      <p>{t(step.descriptionKey)}</p>
    </GlassCard>
  )
}
