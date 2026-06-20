import { getPanditMarketingCopy } from "@/config/getpandit-marketing";

const { hero, problem } = getPanditMarketingCopy;

export const homeGetPanditHighlightCopy = {
  eyebrow: hero.eyebrow,
  title: hero.title,
  description: hero.description,
  highlights: problem.pains.map((pain) => pain.title) as readonly string[],
  primaryCta: hero.primaryCta,
  secondaryCta: { label: "Explore GetPandit", href: "/getpandit" },
  caseStudyCta: { label: "Read the case study", href: "/case-studies/getpandit" },
  mockup: hero.mockup,
} as const;
