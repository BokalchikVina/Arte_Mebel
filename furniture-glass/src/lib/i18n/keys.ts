export const i18nKeys = {
  hero: {
    eyebrow: "hero.eyebrow",
    title: "hero.title",
    subtitle: "hero.subtitle",
    ctaPrimary: "hero.cta_primary",
    ctaSecondary: "hero.cta_secondary",
    trust: "hero.trust",
  },
  showcase: {
    title: "showcase.title",
    subtitle: "showcase.subtitle",
  },
  configurator: {
    title: "configurator.title",
    subtitle: "configurator.subtitle",
  },
  testimonials: {
    title: "testimonials.title",
    subtitle: "testimonials.subtitle",
  },
  yandex: {
    title: "yandex.title",
    subtitle: "yandex.subtitle",
  },
} as const;

type NestedValues<T> = T extends string
  ? T
  : { [K in keyof T]: NestedValues<T[K]> }[keyof T];

export type I18nKey = NestedValues<typeof i18nKeys>;
