"use client";

import { useReducedMotion } from "@/motion/useReducedMotion";
import { cn } from "@/lib/cn";

type GetPanditShowcaseConnectionProps = {
  className?: string;
};

/** Animated path from browser discovery to mobile confirmation. */
export function GetPanditShowcaseConnection({ className }: GetPanditShowcaseConnectionProps) {
  const reducedMotion = useReducedMotion();
  const path = "M 48 72 Q 140 96 248 168 T 318 210";

  return (
    <svg
      viewBox="0 0 360 240"
      className={cn("pointer-events-none absolute inset-0 z-[5] h-full w-full", className)}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gp-showcase-path" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <path
        d={path}
        fill="none"
        stroke="url(#gp-showcase-path)"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeDasharray="5 7"
        opacity={0.65}
        className={cn(!reducedMotion && "getpandit-showcase-path")}
      />
      {!reducedMotion ? (
        <circle r={3} fill="#06b6d4" opacity={0.9}>
          <animateMotion dur="3.2s" repeatCount="indefinite" path={path} />
        </circle>
      ) : null}
    </svg>
  );
}
