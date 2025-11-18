import { i18nKeys } from '@i18n/keys'

import type { TranslationKey } from '@i18n/keys'

export type Accent = 'primary' | 'secondary' | 'neutral'

export interface Metric {
  value: string
  labelKey: TranslationKey
  accent?: Accent
}

export type IconId =
  | 'lidar'
  | 'continuity'
  | 'materials'
  | 'timeline'
  | 'shield'
  | 'play'

export interface Feature {
  id: string
  titleKey: TranslationKey
  bodyKey: TranslationKey
  icon: IconId
  accent?: Accent
}

export interface ConfiguratorStep {
  id: string
  step: string
  titleKey: TranslationKey
  descriptionKey: TranslationKey
  icon: IconId
}

export interface ShowcaseScene {
  id: string
  titleKey: TranslationKey
  descriptionKey: TranslationKey
  media: string
  accent?: Accent
}

export interface Testimonial {
  id: string
  quoteKey: TranslationKey
  roleKey: TranslationKey
  author: string
}

export interface ProcessStage {
  id: string
  eta: string
  titleKey: TranslationKey
  descriptionKey: TranslationKey
}

export const siteContent = {
  hero: {
    metrics: [
      {
        value: '14 дн',
        labelKey: i18nKeys.metrics.delivery,
        accent: 'primary',
      },
      {
        value: '347',
        labelKey: i18nKeys.metrics.projects,
        accent: 'secondary',
      },
      {
        value: '99%',
        labelKey: i18nKeys.metrics.rating,
      },
    ] as Metric[],
  },
  features: {
    headingKey: i18nKeys.features.heading,
    captionKey: i18nKeys.features.caption,
    cards: [
      {
        id: 'scan',
        titleKey: i18nKeys.features.cards.madeToFit.title,
        bodyKey: i18nKeys.features.cards.madeToFit.body,
        icon: 'lidar',
        accent: 'primary',
      },
      {
        id: 'continuity',
        titleKey: i18nKeys.features.cards.continuity.title,
        bodyKey: i18nKeys.features.cards.continuity.body,
        icon: 'continuity',
        accent: 'secondary',
      },
      {
        id: 'materials',
        titleKey: i18nKeys.features.cards.materials.title,
        bodyKey: i18nKeys.features.cards.materials.body,
        icon: 'materials',
      },
    ] as Feature[],
  },
  configurator: {
    headingKey: i18nKeys.configurator.heading,
    captionKey: i18nKeys.configurator.caption,
    steps: [
      {
        id: 'scan',
        step: '01',
        titleKey: i18nKeys.configurator.steps.scan.title,
        descriptionKey: i18nKeys.configurator.steps.scan.description,
        icon: 'lidar',
      },
      {
        id: 'configure',
        step: '02',
        titleKey: i18nKeys.configurator.steps.configure.title,
        descriptionKey: i18nKeys.configurator.steps.configure.description,
        icon: 'continuity',
      },
      {
        id: 'deliver',
        step: '03',
        titleKey: i18nKeys.configurator.steps.deliver.title,
        descriptionKey: i18nKeys.configurator.steps.deliver.description,
        icon: 'timeline',
      },
    ] as ConfiguratorStep[],
  },
  showcase: {
    headingKey: i18nKeys.showcase.heading,
    captionKey: i18nKeys.showcase.caption,
    scenes: [
      {
        id: 'halo',
        titleKey: i18nKeys.showcase.cards.halo.title,
        descriptionKey: i18nKeys.showcase.cards.halo.description,
        media:
          'linear-gradient(135deg, rgba(111,134,255,0.6), rgba(122,231,255,0.35))',
        accent: 'primary',
      },
      {
        id: 'gravity',
        titleKey: i18nKeys.showcase.cards.gravity.title,
        descriptionKey: i18nKeys.showcase.cards.gravity.description,
        media:
          'linear-gradient(135deg, rgba(255,180,230,0.55), rgba(255,209,161,0.35))',
        accent: 'secondary',
      },
      {
        id: 'lounge',
        titleKey: i18nKeys.showcase.cards.lounge.title,
        descriptionKey: i18nKeys.showcase.cards.lounge.description,
        media:
          'linear-gradient(135deg, rgba(42,245,152,0.45), rgba(0,158,253,0.4))',
      },
    ] as ShowcaseScene[],
  },
  testimonials: {
    headingKey: i18nKeys.testimonials.heading,
    captionKey: i18nKeys.testimonials.caption,
    cards: [
      {
        id: 'anna',
        quoteKey: i18nKeys.testimonials.cards.anna.quote,
        roleKey: i18nKeys.testimonials.cards.anna.role,
        author: 'Анна',
      },
      {
        id: 'pavel',
        quoteKey: i18nKeys.testimonials.cards.pavel.quote,
        roleKey: i18nKeys.testimonials.cards.pavel.role,
        author: 'Павел',
      },
    ] as Testimonial[],
  },
  process: {
    headingKey: i18nKeys.process.heading,
    captionKey: i18nKeys.process.caption,
    stages: [
      {
        id: 'brief',
        eta: 'День 1',
        titleKey: i18nKeys.process.stages.brief.title,
        descriptionKey: i18nKeys.process.stages.brief.description,
      },
      {
        id: 'twin',
        eta: 'День 4',
        titleKey: i18nKeys.process.stages.twin.title,
        descriptionKey: i18nKeys.process.stages.twin.description,
      },
      {
        id: 'production',
        eta: 'День 9',
        titleKey: i18nKeys.process.stages.production.title,
        descriptionKey: i18nKeys.process.stages.production.description,
      },
      {
        id: 'install',
        eta: 'День 14',
        titleKey: i18nKeys.process.stages.install.title,
        descriptionKey: i18nKeys.process.stages.install.description,
      },
    ] as ProcessStage[],
  },
  cta: {
    headingKey: i18nKeys.cta.heading,
    captionKey: i18nKeys.cta.caption,
    buttonKey: i18nKeys.cta.button,
  },
  footer: {
    rightsKey: i18nKeys.footer.rights,
    policyKey: i18nKeys.footer.policy,
    contacts: [
      {
        id: 'mail',
        labelKey: i18nKeys.footer.contacts.mail,
        href: 'mailto:hello@tailorglass.ru',
      },
      {
        id: 'phone',
        labelKey: i18nKeys.footer.contacts.phone,
        href: 'tel:+74957772828',
      },
    ],
  },
  navigation: [
    {
      id: 'hero',
      labelKey: i18nKeys.navigation.hero,
      href: '#hero',
    },
    {
      id: 'showcase',
      labelKey: i18nKeys.navigation.showcase,
      href: '#showcase',
    },
    {
      id: 'process',
      labelKey: i18nKeys.navigation.process,
      href: '#process',
    },
    {
      id: 'cta',
      labelKey: i18nKeys.navigation.contact,
      href: '#contact',
    },
  ],
  ads: {
    slotId: 'yandex-direct-slot',
    labelKey: i18nKeys.ads.label,
  },
  ecosystem: {
    gateway: {
      auth: 'OAuth2 + Yandex ID',
      schema: 'GraphQL Federation',
    },
    events: {
      broker: 'NATS',
      stream: 'tailorglass.orders',
    },
    monitoring: {
      metrics: 'Prometheus',
      tracing: 'OpenTelemetry',
    },
  },
} as const

export type SiteContent = typeof siteContent
