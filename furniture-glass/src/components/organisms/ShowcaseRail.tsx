import { showcaseScenes } from "@/lib/content/homepage";
import { t } from "@/lib/i18n";
import { i18nKeys } from "@/lib/i18n/keys";

import { SceneCard } from "../molecules/SceneCard";

export const ShowcaseRail = () => (
  <section aria-labelledby="showcase-title" className="space-y-6">
    <header className="flex flex-col gap-3">
      <p className="text-xs uppercase tracking-[0.4em] text-white/50">Continuity</p>
      <div>
        <h2 id="showcase-title" className="text-3xl font-semibold text-white">
          {t(i18nKeys.showcase.title)}
        </h2>
        <p className="text-base text-white/70">
          {t(i18nKeys.showcase.subtitle)}
        </p>
      </div>
    </header>
    <div className="grid gap-4 md:grid-cols-3">
      {showcaseScenes.map((scene, index) => (
        <SceneCard key={scene.id} {...scene} active={index === 0} />
      ))}
    </div>
  </section>
);

ShowcaseRail.displayName = "ShowcaseRail";
