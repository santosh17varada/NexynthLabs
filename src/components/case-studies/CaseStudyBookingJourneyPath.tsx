"use client";

import { useReducedMotion } from "@/motion/useReducedMotion";
import { cn } from "@/lib/cn";

type CaseStudyBookingJourneyPathProps = {
  className?: string;
};

/** Gradient path from browser discovery area to mobile confirmation. */
export function CaseStudyBookingJourneyPath({ className }: CaseStudyBookingJourneyPathProps) {
  const reducedMotion = useReducedMotion();
  const path = "M 72 88 C 120 110, 168 128, 248 168 S 312 198, 328 212";

  return (
    <svg
      viewBox="0 0 360 240"
      className={cn("pointer-events-none absolute inset-0 z-[8] h-full w-full", className)}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cs-gp-journey-path" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <path
        d={path}
        fill="none"
        stroke="url(#cs-gp-journey-path)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="6 8"
        opacity={0.7}
        className={cn(!reducedMotion && "getpandit-showcase-path")}
      />
      {!reducedMotion ? (
        <circle r={3.5} fill="#06b6d4" opacity={0.95}>
          <animateMotion dur="3.4s" repeatCount="indefinite" path={path} />
        </circle>
      ) : null}
    </svg>
  );
}
