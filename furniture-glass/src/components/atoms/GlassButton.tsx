import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, type HTMLMotionProps } from 'framer-motion'
import classNames from 'classnames'
import { z } from 'zod'
import { motionPreset } from '../../design/tokens'

const glassButtonSchema = z.object({
  labelKey: z.string(),
  variant: z.enum(['primary', 'secondary', 'ghost']).optional().default('primary'),
  icon: z.custom<ReactNode>().optional(),
  analyticsGoal: z.string().optional(),
})

export type GlassButtonProps = {
  labelKey: string
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: ReactNode
  analyticsGoal?: string
} & HTMLMotionProps<'button'>

const variantMap: Record<
  NonNullable<GlassButtonProps['variant']>,
  { bg: string; text: string; border: string }
> = {
  primary: {
    bg: 'bg-[rgba(255,255,255,0.12)]',
    text: 'text-white',
    border: 'border-white/30',
  },
  secondary: {
    bg: 'bg-[rgba(7,10,21,0.65)]',
    text: 'text-white/80',
    border: 'border-white/15',
  },
  ghost: {
    bg: 'bg-transparent',
    text: 'text-white/70',
    border: 'border-transparent',
  },
}

export const GlassButton = ({
  labelKey,
  variant = 'primary',
  icon,
  analyticsGoal,
  className,
  ...rest
}: GlassButtonProps) => {
  const { t } = useTranslation()
  glassButtonSchema.parse({ labelKey, variant, icon, analyticsGoal })

  return (
    <motion.button
      whileHover={motionPreset.hover}
      className={classNames(
        'group inline-flex items-center gap-3 rounded-[24px] border px-6 py-3 text-sm font-medium backdrop-blur-2xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300',
        variantMap[variant].bg,
        variantMap[variant].text,
        variantMap[variant].border,
        className,
      )}
      data-analytics-goal={analyticsGoal}
      {...rest}
    >
      <span className="tracking-wide">{t(labelKey)}</span>
      {icon && <span className="text-lg text-white/60 group-hover:text-white">{icon}</span>}
    </motion.button>
  )
}
