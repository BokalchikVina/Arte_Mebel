"use client";

import { type AnchorHTMLAttributes } from "react";
import clsx from "clsx";
import { z } from "zod";

import { validateProps } from "@/lib/validation";

const propsSchema = z.object({
  label: z.string(),
  href: z
    .string()
    .min(1)
    .refine(
      (val) =>
        val.startsWith("http") ||
        val.startsWith("#") ||
        val.startsWith("mailto:") ||
        val.startsWith("tel:"),
      "Unsupported href format",
    ),
  variant: z.enum(["primary", "ghost"]).default("primary"),
  icon: z.any().optional(),
  ariaLabel: z.string().optional(),
});

type GlassButtonProps = z.input<typeof propsSchema> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export const GlassButton = (rawProps: GlassButtonProps) => {
  const { label, href, variant, icon, ariaLabel, ...rest } = validateProps(
    propsSchema,
    rawProps,
  );

  return (
    <a
      href={href}
      aria-label={ariaLabel ?? label}
      className={clsx(
        "ios-spring inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70",
        variant === "primary" &&
          "glass-panel-dark text-white shadow-[0_10px_30px_rgba(15,23,42,0.35)]",
        variant === "ghost" &&
          "glass-panel text-[rgb(var(--foreground))] border-white/30 bg-white/30",
      )}
      {...rest}
    >
      <span>{label}</span>
      {icon && <span aria-hidden>{icon}</span>}
    </a>
  );
};

GlassButton.displayName = "GlassButton";
