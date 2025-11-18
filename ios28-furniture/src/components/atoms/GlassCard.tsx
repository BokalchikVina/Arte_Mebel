import type { PropsWithChildren, ReactElement } from 'react'
import { z } from 'zod'

import type { Accent } from '@content/structure'
import { gradientMap } from '@theme/palette'

type GlassCardElement = 'div' | 'section' | 'article'

export interface GlassCardProps extends PropsWithChildren {
  accent?: Accent
  padding?: 'sm' | 'md' | 'lg'
  as?: GlassCardElement
  className?: string
}

const GlassCardSchema = z.object({
  accent: z.enum(['primary', 'secondary', 'neutral']).default('neutral'),
  padding: z.enum(['sm', 'md', 'lg']).default('lg'),
  as: z.enum(['div', 'section', 'article']).default('div'),
})

export const GlassCard = ({
  children,
  ...props
}: GlassCardProps): ReactElement => {
  const parsed = GlassCardSchema.parse(props)
  const Tag = parsed.as

  const padding = {
    sm: 'var(--space-lg)',
    md: 'var(--space-xl)',
    lg: 'var(--space-2xl)',
  }[parsed.padding]

  const composedClass = ['glass-card', props.className ?? ''].join(' ').trim()

  return (
    <Tag
      className={composedClass}
      style={{
        padding,
        backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0)), ${gradientMap[parsed.accent]}`,
      }}
    >
      {children}
    </Tag>
  )
}
