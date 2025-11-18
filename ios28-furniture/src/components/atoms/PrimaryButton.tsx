import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { forwardRef, useMemo } from 'react'
import { z } from 'zod'

import type { TranslationKey } from '@i18n/keys'
import { useTranslation } from '@i18n/useTranslation'
import { trackYandexGoal } from '@services/yandex'

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
type NativeAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>

export type PrimaryButtonVariant = 'solid' | 'ghost'

export interface PrimaryButtonProps
  extends Omit<NativeButtonProps & NativeAnchorProps, 'type' | 'onClick'> {
  labelKey: TranslationKey
  variant?: PrimaryButtonVariant
  icon?: ReactNode
  analyticsGoal?: string
  onClick?: () => void
}

const PrimaryButtonSchema = z.object({
  labelKey: z.custom<TranslationKey>(),
  variant: z.enum(['solid', 'ghost']).optional(),
  href: z.string().optional(),
  icon: z.any().optional(),
  analyticsGoal: z.string().optional(),
  disabled: z.boolean().optional(),
})

export const PrimaryButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PrimaryButtonProps
>((props, ref) => {
  const {
    labelKey,
    variant = 'solid',
    icon,
    analyticsGoal,
    className: classNameProp,
    disabled,
    ...rest
  } = props

  const baseProps = PrimaryButtonSchema.parse({
    labelKey,
    variant,
    icon,
    analyticsGoal,
    disabled,
  })
  const { t } = useTranslation()
  const Component = 'href' in rest && rest.href ? 'a' : 'button'

  const ariaDisabled = typeof disabled === 'boolean' ? disabled : undefined

  const className = useMemo(
    () =>
      ['primary-button', variant === 'ghost' ? 'primary-button--ghost' : '']
        .concat(classNameProp ?? '')
        .join(' ')
        .trim(),
    [classNameProp, variant],
  )

  const handleClick = () => {
    if (disabled) {
      return
    }

    if (analyticsGoal) {
      trackYandexGoal(analyticsGoal)
    }
    props.onClick?.()
  }

  return (
    <Component
      {...(rest as typeof rest & Record<string, unknown>)}
      ref={ref as never}
      className={className}
      aria-disabled={ariaDisabled}
      onClick={handleClick}
    >
      {icon}
      <span>{t(baseProps.labelKey)}</span>
    </Component>
  )
})

PrimaryButton.displayName = 'PrimaryButton'
