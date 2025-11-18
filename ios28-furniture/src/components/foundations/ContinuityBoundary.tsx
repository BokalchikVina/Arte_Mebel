import type { ReactNode } from 'react'
import { Component } from 'react'

import { PrimaryButton } from '@atoms/PrimaryButton'
import { i18nKeys } from '@i18n/keys'
import { useTranslation } from '@i18n/useTranslation'
import { reportClientError } from '@services/telemetry'

interface ContinuityBoundaryProps {
  children: ReactNode
}

interface ContinuityBoundaryState {
  hasError: boolean
}

export class ContinuityBoundary extends Component<
  ContinuityBoundaryProps,
  ContinuityBoundaryState
> {
  public state: ContinuityBoundaryState = {
    hasError: false,
  }

  public static getDerivedStateFromError(): ContinuityBoundaryState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, info: { componentStack: string }) {
    reportClientError(error, info.componentStack, 'continuity-boundary')
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return <ContinuityFallback onRetry={() => this.setState({ hasError: false })} />
    }

    return this.props.children
  }
}

const ContinuityFallback = ({ onRetry }: { onRetry: () => void }) => {
  const { t } = useTranslation()

  return (
    <section className="section cta-panel" role="alert">
      <h2>{t(i18nKeys.hero.headline)}</h2>
      <p style={{ maxWidth: '40ch' }}>
        Нам не удалось прогрузить интерфейс. Обновите страницу — состояние
        синхронизируем через Yandex ID.
      </p>
      <PrimaryButton labelKey={i18nKeys.hero.primaryCta} onClick={onRetry} />
    </section>
  )
}
