import { brandName } from "@/config/site-values";

export const homeSocialProofCopy = {
  eyebrow: "Proof",
  title: "Trusted delivery, honest labels",
  description: `${brandName} shares readiness signals, delivery stories, and approved partner feedback — without fabricated metrics or vanity counters.`,
  caseStudyLabel: "Featured delivery story",
  caseStudiesFallbackLabel: "Delivery stories",
  testimonialsLabel: "Partner voices",
  disclaimer:
    "Trust indicators describe positioning pillars. Case study outcomes are qualitative unless explicitly verified. Approved quotes require written permission.",
  ctas: {
    caseStudies: { label: "All case studies", href: "/case-studies" },
    testimonials: { label: "All testimonials", href: "/testimonials" },
  },
} as const;
