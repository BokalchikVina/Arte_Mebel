import { z } from "zod";

import { validateProps } from "@/lib/validation";

const propsSchema = z.object({
  value: z.string(),
  label: z.string(),
});

type MetricTileProps = z.infer<typeof propsSchema>;

export const MetricTile = (rawProps: MetricTileProps) => {
  const { value, label } = validateProps(propsSchema, rawProps);

  return (
    <div className="glass-panel-dark flex flex-col rounded-2xl px-4 py-3 text-white shadow-inner shadow-white/20">
      <span className="text-2xl font-semibold">{value}</span>
      <span className="text-xs uppercase tracking-[0.3em] text-white/60">
        {label}
      </span>
    </div>
  );
};

MetricTile.displayName = "MetricTile";
