"use client";

import { useState } from "react";
import { SocialProofFallbackPromo } from "@/components/social-proof/SocialProofFallbackPromo";
import { TestimonialCard } from "@/components/social-proof/TestimonialCard";
import {
  getApprovedTestimonials,
  getTestimonialsByCategory,
  hasApprovedTestimonials,
  testimonialCategories,
  testimonialCategoryLabels,
} from "@/config/testimonials";
import type { TestimonialCategory } from "@/types/testimonials";
import { cn } from "@/lib/cn";

type TestimonialsGridProps = {
  className?: string;
};

export function TestimonialsGrid({ className }: TestimonialsGridProps) {
  const [category, setCategory] = useState<TestimonialCategory | "all">("all");

  if (!hasApprovedTestimonials()) {
    return <SocialProofFallbackPromo className={className} />;
  }

  const items =
    category === "all" ? getApprovedTestimonials() : getTestimonialsByCategory(category);

  return (
    <div className={className}>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter testimonials by category"
      >
        <FilterTab
          active={category === "all"}
          onClick={() => setCategory("all")}
          label="All"
        />
        {testimonialCategories.map((cat) => (
          <FilterTab
            key={cat}
            active={category === cat}
            onClick={() => setCategory(cat)}
            label={testimonialCategoryLabels[cat]}
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {items.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

function FilterTab({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "min-h-10 rounded-ds-full border px-4 py-2 text-sm font-semibold transition-colors",
        active
          ? "border-electric-blue/40 bg-electric-violet/10 text-foreground"
          : "border-border/60 bg-surface text-muted hover:border-border hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
