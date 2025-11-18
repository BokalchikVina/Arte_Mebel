import { yandexStack } from "@/lib/content/homepage";
import { brand } from "@/lib/brand";
import { t } from "@/lib/i18n";
import { i18nKeys } from "@/lib/i18n/keys";

import { GlassCard } from "../atoms/GlassCard";

export const YandexStackSection = () => (
  <section
    id="yandex"
    aria-labelledby="yandex-title"
    className="glass-panel mt-16 rounded-[32px] border border-white/20 p-8"
  >
    <header className="mb-6 flex flex-col gap-2">
      <p className="text-xs uppercase tracking-[0.4em] text-white/40">Yandex Suite</p>
      <div>
        <h2 id="yandex-title" className="text-3xl font-semibold text-white">
          {t(i18nKeys.yandex.title)}
        </h2>
        <p className="text-base text-white/70">
          {t(i18nKeys.yandex.subtitle)}
        </p>
      </div>
    </header>
    <div className="grid gap-4 md:grid-cols-3">
      {yandexStack.map((item, index) => (
        <GlassCard
          key={item.title}
          badge={item.icon}
          title={item.title}
          subtitle={item.description}
          accent={
            index === 0
              ? "from-[#5d8bff]/60 to-[#7db5ff]/40"
              : index === 1
                ? "from-[#ffb174]/60 to-[#ffdfc2]/30"
                : "from-[#64d3c0]/60 to-[#9fffe0]/30"
          }
        />
      ))}
    </div>
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-white/70">
      <span>Маркетинг пакуется в pod core-lib.</span>
      <a
        href={brand.mapsLink}
        target="_blank"
        rel="noreferrer"
        className="text-white underline-offset-4 hover:underline"
      >
        Посмотреть шоурум в Yandex Maps
      </a>
    </div>
  </section>
);

YandexStackSection.displayName = "YandexStackSection";
