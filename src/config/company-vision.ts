import { address, brandName, companyName, flagshipProductName } from "@/config/site-values";
import type { CompanyPrinciple, CompanyVisionPillar } from "@/types/company";

/**
 * Company vision — shared with founder story vision section.
 * Edit here; founder page imports pillars from this file.
 */
export const companyVisionPageCopy = {
  hero: {
    eyebrow: "Vision",
    title: "Where we are headed",
    description: `${brandName} builds trustworthy technology for devotional services, automation, and platform businesses — with honest readiness labels and human oversight for AI.`,
  },
  mission: {
    eyebrow: "Mission",
    title: `What ${brandName} exists to do`,
    paragraphs: [
      `${companyName} helps families and organisations navigate spiritual services and modern digital products with clarity — not hype.`,
      `We ship flagship products on dedicated domains, keep corporate storytelling separate from live booking systems, and invest in integrations that partners can reuse.`,
      `Based in ${address.city}, we serve India-first use cases with engineering discipline and respect for tradition.`,
    ],
  },
  pillars: {
    eyebrow: "Pillars",
    title: "AI, automation, and spiritual technology",
    description:
      "Devotional technology should amplify trust — not replace it. AI and automation support clearer discovery, better operations, and respectful support with human oversight.",
    items: [
      {
        id: "practical-ai",
        title: "Practical AI, not hype",
        description:
          "Agentic workflows, support automation, and integration layers are designed with evals, escalation paths, and measurable outcomes before production rollout.",
      },
      {
        id: "spiritual-tech",
        title: "Spiritual technology with care",
        description:
          "Products in this space demand cultural sensitivity, transparent service detail, and separation between marketing sites and live booking domains.",
      },
      {
        id: "platform-thinking",
        title: "Platform thinking",
        description:
          "Payments, messaging, CRM, and analytics slots are planned early so partners and products can scale without repeated rewrites.",
      },
      {
        id: "honest-readiness",
        title: "Honest readiness communication",
        description:
          "We publish what is live, in progress, or planned — for GetPandit and the wider ecosystem — so investors and partners can plan with clarity.",
      },
    ] satisfies readonly CompanyVisionPillar[],
  },
  principles: {
    eyebrow: "Principles",
    title: "How we make decisions",
    description: "Operating principles — not guarantees of outcome or investment performance.",
    items: [
      {
        id: "families-first",
        title: "Families and partners first",
        description:
          "User journeys in devotional contexts deserve calm UX, accurate ritual detail, and clear escalation to humans.",
      },
      {
        id: "separate-domains",
        title: "Separate product domains",
        description: `${flagshipProductName} and future products release on their own domains — nexynthlabs.com explains; getpandit.com delivers.`,
      },
      {
        id: "measure-twice",
        title: "Measure before scaling claims",
        description:
          "We do not publish user counts, revenue, or certifications unless verified and approved for public release.",
      },
      {
        id: "long-term-code",
        title: "Long-term maintainability",
        description:
          "Config-driven content, typed stacks, and documented integrations reduce rework for the next engineer or partner.",
      },
    ] satisfies readonly CompanyPrinciple[],
  },
  disclaimer:
    "Company vision only — not investment advice, forward-looking guarantees, or unverified metrics. Product availability follows status labels on the product ecosystem and innovation lab pages.",
  closingCta: {
    title: "Align on a partnership or project?",
    description: "Tell us which direction resonates — services, product, or ecosystem collaboration.",
    primary: { label: "Book consultation", href: "/book-consultation" },
    secondary: { label: "Founder story", href: "/founder" },
  },
} as const;

/** @deprecated Use companyVisionPageCopy.pillars — kept for founder-story import */
export const companyVisionPillars = companyVisionPageCopy.pillars;
