import type { Metric } from '@content/structure'
import { useTranslation } from '@i18n/useTranslation'

interface MetricTagProps {
  metric: Metric
}

export const MetricTag = ({ metric }: MetricTagProps) => {
  const { t } = useTranslation()

  return (
    <div className="metric-tag" role="presentation">
      <strong>{metric.value}</strong>
      <span>{t(metric.labelKey)}</span>
    </div>
  )
}
