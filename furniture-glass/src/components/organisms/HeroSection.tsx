import { heroMetrics } from "@/lib/content/homepage";
import { brand } from "@/lib/brand";
import { t } from "@/lib/i18n";
import { i18nKeys } from "@/lib/i18n/keys";

import { GlassButton } from "../atoms/GlassButton";
import { MetricTile } from "../atoms/MetricTile";
import { HeroMetricsTracker } from "../telemetry/HeroMetricsTracker";

export const HeroSection = () => (
  <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 rounded-[40px] border border-white/15 bg-white/10 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-3xl">
    <HeroMetricsTracker />
    <div className="flex flex-wrap items-center justify-between gap-6">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">
          {t(i18nKeys.hero.eyebrow)}
        </p>
        <h1 className="text-4xl font-semibold text-white md:text-6xl">
          {t(i18nKeys.hero.title)}
        </h1>
        <p className="text-lg text-white/80 md:max-w-2xl">
          {t(i18nKeys.hero.subtitle)}
        </p>
      </div>
      <div className="flex flex-col items-end gap-3 text-right text-sm text-white/80">
        <span className="text-xs uppercase tracking-[0.4em] text-white/50">
          {brand.tagline}
        </span>
        <p>{t(i18nKeys.hero.trust)}</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-4">
      <GlassButton label={t(i18nKeys.hero.ctaPrimary)} href="https://wa.me/79999999999" />
      <GlassButton
        label={t(i18nKeys.hero.ctaSecondary)}
        href="#flow"
        variant="ghost"
      />
    </div>
    <div className="grid gap-4 md:grid-cols-3">
      {heroMetrics.map((metric) => (
        <MetricTile key={metric.label} {...metric} />
      ))}
    </div>
  </section>
);

HeroSection.displayName = "HeroSection";
