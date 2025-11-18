import type { Feature } from '@content/structure'
import { FeatureCard } from '@molecules/FeatureCard'
import { useTranslation } from '@i18n/useTranslation'
import type { TranslationKey } from '@i18n/keys'

interface FeatureOrbitProps {
  headingKey: TranslationKey
  captionKey: TranslationKey
  cards: ReadonlyArray<Feature>
}

export const FeatureOrbit = ({
  headingKey,
  captionKey,
  cards,
}: FeatureOrbitProps) => {
  const { t } = useTranslation()

  return (
    <section className="section" aria-labelledby="feature-heading">
      <header>
        <h2 id="feature-heading" className="hero-title" style={{ fontSize: '2.4rem' }}>
          {t(headingKey)}
        </h2>
        <p className="hero-subtitle">{t(captionKey)}</p>
      </header>
      <div className="feature-grid">
        {cards.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  )
}
