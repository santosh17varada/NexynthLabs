/** Nexynth motion design tokens — mirror CSS vars in globals.css */

export const motionDurations = {
  fast: "150ms",
  base: "200ms",
  slow: "350ms",
  slower: "550ms",
  page: "220ms",
} as const;

export const motionEasings = {
  out: "cubic-bezier(0.16, 1, 0.3, 1)",
  inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

export const motionDistances = {
  hero: "14px",
  card: "10px",
  section: "12px",
  metric: "8px",
} as const;

export const motionStagger = {
  step: "70ms",
  maxIndex: 5,
} as const;

export const motionRules = {
  principles: [
    "Subtle — max 14px travel on hero reveals, 2px hover lift on cards.",
    "Professional — opacity + transform only; no bounce or spin on marketing UI.",
    "Fast — hero 550ms max; interactions 150–200ms.",
    "Accessible — prefers-reduced-motion disables decorative motion instantly.",
  ],
  performance: [
    "Animate transform and opacity only (compositor-friendly).",
    "Scroll reveals fire once via IntersectionObserver then disconnect.",
    "No layout-thrashing properties (width, height, top, margin).",
  ],
} as const;

export type MotionRevealVariant = "hero" | "card" | "section" | "metric" | "fade";

export type MotionDelayIndex = 0 | 1 | 2 | 3 | 4 | 5;
