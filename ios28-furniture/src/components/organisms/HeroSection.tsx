import type { Metric } from '@content/structure'
import { MetricTag } from '@atoms/MetricTag'
import { PrimaryButton } from '@atoms/PrimaryButton'
import { useTranslation } from '@i18n/useTranslation'
import { i18nKeys } from '@i18n/keys'
import type { TranslationKey } from '@i18n/keys'
import { scheduleYandexAd } from '@services/yandex'
import { useEffect } from 'react'

interface NavigationLink {
  id: string
  labelKey: TranslationKey
  href: string
}

interface HeroSectionProps {
  metrics: ReadonlyArray<Metric>
  navigation: ReadonlyArray<NavigationLink>
  adsSlotId: string
  adsLabelKey: TranslationKey
}

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const HeroSection = ({
  metrics,
  navigation,
  adsSlotId,
  adsLabelKey,
}: HeroSectionProps) => {
  const { t } = useTranslation()

  useEffect(() => {
    scheduleYandexAd(adsSlotId, 'floorAd')
  }, [adsSlotId])

  return (
    <section id="hero" className="section hero-grid">
      <div>
        <nav className="hero-nav" aria-label="Основная навигация">
          {navigation.map((link) => (
            <a key={link.id} href={link.href}>
              {t(link.labelKey)}
            </a>
          ))}
        </nav>
        <div className="hero-eyebrow">TailorGlass · Bespoke Ecosystem</div>
        <h1 className="hero-title">{t(i18nKeys.hero.headline)}</h1>
        <p className="hero-subtitle">{t(i18nKeys.hero.subheadline)}</p>
        <div className="actions-row">
          <PrimaryButton
            labelKey={i18nKeys.hero.primaryCta}
            analyticsGoal="cta_primary"
            icon={<ArrowIcon />}
          />
          <PrimaryButton
            labelKey={i18nKeys.hero.secondaryCta}
            variant="ghost"
            analyticsGoal="cta_secondary"
          />
        </div>
        <p className="continuity-hint">{t(i18nKeys.hero.continuityHint)}</p>
        <div className="metric-grid">
          {metrics.map((metric) => (
            <MetricTag key={metric.labelKey} metric={metric} />
          ))}
        </div>
      </div>
      <div className="hero-device" aria-label="Превью конфигуратора iOS28">
        <div className="hero-device__status">
          <span>12:28</span>
          <span>TailorGlass</span>
        </div>
        <div className="hero-device__card">
          <div className="hero-device__pill">LiDAR Sync</div>
          <strong>Continuity Flow</strong>
          <p>{t(i18nKeys.features.cards.continuity.body)}</p>
        </div>
        <div className="hero-device__card hero-device__card--secondary">
          <strong>Supply ETA</strong>
          <p>14 дней · core-lib события</p>
        </div>
        <div id={adsSlotId} className="ads-slot" aria-label={t(adsLabelKey)} />
      </div>
    </section>
  )
}
