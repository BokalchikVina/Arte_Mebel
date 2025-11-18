import type { ReactElement } from 'react'

import type { Testimonial } from '@content/structure'
import { GlassCard } from '@atoms/GlassCard'
import { IconBadge } from '@atoms/IconBadge'
import { useTranslation } from '@i18n/useTranslation'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export const TestimonialCard = ({
  testimonial,
}: TestimonialCardProps): ReactElement => {
  const { t } = useTranslation()

  return (
    <GlassCard accent="neutral" padding="md">
      <IconBadge icon="shield" />
      <blockquote style={{ margin: 'var(--space-md) 0', fontSize: '1.05rem' }}>
        {t(testimonial.quoteKey)}
      </blockquote>
      <footer>
        <strong style={{ color: 'var(--text-primary)' }}>
          {testimonial.author}
        </strong>
        <div>{t(testimonial.roleKey)}</div>
      </footer>
    </GlassCard>
  )
}
