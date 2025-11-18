"use client";

import { motion } from "framer-motion";
import { z } from "zod";

import { validateProps } from "@/lib/validation";

const propsSchema = z.object({
  title: z.string(),
  description: z.string(),
  badge: z.string(),
  gradient: z.string(),
  active: z.boolean().optional(),
});

type SceneCardProps = z.infer<typeof propsSchema>;

export const SceneCard = (rawProps: SceneCardProps) => {
  const { title, description, badge, gradient, active = false } =
    validateProps(propsSchema, rawProps);

  return (
    <motion.article
      layout
      animate={{ opacity: active ? 1 : 0.8, scale: active ? 1 : 0.96 }}
      transition={{ type: "spring", stiffness: 220, damping: 30 }}
      className={`relative flex h-full flex-col justify-between rounded-4xl p-6 text-white shadow-[0_15px_45px_rgba(15,23,42,0.35)] glass-panel bg-gradient-to-br ${gradient}`}
    >
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
        <span className="neumorphic-border rounded-full px-3 py-1">{badge}</span>
        {active && (
          <span className="flex items-center gap-1 text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
            Live
          </span>
        )}
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-base text-white/80">{description}</p>
      </div>
    </motion.article>
  );
};

SceneCard.displayName = "SceneCard";
