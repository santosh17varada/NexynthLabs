import type { MotionDelayIndex, MotionRevealVariant } from "@/motion/tokens";

export const motionClasses = {
  heroReveal: "motion-hero-reveal",
  cardReveal: "motion-card-reveal",
  sectionReveal: "motion-section-reveal",
  metricReveal: "motion-metric-reveal",
  fadeReveal: "motion-fade-reveal",
  pageEnter: "motion-page-enter",
  hoverLift: "motion-hover-lift",
  cta: "motion-cta",
  sectionTransition: "motion-section-transition",
} as const;

export const motionRevealClassByVariant: Record<MotionRevealVariant, string> = {
  hero: motionClasses.heroReveal,
  card: motionClasses.cardReveal,
  section: motionClasses.sectionReveal,
  metric: motionClasses.metricReveal,
  fade: motionClasses.fadeReveal,
};

export const motionDelayClasses: Record<MotionDelayIndex, string> = {
  0: "",
  1: "motion-delay-1",
  2: "motion-delay-2",
  3: "motion-delay-3",
  4: "motion-delay-4",
  5: "motion-delay-5",
};

export const motionCardInteractiveClass = `${motionClasses.cardReveal} ${motionClasses.hoverLift}`;

export const motionCtaClass = motionClasses.cta;
