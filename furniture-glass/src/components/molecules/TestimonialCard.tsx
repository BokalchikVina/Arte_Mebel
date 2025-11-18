"use client";

import { motion } from "framer-motion";
import { z } from "zod";

import { validateProps } from "@/lib/validation";

const propsSchema = z.object({
  name: z.string(),
  context: z.string(),
  quote: z.string(),
});

type TestimonialCardProps = z.infer<typeof propsSchema>;

export const TestimonialCard = (rawProps: TestimonialCardProps) => {
  const { name, context, quote } = validateProps(propsSchema, rawProps);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="glass-panel flex h-full flex-col gap-4 rounded-3xl border border-white/20 p-6"
    >
      <figcaption>
        <p className="text-lg font-semibold text-white">{name}</p>
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">
          {context}
        </p>
      </figcaption>
      <blockquote className="text-base text-white/80 leading-relaxed">
        {quote}
      </blockquote>
    </motion.figure>
  );
};

TestimonialCard.displayName = "TestimonialCard";
