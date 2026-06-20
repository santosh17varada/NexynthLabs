import { address, brandName } from "@/config/site-values";
import { getFlagshipProduct, siteConfig } from "@/config/site";
import type {
  CareersBenefit,
  CareersHiringStep,
  CareersNavItem,
  CareersOpenRolesMode,
  CareersValueCard,
  CultureSection,
} from "@/types/careers-culture";

const flagship = getFlagshipProduct();

export const careersIntro = {
  eyebrow: "Careers",
  title: "Build products people trust",
  description: `Join a small product team in ${address.city} — shipping ${flagship.name}, AI platforms, and enterprise software with craft, honesty, and empathy.`,
};

export const careersPageCopy = {
  sectionNav: [
    { id: "culture", label: "Culture" },
    { id: "engineering", label: "Engineering" },
    { id: "growth", label: "Growth" },
    { id: "benefits", label: "Benefits" },
    { id: "hiring-process", label: "Process" },
    { id: "open-positions", label: "Roles" },
  ] satisfies readonly CareersNavItem[],
  culture: {
    eyebrow: "Culture",
    title: "Small team, clear ownership",
    description:
      "We optimise for trust-heavy products — devotional services, marketplaces, and AI with guardrails. No vanity metrics culture.",
    values: [
      {
        id: "purpose",
        title: "Purpose over vanity metrics",
        description:
          "Honest readiness labels on products and experiments — internally and on the corporate site.",
      },
      {
        id: "ownership",
        title: "End-to-end ownership",
        description:
          "Engineers and designers ship features with lightweight review, not heavy hierarchy.",
      },
      {
        id: "roots",
        title: "Hyderabad roots, India-first",
        description: `Headquartered in ${address.city} with collaboration across India — product domains stay separate from marketing.`,
      },
      {
        id: "respect",
        title: "Respect for users and tradition",
        description:
          "Spiritual and family contexts demand empathy, accuracy, and calm UX — not growth hacks.",
      },
    ] satisfies readonly CareersValueCard[],
    culturePageHref: "/careers/culture",
  },
  engineeringPrinciples: {
    eyebrow: "Engineering",
    title: "Engineering principles",
    description:
      "TypeScript-first stacks, config-driven content, and production discipline — inspired by teams like Linear and Vercel, adapted for our domain.",
    principles: [
      {
        id: "readable",
        title: "Ship readable code",
        description:
          "Next.js, APIs, and integrations understandable by the next engineer — not clever for its own sake.",
      },
      {
        id: "static-first",
        title: "Static-first where it fits",
        description:
          "Marketing and trust pages stay fast and auditable; dynamic features earn their server cost.",
      },
      {
        id: "integrations",
        title: "Integration-ready architecture",
        description:
          "Payments, WhatsApp, SMS, and AI slots planned early — products plug in without rewrites.",
      },
      {
        id: "ai-guardrails",
        title: "Review before production AI",
        description:
          "Evals, human-in-the-loop paths, and cost caps before customer-facing agent features.",
      },
      {
        id: "design-system",
        title: "Design system discipline",
        description:
          "Tokens, motion, and components reused across pages — premium UX without one-off CSS sprawl.",
      },
      {
        id: "honest-shipping",
        title: "Honest shipping",
        description:
          "We label what is live, in progress, or planned — for GetPandit and every client engagement.",
      },
    ] satisfies readonly CareersValueCard[],
  },
  growth: {
    eyebrow: "Growth",
    title: "Learn as you ship",
    description:
      "Continuous improvement through docs, pairing, and curiosity — formal L&D scales with company stage.",
    items: [
      {
        id: "writing",
        title: "Writing clarifies thinking",
        description:
          "Public guides and internal notes turn spikes into playbooks for the next engineer.",
      },
      {
        id: "pairing",
        title: "Pairing and review",
        description:
          "Pull requests and design critiques are teaching moments, not gatekeeping.",
      },
      {
        id: "conferences",
        title: "Courses and events",
        description:
          "Relevant learning supported when aligned to roadmap — case-by-case approval.",
      },
      {
        id: "cross-stack",
        title: "Cross-stack exposure",
        description:
          "Mobile, AI, DevOps, and product design encouraged within project needs.",
      },
    ] satisfies readonly CareersValueCard[],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "How we support teammates",
    description:
      "Practical benefits for a growing product company — policies formalise as we scale. Not a perks laundry list.",
    disclaimer:
      "Benefits described here reflect intent — confirm current policies with leadership before relying. No stock or compensation claims on this page.",
    items: [
      {
        id: "flexibility",
        title: "Flexible collaboration",
        description:
          "Async-first docs, India time-zone overlap, and hybrid anchor days in Hyderabad where roles allow.",
      },
      {
        id: "equipment",
        title: "Equipment for deep work",
        description:
          "Laptop and tooling appropriate to role — we optimise for focus, not open-office theatre.",
      },
      {
        id: "learning-budget",
        title: "Learning support",
        description:
          "Courses, books, and conferences when aligned to your growth and company roadmap.",
      },
      {
        id: "product-impact",
        title: "Visible product impact",
        description: `Work on ${flagship.name} and client platforms where your commits reach real users.`,
      },
      {
        id: "no-fake-perks",
        title: "No performative perks",
        description:
          "We do not advertise unlimited PTO fiction or vanity office gimmicks — respect and clarity instead.",
      },
      {
        id: "selective-hiring",
        title: "Selective, sustainable pace",
        description:
          "We hire when product and client load justify another teammate — not continuous bulk hiring.",
      },
    ] satisfies readonly CareersBenefit[],
  },
  hiringProcess: {
    eyebrow: "Hiring",
    title: "How hiring works",
    description:
      "Lightweight and human — email applications today; structured ATS is on the roadmap, not live yet.",
    steps: [
      {
        id: "apply",
        step: "01",
        title: "Apply by email",
        description:
          "Send your profile, portfolio, and what you want to work on — per role or general careers inbox.",
      },
      {
        id: "review",
        step: "02",
        title: "Thoughtful review",
        description:
          "We read every message. Strong fits get a reply within a few business days — no automated rejection spam.",
      },
      {
        id: "conversation",
        step: "03",
        title: "Conversations",
        description:
          "Intro call, technical or portfolio review, and values alignment — typically two to three conversations.",
      },
      {
        id: "practical",
        step: "04",
        title: "Practical exercise",
        description:
          "Scoped take-home or pairing session relevant to the role — time-boxed and paid where appropriate.",
      },
      {
        id: "offer",
        step: "05",
        title: "Offer and onboarding",
        description:
          "Clear scope, start date, and equipment setup — documentation improves as HR formalises.",
      },
    ] satisfies readonly CareersHiringStep[],
  },
  openRoles: {
    eyebrow: "Open roles",
    title: "Open positions",
    description:
      "Roles listed here are indicative — apply by email. No applicant tracking portal on this site yet.",
  },
  applyCta: {
    title: "Ready to build with us?",
    description:
      "Send your profile, GitHub or portfolio, and a note on what excites you about our products.",
    primaryLabel: "Email careers",
    secondaryLabel: "Explore culture deep-dive",
    secondaryHref: "/careers/culture",
  },
  disclaimer:
    "Hiring information describes current practice — not guaranteed benefits, compensation, or timelines. Formal HR policies require leadership review.",
  footnote: "Edit careers content in src/config/careers.ts — config-driven, CMS-ready.",
  closingCta: {
    title: "Don't see your role?",
    description: "Send your profile and what you want to work on. We read every message.",
    primaryLabel: "Email careers",
  },
} as const;

/**
 * Switch to `placeholder` to hide listings and show the open-roles placeholder card.
 * Applications remain email-only — no ATS backend.
 */
export const careersOpenRolesMode: CareersOpenRolesMode = "listings";

export const openRolesPlaceholder = {
  title: "No roles posted right now",
  description: `We hire selectively as ${brandName} grows. Share your profile anyway — we keep strong conversations on file for future ${flagship.name} and platform work.`,
  highlights: [
    "Email applications only — no login or portal",
    "We respond when there is a genuine fit",
    "Culture and values matter as much as stack experience",
    "Remote-friendly within India time zones where noted",
  ],
  ctaLabel: "Email careers",
} as const;

export type JobOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
};

export const jobOpenings: readonly JobOpening[] = [
  {
    id: "full-stack-engineer",
    title: "Full Stack Engineer",
    department: "Engineering",
    location: siteConfig.copy.headquarters,
    type: "Full-time",
    description: `Ship features across Next.js, APIs, and cloud infrastructure for ${flagship.name} and future ${brandName} products.`,
  },
  {
    id: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: `${address.city} / Remote (${address.country})`,
    type: "Full-time",
    description:
      "Design intuitive flows for spiritual services and family-oriented digital experiences.",
  },
];

export function shouldShowOpenRolesPlaceholder(): boolean {
  return careersOpenRolesMode === "placeholder" || jobOpenings.length === 0;
}

/** @deprecated Use careersPageCopy.culture — kept for /careers/culture page */
export const careersCulturePageCopy = {
  hero: {
    eyebrow: "Culture",
    title: "How we work at Nexynth Labs",
    description: `Engineering craft, honest innovation labels, and continuous learning — from ${address.city} and across India. Static culture content; no employee portal.`,
  },
  disclaimer:
    "Culture pages describe intent and norms — not guaranteed benefits or policies. Formal HR policies require leadership and legal review before reliance.",
  footnote: "Edit culture sections in src/config/careers.ts — config-driven, no CMS required.",
  closingCta: {
    title: "Ready to apply?",
    description: "See open roles or send a general application by email.",
    primary: { label: "View careers", href: "/careers#open-positions" },
  },
} as const;

export const cultureSections: readonly CultureSection[] = [
  {
    id: "life-at-nexynth",
    eyebrow: "Life",
    title: "Life at Nexynth",
    description:
      "A small product company building trust-heavy experiences — devotional services, automation, and platforms that respect tradition.",
    items: [
      {
        title: "Purpose over vanity metrics",
        description:
          "We publish honest readiness labels on products and experiments — internally and on the corporate site.",
      },
      {
        title: "Small team, clear ownership",
        description:
          "Engineers and designers own features end-to-end with lightweight review, not heavy hierarchy.",
      },
      {
        title: "Hyderabad roots",
        description: `Headquartered in ${address.city} with collaboration across India — product domains stay separate from marketing releases.`,
      },
      {
        title: "Respect for users and tradition",
        description:
          "Spiritual and family contexts demand empathy, accuracy, and calm UX — not growth hacks.",
      },
    ],
  },
  {
    id: "engineering-culture",
    eyebrow: "Engineering",
    title: "Engineering culture",
    description:
      "TypeScript-first stacks, config-driven content, and production discipline without resume-driven complexity.",
    items: [
      {
        title: "Ship readable code",
        description:
          "Next.js, APIs, and integrations should be understandable by the next engineer — not clever for its own sake.",
      },
      {
        title: "Static-first where it fits",
        description:
          "Marketing and trust pages stay fast and auditable; dynamic features earn their server cost.",
      },
      {
        title: "Integration-ready architecture",
        description:
          "Payments, WhatsApp, SMS, and AI slots are planned early — partners and products plug in without rewrites.",
      },
      {
        title: "Review before production AI",
        description:
          "Evals, human-in-the-loop paths, and cost caps before customer-facing agent features.",
      },
    ],
  },
  {
    id: "innovation-mindset",
    eyebrow: "Innovation",
    title: "Innovation mindset",
    description:
      "We experiment in the Innovation Lab — concepts and prototypes are labeled honestly, not sold as finished products.",
    items: [
      {
        title: "Label the maturity",
        description:
          "Concept, Prototype, Planned, or Live — every R&D item carries a status badge.",
      },
      {
        title: "Time-boxed spikes",
        description:
          "Explorations have exit criteria: promote, pivot, or archive — no infinite science projects.",
      },
      {
        title: "Share learnings",
        description:
          "Guides and internal notes turn spikes into playbooks for the next engineer or client engagement.",
      },
      {
        title: "Partner-friendly honesty",
        description:
          "Investors and partners see the same readiness language we use publicly — no slide-deck fiction.",
      },
    ],
  },
  {
    id: "learning",
    eyebrow: "Growth",
    title: "Learning",
    description:
      "Continuous improvement through docs, pairing, and external resources — budget and formal L&D policies subject to company stage.",
    items: [
      {
        title: "Knowledge center habit",
        description:
          "We maintain public guides and resources — writing clarifies thinking for the whole team.",
      },
      {
        title: "Pairing and review",
        description:
          "Pull requests and design critiques are teaching moments, not gatekeeping.",
      },
      {
        title: "Conference and course allowance",
        description:
          "Relevant courses and events supported when aligned to roadmap — case-by-case approval.",
      },
      {
        title: "Cross-stack curiosity",
        description:
          "Mobile, AI, DevOps, and product design exposure encouraged within project needs.",
      },
    ],
  },
  {
    id: "remote-hybrid-readiness",
    eyebrow: "Ways of working",
    title: "Remote / hybrid readiness",
    description:
      "Distributed collaboration practices — not a fully remote-only company; hybrid norms evolve with team size.",
    items: [
      {
        title: "Async-first documentation",
        description:
          "Decisions and specs live in docs and tickets — meetings for alignment, not status theatre.",
      },
      {
        title: "India time-zone overlap",
        description:
          "Core overlap hours for standups and pairing; flexibility outside that window where roles allow.",
      },
      {
        title: "Hybrid anchor days",
        description:
          "Optional in-office collaboration in Hyderabad for local teammates when projects benefit.",
      },
      {
        title: "Secure remote access",
        description:
          "Staff admin and repos follow least-privilege access — no public login on the corporate site.",
      },
    ],
  },
  {
    id: "open-roles",
    eyebrow: "Hiring",
    title: "Open roles",
    description:
      "We do not run an applicant portal on nexynthlabs.com. Listed roles appear on /careers; otherwise use the placeholder flow below.",
    items: [
      {
        title: "Email applications",
        description:
          "Apply via mailto links per role or a general careers email — attachments and portfolios welcome.",
      },
      {
        title: "No ATS yet",
        description:
          "Applicant tracking and structured pipelines are future infrastructure — not available today.",
      },
      {
        title: "Selective hiring",
        description:
          "We add roles when product and client load justify another teammate — not continuous bulk hiring.",
      },
      {
        title: "Check /careers for listings",
        description:
          "When openings exist, they are config entries in src/config/careers.ts — easy to update without code deploys beyond build.",
      },
    ],
  },
] as const;
