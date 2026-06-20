"use client";

import { useState } from "react";
import { CaseStudyGetPanditCardVisual } from "@/components/case-studies/CaseStudyGetPanditCardVisual";
import { CaseStudyMockupShowcase } from "@/components/case-studies/CaseStudyMockupShowcase";
import { homeCaseStudyExcerpts } from "@/config/home-case-studies";
import { cn } from "@/lib/cn";

const DELIVERY_STEPS = [
  {
    id: "problem",
    label: "Problem",
    summary: homeCaseStudyExcerpts.getpandit.problem,
    accent: "text-electric-cyan",
    ring: "border-electric-cyan/35 bg-electric-cyan/5",
  },
  {
    id: "solution",
    label: "Solution",
    summary: homeCaseStudyExcerpts.getpandit.solution,
    accent: "text-electric-blue",
    ring: "border-electric-blue/35 bg-electric-blue/5",
  },
  {
    id: "outcome",
    label: "Outcome",
    summary: homeCaseStudyExcerpts.getpandit.outcome,
    accent: "text-electric-violet",
    ring: "border-electric-violet/35 bg-electric-violet/5",
  },
] as const;

type StepId = (typeof DELIVERY_STEPS)[number]["id"];

type CaseStudyDeliveryStoryVisualProps = {
  ariaLabel: string;
  className?: string;
  compact?: boolean;
};

export function CaseStudyDeliveryStoryVisual({
  ariaLabel,
  className,
  compact = false,
}: CaseStudyDeliveryStoryVisualProps) {
  const [active, setActive] = useState<StepId>("solution");
  const step = DELIVERY_STEPS.find((item) => item.id === active) ?? DELIVERY_STEPS[1];

  if (compact) {
    return (
      <div className={cn("w-full", className)} role="img" aria-label={ariaLabel}>
        <CaseStudyGetPanditCardVisual />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden bg-gradient-to-br from-surface via-background to-primary/[0.04]",
        className,
      )}
      role="img"
      aria-label={ariaLabel}
    >
      <div className="shrink-0 border-b border-border/50 px-5 py-4 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {DELIVERY_STEPS.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={cn(
                  "rounded-ds-full border px-3 py-1 text-[0.65rem] font-semibold transition-all duration-200 sm:text-xs",
                  isActive
                    ? `${item.ring} text-foreground shadow-soft`
                    : "border-border/60 bg-surface text-muted hover:border-electric-blue/30",
                )}
                aria-pressed={isActive}
                onMouseEnter={() => setActive(item.id)}
                onFocus={() => setActive(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          <span className={cn("font-semibold", step.accent)}>{step.label}: </span>
          {step.summary}
        </p>
      </div>

      <CaseStudyMockupShowcase layout="featured" />
    </div>
  );
}
