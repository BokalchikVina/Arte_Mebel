import type { ConfiguratorStep } from '@content/structure'
import { ConfiguratorStepCard } from '@molecules/ConfiguratorStepCard'
import { useTranslation } from '@i18n/useTranslation'
import type { TranslationKey } from '@i18n/keys'

interface ConfiguratorSectionProps {
  headingKey: TranslationKey
  captionKey: TranslationKey
  steps: ReadonlyArray<ConfiguratorStep>
}

export const ConfiguratorSection = ({
  headingKey,
  captionKey,
  steps,
}: ConfiguratorSectionProps) => {
  const { t } = useTranslation()

  return (
    <section className="section" aria-labelledby="configurator-heading">
      <header>
        <h2 id="configurator-heading" className="hero-title" style={{ fontSize: '2.4rem' }}>
          {t(headingKey)}
        </h2>
        <p className="hero-subtitle">{t(captionKey)}</p>
      </header>
      <div className="configurator-grid">
        {steps.map((step) => (
          <ConfiguratorStepCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  )
}
