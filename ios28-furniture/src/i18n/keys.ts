export const i18nKeys = {
  navigation: {
    hero: 'navigation.hero',
    showcase: 'navigation.showcase',
    process: 'navigation.process',
    contact: 'navigation.contact',
  },
  hero: {
    headline: 'hero.headline',
    subheadline: 'hero.subheadline',
    primaryCta: 'hero.primaryCta',
    secondaryCta: 'hero.secondaryCta',
    continuityHint: 'hero.continuityHint',
  },
  metrics: {
    delivery: 'metrics.delivery',
    projects: 'metrics.projects',
    rating: 'metrics.rating',
  },
  features: {
    heading: 'features.heading',
    caption: 'features.caption',
    cards: {
      madeToFit: {
        title: 'features.cards.madeToFit.title',
        body: 'features.cards.madeToFit.body',
      },
      continuity: {
        title: 'features.cards.continuity.title',
        body: 'features.cards.continuity.body',
      },
      materials: {
        title: 'features.cards.materials.title',
        body: 'features.cards.materials.body',
      },
    },
  },
  configurator: {
    heading: 'configurator.heading',
    caption: 'configurator.caption',
    steps: {
      scan: {
        title: 'configurator.steps.scan.title',
        description: 'configurator.steps.scan.description',
      },
      configure: {
        title: 'configurator.steps.configure.title',
        description: 'configurator.steps.configure.description',
      },
      deliver: {
        title: 'configurator.steps.deliver.title',
        description: 'configurator.steps.deliver.description',
      },
    },
  },
  showcase: {
    heading: 'showcase.heading',
    caption: 'showcase.caption',
    cards: {
      halo: {
        title: 'showcase.cards.halo.title',
        description: 'showcase.cards.halo.description',
      },
      gravity: {
        title: 'showcase.cards.gravity.title',
        description: 'showcase.cards.gravity.description',
      },
      lounge: {
        title: 'showcase.cards.lounge.title',
        description: 'showcase.cards.lounge.description',
      },
    },
  },
  testimonials: {
    heading: 'testimonials.heading',
    caption: 'testimonials.caption',
    cards: {
      anna: {
        quote: 'testimonials.cards.anna.quote',
        role: 'testimonials.cards.anna.role',
      },
      pavel: {
        quote: 'testimonials.cards.pavel.quote',
        role: 'testimonials.cards.pavel.role',
      },
    },
  },
  process: {
    heading: 'process.heading',
    caption: 'process.caption',
    stages: {
      brief: {
        title: 'process.stages.brief.title',
        description: 'process.stages.brief.description',
      },
      twin: {
        title: 'process.stages.twin.title',
        description: 'process.stages.twin.description',
      },
      production: {
        title: 'process.stages.production.title',
        description: 'process.stages.production.description',
      },
      install: {
        title: 'process.stages.install.title',
        description: 'process.stages.install.description',
      },
    },
  },
  cta: {
    heading: 'cta.heading',
    caption: 'cta.caption',
    button: 'cta.button',
  },
  footer: {
    rights: 'footer.rights',
    policy: 'footer.policy',
    contacts: {
      mail: 'footer.contacts.mail',
      phone: 'footer.contacts.phone',
    },
  },
  ads: {
    label: 'ads.label',
  },
} as const

type Leaf<T> = T extends string
  ? T
  : { [K in keyof T]: Leaf<T[K]> }[keyof T]

export type TranslationKey = Leaf<typeof i18nKeys>

export type Locale = 'ru-RU'
