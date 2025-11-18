import clsx from "clsx";
import { z } from "zod";

import { validateProps } from "@/lib/validation";

const propsSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(["live", "next", "ready"]),
});

type TimelineStepProps = z.infer<typeof propsSchema>;

export const TimelineStep = (rawProps: TimelineStepProps) => {
  const { title, description, status } = validateProps(propsSchema, rawProps);

  return (
    <div
      data-testid="timeline-step"
      className="flex gap-4 rounded-3xl border border-white/15 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] dark:bg-white/3"
    >
      <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/70">
        <span
          className={clsx("h-3 w-3 rounded-full", {
            "bg-emerald-300": status === "live",
            "bg-sky-300": status === "next",
            "bg-white": status === "ready",
          })}
        />
        <span>{status}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="text-sm text-white/75">{description}</p>
      </div>
    </div>
  );
};

TimelineStep.displayName = "TimelineStep";
