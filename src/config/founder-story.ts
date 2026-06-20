import {
  address,
  brandName,
  companyName,
  flagshipProductName,
} from "@/config/site-values";
import { companyVisionPillars } from "@/config/company-vision";
import { founderMessageSection } from "@/config/leadership";
import type {
  FounderExperienceHighlight,
  FounderLesson,
  FounderNavItem,
  FounderStoryRoadmapPhase,
} from "@/types/founder-story";

/**
 * Founder story — edit here. Personal but professional; no unverified awards,
 * revenue, or credentials. Approved highlights only.
 */
export const founderPageContent = {
  hero: {
    eyebrow: "Founder story",
    title: "Building products with conviction",
    description: `A personal view from ${founderMessageSection.signatureName} on why ${brandName} and ${flagshipProductName} exist — grounded in ${address.city}, focused on trust and long-term craft.`,
    quote: founderMessageSection.message,
    name: founderMessageSection.signatureName,
    role: founderMessageSection.signatureTitle,
    profileCta: {
      label: founderMessageSection.ctaLabel,
      href: founderMessageSection.profileHref,
    },
  },
  sectionNav: [
    { id: "background", label: "Background" },
    { id: "experience", label: "Experience" },
    { id: "why-nexynth", label: "Why Nexynth" },
    { id: "why-getpandit", label: "Why GetPandit" },
    { id: "lessons-learned", label: "Lessons" },
    { id: "future-vision", label: "Future" },
  ] satisfies readonly FounderNavItem[],
  background: {
    eyebrow: "Background",
    title: "From enterprise delivery to product conviction",
    paragraphs: [
      `Before ${brandName}, my work sat at the intersection of enterprise programs, cloud platforms, and teams shipping under real constraints — not slide decks.`,
      `I saw strong engineering cultures struggle when product storytelling and live systems were glued together. Families and partners deserved clearer software — especially in devotional services, where trust is non-negotiable.`,
      `${companyName} was the response: a product company that respects tradition, publishes honest readiness, and gives each platform its own domain when user trust matters.`,
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "What I bring to the table",
    description:
      "Approved public highlights — not an exhaustive résumé. Full leadership context lives on the executive profile.",
    highlights: [
      {
        id: "leadership",
        label: "Technology leadership",
        description:
          "18+ years across enterprise delivery, program leadership, and hands-on engineering — from strategy to production.",
      },
      {
        id: "ai-product",
        label: "AI & product engineering",
        description:
          "AI-assisted development, automation, and platform thinking — scoped with guardrails, evals, and human oversight.",
      },
      {
        id: "cloud",
        label: "Cloud-native platforms",
        description:
          "Architecture for scale — APIs, integrations, observability, and release discipline teams can maintain.",
      },
      {
        id: "flagship",
        label: "Flagship product founder",
        description: `Founded ${flagshipProductName} — live marketplace for pandit discovery and pooja booking on getpandit.com.`,
      },
    ] satisfies readonly FounderExperienceHighlight[],
    expertise: [
      "AI & intelligent automation",
      "Product strategy",
      "Program & portfolio management",
      "Cloud & DevOps",
      "Enterprise integrations",
      "Digital transformation",
      "Platform engineering",
    ],
    profileLink: { label: "Full leadership profile", href: "/leadership/santosh-kumar-varada" },
  },
  whyNexynth: {
    eyebrow: "Origins",
    title: `Why ${brandName} was started`,
    paragraphs: [
      `${companyName} was formed to build technology that respects how Indian families and communities discover, plan, and experience devotional services — with clarity, trust, and long-term maintainability.`,
      `We saw too many brochure websites coupled to fragile product experiments. ${brandName} separates corporate storytelling from product delivery so each can evolve at the right pace.`,
      `Based in ${address.city}, we combine product engineering, integrations, and practical AI with domain awareness for spiritual services, local commerce, and platform businesses.`,
    ],
  },
  whyGetPandit: {
    eyebrow: "Flagship product",
    title: `Why ${flagshipProductName} was built`,
    paragraphs: [
      `Families need reliable ways to find pandits, understand pooja packages, and schedule ceremonies — not generic booking widgets that ignore ritual context.`,
      `${flagshipProductName} runs on its own domain (getpandit.com) so booking, payments, and notifications can mature without coupling every release to the corporate marketing site.`,
      `Today ${flagshipProductName} is our live flagship. We describe readiness honestly on the corporate site — platform milestones, not inflated user or revenue figures.`,
    ],
    links: [
      { label: `${flagshipProductName} overview`, href: "/getpandit" },
      { label: "Case study", href: "/case-studies/getpandit" },
      { label: "Product ecosystem", href: "/products/ecosystem" },
    ],
  },
  lessonsLearned: {
    eyebrow: "Reflection",
    title: "Lessons learned",
    description:
      "Principles earned from building in public — not guarantees for every engagement, but how we choose to work.",
    lessons: [
      {
        id: "separate-domains",
        title: "Separate domains earn trust",
        description:
          "Corporate marketing and live booking systems should not share a release train. Families notice when product quality is honest.",
      },
      {
        id: "honest-labels",
        title: "Honest labels beat vanity metrics",
        description:
          "Readiness communication builds more durable partnerships than invented user counts or revenue figures.",
      },
      {
        id: "ai-guardrails",
        title: "AI needs guardrails early",
        description:
          "Agentic workflows belong in production only with scoped tools, human review, and eval criteria — not demo hype.",
      },
      {
        id: "config-driven",
        title: "Config-driven content scales teams",
        description:
          "Typed config and documented modules let marketing, engineering, and future CMS workflows move without fragile page edits.",
      },
      {
        id: "partnerships",
        title: "Partnerships deserve qualification",
        description:
          "Temple, vendor, and technology partners onboard through conversation and fit — not anonymous self-serve signups in sensitive categories.",
      },
      {
        id: "long-term",
        title: "Think in years, ship in weeks",
        description:
          "Phased delivery with visible milestones keeps momentum without pretending every roadmap item has a fixed date.",
      },
    ] satisfies readonly FounderLesson[],
  },
  futureVision: {
    eyebrow: "Looking ahead",
    title: "Future vision",
    description: `Direction for ${brandName} — practical AI, marketplace patterns, and ecosystem products on dedicated domains. Not investment advice or dated guarantees.`,
    pillars: companyVisionPillars.items,
    links: [
      { label: "Read full vision", href: "/vision" },
      { label: "Public roadmap", href: "/roadmap" },
      { label: "Innovation Lab", href: "/innovation-lab" },
    ],
  },
  disclaimer:
    "Founder story for context only — not investment advice, forward-looking guarantees, or unverified personal claims. Product availability follows status labels on the product ecosystem page.",
  closingCta: {
    title: "Build with us",
    description:
      "Whether you are exploring a partnership, services engagement, or product conversation — we welcome thoughtful enquiries.",
    primary: { label: "Partner with us", href: "/partners" },
    secondary: { label: "Contact us", href: "/contact" },
  },
} as const;

/** @deprecated Use founderPageContent — kept for legacy imports */
export const founderStoryContent = {
  ...founderPageContent,
  founderNote: {
    eyebrow: "Founder note",
    title: "A note from leadership",
    isPlaceholder: true,
    paragraphs: [founderPageContent.hero.quote],
    attribution: `${founderPageContent.hero.name} · ${founderPageContent.hero.role}`,
  },
  vision: {
    eyebrow: companyVisionPillars.eyebrow,
    title: companyVisionPillars.title,
    description: companyVisionPillars.description,
    pillars: companyVisionPillars.items,
  },
  roadmap: {
    eyebrow: "Direction",
    title: "Long-term roadmap",
    description:
      "Directional phases — see /roadmap for the public view.",
    phases: [
      {
        id: "near-term",
        period: "Near term",
        title: "Strengthen the live flagship",
        items: [`Continue ${flagshipProductName} platform readiness on getpandit.com`],
      },
    ] satisfies readonly FounderStoryRoadmapPhase[],
  },
};
