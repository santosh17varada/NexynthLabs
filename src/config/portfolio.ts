import { brandName, flagshipProductName } from "@/config/site-values";
import type { CaseStudy } from "@/types/portfolio";

const getPanditBase = "https://getpandit.com";

export const caseStudies: readonly CaseStudy[] = [
  {
    id: "cs-getpandit",
    slug: "getpandit",
    projectName: flagshipProductName,
    customerName: `${brandName} · Flagship product`,
    industry: "Spiritual services · Devotional technology",
    title: `Launching ${flagshipProductName} — trusted pandit booking for modern families`,
    summary: `How ${brandName} designed and shipped a dedicated booking platform for pooja services on its own domain — discovery, scheduling, and integration-ready payments and messaging.`,
    problemStatement: `Families across India need reliable ways to discover pandits, understand pooja packages, and schedule ceremonies with clarity. Generic appointment tools do not reflect ritual context, language preferences, or the trust families expect. A corporate marketing site alone cannot safely host booking, payments, or notification flows without coupling product releases to company brochure updates.`,
    solution: `${brandName} built ${flagshipProductName} as a flagship product on ${getPanditBase}, separate from the corporate website. The platform focuses on pandit discovery, structured pooja service catalogs, ceremony scheduling, and booking notifications — with architecture prepared for payment gateway and SMS/WhatsApp integrations. The corporate site at nexynthlabs.com links externally only, keeping product velocity independent.`,
    narrative: {
      challenge: {
        summary: `Families across India need reliable ways to discover pandits, understand pooja packages, and schedule ceremonies with clarity. Generic appointment tools do not reflect ritual context, language preferences, or the trust families expect.`,
        bullets: [
          "Discovery lacks ritual and language context families expect",
          "Corporate marketing sites cannot safely host booking and payments",
          "Product velocity slows when brochure and app releases are coupled",
        ],
      },
      approach: {
        summary: `${brandName} launched ${flagshipProductName} as a dedicated product on getpandit.com — separate from the corporate website — with discovery, structured catalogs, and calendar-aware scheduling as the first milestones.`,
        bullets: [
          "Dedicated product domain with independent release cadence",
          "Structured pandit profiles and pooja service catalogs",
          "Corporate site links externally only — zero auth coupling",
        ],
      },
      architecture: {
        summary:
          "Static-first marketing surfaces on the product domain, API-ready modules for booking state, and integration seams for payments and messaging — documented before clients depend on them.",
        bullets: [
          "Next.js product UI with mobile-first responsive layouts",
          "Booking state machine with calendar-aware scheduling",
          "Payment gateway and SMS/WhatsApp integration readiness",
          "SEO and structured data on the product domain",
        ],
      },
      execution: {
        summary:
          "Phased delivery: discovery and catalog first, scheduling and notifications next, payment and partner onboarding marked integration-ready — each milestone labeled honestly on the public roadmap.",
        bullets: [
          "Corporate/product separation documented for legal and SEO",
          "Config-driven content for services and readiness labels",
          "External links only from nexynthlabs.com to getpandit.com",
        ],
      },
      outcome: {
        summary:
          "A live flagship product domain with clear corporate separation — enabling independent releases, transparent discovery, and honest readiness labels instead of vanity metrics.",
        bullets: [
          "Dedicated product domain (getpandit.com) live for marketing and booking journeys",
          "Structured pandit profiles and pooja service catalog for transparent discovery",
          "Calendar-aware scheduling flows with confirmation and status updates",
          "Payment gateway and messaging layers marked integration-ready for scale",
          "Corporate site remains static-friendly with zero GetPandit auth coupling",
        ],
      },
    },
    technologies: [
      "Next.js · React · TypeScript",
      "Mobile-first responsive UI",
      "Calendar-aware scheduling",
      "Payment gateway integration readiness",
      "SMS & WhatsApp notification readiness",
      "SEO & structured data on product domain",
    ],
    businessValue: [
      "Dedicated product domain (getpandit.com) live for marketing and booking journeys",
      "Structured pandit profiles and pooja service catalog for transparent discovery",
      "Calendar-aware scheduling flows with confirmation and status updates",
      "Payment gateway and messaging layers marked integration-ready for scale",
      "Corporate site remains static-friendly with zero GetPandit auth coupling",
      "Clear separation documented for legal, SEO, and safer release cycles",
    ],
    images: [
      {
        src: "/portfolio/getpandit-hero.svg",
        alt: `${flagshipProductName} platform — discovery and booking overview`,
        caption: "Platform overview — discovery, scheduling, and family notifications",
      },
      {
        src: "/portfolio/getpandit-flow.svg",
        alt: `${flagshipProductName} booking journey from browse to confirmation`,
        caption: "End-to-end booking journey designed for pooja services",
      },
    ],
    metrics: [
      {
        id: "product-domain",
        label: "Product domain",
        value: "Live",
        description: "getpandit.com serves discovery, catalog, and booking journeys independently.",
        status: "live",
      },
      {
        id: "corporate-separation",
        label: "Corporate separation",
        value: "Documented",
        description: "nexynthlabs.com links externally only — no shared auth or payment surface.",
        status: "qualitative",
      },
      {
        id: "payments",
        label: "Payment gateway",
        value: "Integration-ready",
        description: "Architecture and UI seams prepared; go-live scoped per product milestone.",
        status: "ready",
      },
      {
        id: "messaging",
        label: "SMS & WhatsApp",
        value: "Integration-ready",
        description: "Notification hooks designed for booking confirmations and status updates.",
        status: "ready",
      },
      {
        id: "scheduling",
        label: "Calendar scheduling",
        value: "Shipped",
        description: "Ceremony-aware scheduling with confirmation and status transitions.",
        status: "live",
      },
      {
        id: "partner-onboarding",
        label: "Partner onboarding",
        value: "In progress",
        description: "Pandit verification and listing workflows on the product roadmap.",
        status: "in-progress",
      },
    ],
    quote: {
      text: "Families don't book ceremonies like they book salon appointments — the platform had to reflect ritual context, language, and trust from the first screen.",
      attribution: "Product Engineering",
      role: `${brandName} · ${flagshipProductName}`,
    },
    status: "published",
    statusLabel: "Live",
    publishedAt: "2025-06-01",
    featured: true,
    cta: {
      primary: {
        label: `Visit ${flagshipProductName}`,
        href: getPanditBase,
        external: true,
      },
      secondary: {
        label: "Discuss a similar project",
        href: "/contact",
      },
    },
  },
] as const;

export const portfolioPageCopy = {
  hero: {
    eyebrow: "Portfolio",
    title: "Work we build & ship",
    description: `Products and client engagements from ${brandName} — from flagship platforms to integration-heavy delivery.`,
  },
  pillars: [
    {
      title: "Product engineering",
      description:
        "End-to-end platforms with clear domains, release cadence, and measurable outcomes.",
    },
    {
      title: "Integrations & scale",
      description:
        "Payments, messaging, CRM, and cloud patterns designed before launch — not bolted on later.",
    },
    {
      title: "Corporate + product separation",
      description:
        "Marketing sites stay fast and static-friendly while products evolve on their own stacks.",
    },
  ],
  featuredTitle: "Featured case study",
  featuredDescription:
    "Deep dives on problem, solution, technologies, and business value — starting with our flagship product.",
} as const;

export const caseStudiesPageCopy = {
  hero: {
    eyebrow: "Case studies",
    title: "Success stories",
    description: `Published outcomes from ${brandName} — the challenges we solved, how we built, and the value delivered.`,
  },
  listIntro:
    "Only published studies appear here. Product platforms such as GetPandit run on their own domains; these pages explain the work behind them.",
  detailLabels: {
    project: "Project",
    customer: "Customer",
    industry: "Industry",
    problem: "The challenge",
    solution: "Our approach",
    technologies: "Technologies",
    businessValue: "Business value",
    status: "Status",
  },
} as const;

export function getCaseStudyPath(slug: string): string {
  return `/case-studies/${slug}`;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}

export function getPublishedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((item) => item.status === "published");
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getPublishedCaseStudies().filter((item) => item.featured);
}

export function getCaseStudyStatusLabel(study: CaseStudy): string {
  if (study.statusLabel) {
    return study.statusLabel;
  }

  return study.status.charAt(0).toUpperCase() + study.status.slice(1);
}
