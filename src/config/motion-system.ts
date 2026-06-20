import { motionRules } from "@/motion/tokens";

export const motionSystemCopy = {
  title: "Motion design system",
  description:
    "Subtle, professional motion for marketing UI — hero reveals, scroll-triggered cards, CTA feedback, and fast page transitions. Disabled when prefers-reduced-motion is set.",
  usage: `import { MotionReveal, MotionHeroReveal } from "@/motion";

<MotionHeroReveal>…</MotionHeroReveal>
<MotionReveal variant="card" delay={2} hoverLift>…</MotionReveal>`,
  principles: motionRules.principles,
  performance: motionRules.performance,
} as const;
