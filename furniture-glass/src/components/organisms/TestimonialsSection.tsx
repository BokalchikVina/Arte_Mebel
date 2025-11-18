import { testimonials } from "@/lib/content/homepage";
import { t } from "@/lib/i18n";
import { i18nKeys } from "@/lib/i18n/keys";

import { TestimonialCard } from "../molecules/TestimonialCard";

export const TestimonialsSection = () => (
  <section aria-labelledby="testimonials-title" className="space-y-6">
    <header>
      <p className="text-xs uppercase tracking-[0.4em] text-white/40">Voice</p>
      <h2 id="testimonials-title" className="text-3xl font-semibold text-white">
        {t(i18nKeys.testimonials.title)}
      </h2>
      <p className="text-base text-white/70">
        {t(i18nKeys.testimonials.subtitle)}
      </p>
    </header>
    <div className="grid gap-4 md:grid-cols-2">
      {testimonials.map((item) => (
        <TestimonialCard key={item.name} {...item} />
      ))}
    </div>
  </section>
);

TestimonialsSection.displayName = "TestimonialsSection";
