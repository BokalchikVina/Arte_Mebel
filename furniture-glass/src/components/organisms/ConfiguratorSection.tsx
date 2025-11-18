import { processTimeline } from "@/lib/content/homepage";
import { t } from "@/lib/i18n";
import { i18nKeys } from "@/lib/i18n/keys";

import { TimelineStep } from "../molecules/TimelineStep";

export const ConfiguratorSection = () => (
  <section
    id="flow"
    aria-labelledby="flow-title"
    className="glass-panel mt-16 rounded-[36px] border border-white/20 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.25)]"
  >
    <header className="mb-6 flex flex-col gap-3">
      <p className="text-xs uppercase tracking-[0.4em] text-white/40">Flow</p>
      <div>
        <h2 id="flow-title" className="text-3xl font-semibold text-white">
          {t(i18nKeys.configurator.title)}
        </h2>
        <p className="text-base text-white/70">
          {t(i18nKeys.configurator.subtitle)}
        </p>
      </div>
    </header>
    <div className="grid gap-4 md:grid-cols-3">
      {processTimeline.map((step) => (
        <TimelineStep key={step.title} {...step} />
      ))}
    </div>
  </section>
);

ConfiguratorSection.displayName = "ConfiguratorSection";
