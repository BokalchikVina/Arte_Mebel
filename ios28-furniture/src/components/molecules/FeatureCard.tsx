import type { Feature } from '@content/structure'
import { GlassCard } from '@atoms/GlassCard'
import { IconBadge } from '@atoms/IconBadge'
import { useTranslation } from '@i18n/useTranslation'

interface FeatureCardProps {
  feature: Feature
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  const { t } = useTranslation()

  return (
    <GlassCard accent={feature.accent ?? 'neutral'} className="feature-card">
      <IconBadge icon={feature.icon} tone="glow" />
      <h3>{t(feature.titleKey)}</h3>
      <p>{t(feature.bodyKey)}</p>
    </GlassCard>
  )
}
