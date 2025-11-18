"use client";

import { useEffect } from "react";

type MetricEvent = {
  name: string;
  payload?: Record<string, unknown>;
};

export const usePrometheusBridge = (event: MetricEvent) => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent("prometheus:event", { detail: event }));
    navigator.sendBeacon?.(
      "/api/telemetry",
      JSON.stringify({ ...event, source: "atelier-flow" }),
    );
  }, [event]);
};
