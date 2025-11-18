import { PrimaryButton } from '@atoms/PrimaryButton'
import { useTranslation } from '@i18n/useTranslation'
import type { TranslationKey } from '@i18n/keys'

interface CTASectionProps {
  headingKey: TranslationKey
  captionKey: TranslationKey
  buttonKey: TranslationKey
}

export const CTASection = ({
  headingKey,
  captionKey,
  buttonKey,
}: CTASectionProps) => {
  const { t } = useTranslation()

  return (
    <section id="contact" className="section cta-panel">
      <h2>{t(headingKey)}</h2>
      <p className="hero-subtitle" style={{ textAlign: 'center' }}>
        {t(captionKey)}
      </p>
      <PrimaryButton
        labelKey={buttonKey}
        href="https://forms.yandex.ru/cloud/awaiting-tailorglass"
        target="_blank"
        rel="noreferrer"
        analyticsGoal='cta_booking'
      />
    </section>
  )
}
