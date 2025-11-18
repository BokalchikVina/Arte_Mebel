import type { ShowcaseScene } from '@content/structure'
import { IconBadge } from '@atoms/IconBadge'
import { useTranslation } from '@i18n/useTranslation'
import type { TranslationKey } from '@i18n/keys'

interface ShowcaseSectionProps {
  headingKey: TranslationKey
  captionKey: TranslationKey
  scenes: ReadonlyArray<ShowcaseScene>
}

export const ShowcaseSection = ({
  headingKey,
  captionKey,
  scenes,
}: ShowcaseSectionProps) => {
  const { t } = useTranslation()

  return (
    <section id="showcase" className="section" aria-labelledby="showcase-heading">
      <header>
        <h2 id="showcase-heading" className="hero-title" style={{ fontSize: '2.4rem' }}>
          {t(headingKey)}
        </h2>
        <p className="hero-subtitle">{t(captionKey)}</p>
      </header>
      <div className="showcase-slider">
        {scenes.map((scene) => (
          <article
            key={scene.id}
            className="showcase-card"
            style={{ backgroundImage: scene.media }}
          >
            <IconBadge icon="play" />
            <h3 style={{ margin: 'var(--space-lg) 0 var(--space-sm)' }}>
              {t(scene.titleKey)}
            </h3>
            <p style={{ maxWidth: '32ch' }}>{t(scene.descriptionKey)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
