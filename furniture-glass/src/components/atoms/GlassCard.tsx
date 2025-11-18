import type { PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";
import { z } from "zod";

import { validateProps } from "@/lib/validation";

const propsSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  badge: z.string().optional(),
  accent: z.string().default("from-white/30 to-white/10"),
  icon: z.custom<ReactNode>().optional(),
});

type GlassCardProps = PropsWithChildren<z.input<typeof propsSchema>>;

export const GlassCard = ({ children, ...rawProps }: GlassCardProps) => {
  const { title, subtitle, badge, accent, icon } = validateProps(
    propsSchema,
    rawProps,
  );

  return (
    <section
      className={clsx(
        "glass-panel relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/40 p-6 text-sm text-white shadow-[0_20px_45px_rgba(15,23,42,0.28)] dark:border-white/10",
        "bg-gradient-to-br",
        accent,
      )}
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80">
        {badge && <span>{badge}</span>}
        {icon}
      </div>
      {title && <p className="text-2xl font-semibold text-white">{title}</p>}
      {subtitle && (
        <p className="text-base text-white/80 leading-relaxed">{subtitle}</p>
      )}
      {children}
    </section>
  );
};

GlassCard.displayName = "GlassCard";
