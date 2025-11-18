import type { Testimonial } from '@content/structure'
import { TestimonialCard } from '@molecules/TestimonialCard'
import { useTranslation } from '@i18n/useTranslation'
import type { TranslationKey } from '@i18n/keys'

interface TestimonialsSectionProps {
  headingKey: TranslationKey
  captionKey: TranslationKey
  cards: ReadonlyArray<Testimonial>
}

export const TestimonialsSection = ({
  headingKey,
  captionKey,
  cards,
}: TestimonialsSectionProps) => {
  const { t } = useTranslation()

  return (
    <section className="section" aria-labelledby="testimonials-heading">
      <header>
        <h2 id="testimonials-heading" className="hero-title" style={{ fontSize: '2.4rem' }}>
          {t(headingKey)}
        </h2>
        <p className="hero-subtitle">{t(captionKey)}</p>
      </header>
      <div className="testimonials-grid">
        {cards.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}
