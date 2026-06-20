"use client";

import { useReducedMotion } from "@/motion/useReducedMotion";
import { cn } from "@/lib/cn";

const JOURNEY_STEPS = [
  { id: "search", label: "Search" },
  { id: "discover", label: "Discover" },
  { id: "book", label: "Book" },
  { id: "confirm", label: "Confirm" },
  { id: "reminder", label: "Reminder" },
] as const;

type CaseStudyJourneyRibbonProps = {
  className?: string;
};

export function CaseStudyJourneyRibbon({ className }: CaseStudyJourneyRibbonProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "flex shrink-0 flex-wrap items-center justify-center gap-x-1 gap-y-1.5 border-b border-border/40 bg-surface/60 px-3 py-2.5 backdrop-blur-sm sm:gap-x-0 sm:px-4",
        className,
      )}
      aria-hidden="true"
    >
      {JOURNEY_STEPS.map((step, index) => (
        <span key={step.id} className="inline-flex items-center gap-1 sm:gap-1.5">
          <span
            className={cn(
              "rounded-ds-full border px-2 py-0.5 text-[0.6rem] font-semibold tracking-wide sm:px-2.5 sm:text-[0.65rem]",
              "border-electric-blue/25 bg-electric-blue/5 text-foreground",
              !reducedMotion && "case-study-journey-step",
            )}
            style={!reducedMotion ? { animationDelay: `${index * 0.55}s` } : undefined}
          >
            {step.label}
          </span>
          {index < JOURNEY_STEPS.length - 1 ? (
            <span
              className={cn(
                "text-[0.65rem] font-medium text-electric-violet/70 sm:text-xs",
                !reducedMotion && "case-study-journey-arrow",
              )}
              style={!reducedMotion ? { animationDelay: `${index * 0.55}s` } : undefined}
            >
              →
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}
