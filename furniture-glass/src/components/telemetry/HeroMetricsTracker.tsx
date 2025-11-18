"use client";

import { usePrometheusBridge } from "@/lib/observability/metrics";

export const HeroMetricsTracker = () => {
  usePrometheusBridge({
    name: "hero_impression",
    payload: { variant: "ios28_glass" },
  });

  return null;
};

HeroMetricsTracker.displayName = "HeroMetricsTracker";
