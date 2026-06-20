import { brandName, companyName, email, flagshipProductName } from "@/config/site-values";
import type { LeadershipProfile } from "@/types/leadership";

/** Canonical founder headshot — used across leadership surfaces */
export const founderProfileImage = {
  path: "/images/leadership/santosh-kumar-varada-founder.jpg",
  alt: "Santosh Kumar Varada, Founder, CEO & Managing Director, Nexynth Labs Private Limited",
} as const;

export const leadershipPageCopy = {
  hero: {
    eyebrow: "Leadership",
    title: "Executive team",
    description: `${companyName} is led by founders with deep enterprise technology experience and a product-first mindset — building ${flagshipProductName} and client platforms from ${brandName}.`,
  },
  team: {
    eyebrow: "Our leaders",
    title: "Founders & directors",
    description:
      "Profiles below reflect approved public biographies. Additional leadership roles will be added as the team grows.",
  },
  governance: {
    eyebrow: "Governance",
    title: "How we lead",
    paragraphs: [
      `${brandName} operates with clear ownership across product, engineering, and partnerships — prioritising honest communication, domain separation for products, and phased delivery over vanity launches.`,
      "Strategic decisions balance enterprise discipline with startup speed: config-driven readiness labels, no fabricated metrics, and external product domains where user trust matters.",
      "Board or advisory structures will be described here only when formally constituted and approved for public disclosure.",
    ],
  },
  disclaimer:
    "Leadership content is informational — not an offer, prospectus, or personal endorsement of third-party services. Press may quote approved boilerplate only.",
  closingCta: {
    title: "Work with our leadership team",
    description: "Partnerships, services, careers, and investor conversations start with an enquiry.",
    primary: { label: "Contact us", href: "/contact" },
    secondary: { label: "Media kit", href: "/media-kit" },
  },
} as const;

export const founderMessageSection = {
  eyebrow: "Message from the Founder",
  title: "Building technology with purpose",
  message: `At ${brandName}, we combine enterprise-grade delivery discipline with product innovation — from AI-assisted engineering to cloud-native platforms that scale. Our flagship product, ${flagshipProductName}, reflects that same standard: modernising spiritual service discovery and booking with honesty, mobile-first design, and a dedicated product domain.`,
  closing: "We invite partners, clients, and talent who care about thoughtful technology for modern India.",
  signatureName: "Santosh Kumar Varada",
  signatureTitle: "Founder, CEO & Managing Director",
  profileHref: "/leadership/santosh-kumar-varada",
  ctaLabel: "Read full profile",
} as const;

export const aboutLeadershipSection = {
  eyebrow: "Leadership",
  title: "Experienced founders at the helm",
  description: `Our executive team brings 18+ years of technology leadership, enterprise delivery, and product innovation to ${companyName}.`,
  ctaLabel: "Meet the leadership team",
  ctaHref: "/leadership",
} as const;

export const mediaKitFounderProfile = {
  sectionId: "founder-profile",
  eyebrow: "Leadership",
  title: "Founder profile",
  description: "Approved executive biography and headshot for press, events, and partner materials.",
  downloadNote:
    "High-resolution headshot available on this page. For broadcast or print crops, contact press.",
} as const;

export const partnerFounderVision = {
  eyebrow: "Founder vision",
  title: "Partnership with product conviction",
  paragraphs: [
    `${flagshipProductName} was founded to bring structure, trust, and modern discovery to spiritual services — without compromising tradition. We partner with temples, vendors, and technology providers who share that long-term view.`,
    "Enterprise integrations, AI-assisted operations, and honest readiness communication guide how we scale — on dedicated product domains, separate from corporate marketing.",
  ],
  profileHref: "/leadership/santosh-kumar-varada",
  ctaLabel: "Founder profile",
} as const;

export const leadershipProfiles: readonly LeadershipProfile[] = [
  {
    id: "santosh-kumar-varada",
    slug: "santosh-kumar-varada",
    name: "Santosh Kumar Varada",
    title: "Founder, CEO & Managing Director",
    subtitle:
      "AI-Driven Technology Leader | Product Innovator | Digital Transformation Strategist",
    excerpt:
      "18+ years of technology leadership. Founder of GetPandit. Expertise in AI, product engineering, cloud platforms, and enterprise delivery.",
    biography: [
      `Santosh Kumar Varada founded ${companyName} to build premium digital products and platforms that respect cultural context while meeting modern engineering standards. He leads company strategy, product direction, and client delivery across AI, web, mobile, and cloud engagements.`,
      `As the founder of ${flagshipProductName}, he drives an AI-enabled platform modernising spiritual service discovery and booking — with the product running independently on getpandit.com for safer releases and clearer user journeys.`,
      "His career spans enterprise delivery leadership, program and portfolio management, and hands-on engineering — with a focus on AI-assisted product development, automation, and cloud-native architecture for scale.",
    ],
    profileHighlights: [
      "18+ years of technology leadership experience.",
      "Enterprise delivery leadership across global organizations.",
      "Program, portfolio, and engineering management.",
      "AI-assisted product development and automation.",
      "Cloud-native platforms and enterprise integrations.",
      `Founder of ${flagshipProductName}, an AI-enabled platform modernizing spiritual service discovery and booking.`,
      "Expertise in AI, Product Engineering, Agile Transformation, Cloud Platforms, Digital Transformation, and Enterprise Systems.",
    ],
    expertise: [
      "AI & Intelligent Automation",
      "Product Strategy",
      "Program & Portfolio Management",
      "Cloud & DevOps",
      "Enterprise Integrations",
      "Digital Transformation",
      "Agile Transformation",
      "Platform Engineering",
    ],
    imagePath: founderProfileImage.path,
    imageAlt: founderProfileImage.alt,
    socialLinks: {
      email,
    },
    featured: true,
    order: 1,
    founderMessage: founderMessageSection.message,
    seoTitle: "Santosh Kumar Varada — Founder & CEO",
    seoDescription: `Santosh Kumar Varada, Founder, CEO & Managing Director of ${companyName}. 18+ years technology leadership. Founder of ${flagshipProductName}. AI, cloud, and enterprise delivery.`,
  },
  {
    id: "swathi-varada",
    slug: "swathi-varada",
    name: "Swathi Varada",
    title: "Co-Founder & Director",
    subtitle: "Operations & Partnership Strategy",
    excerpt:
      `Co-Founder & Director at ${companyName}. Leads operations, partnerships, and organizational growth alongside the founding team.`,
    biography: [
      `Swathi Varada co-founded ${companyName} and serves as Director, supporting company operations, partnership development, and strategic initiatives across products and services.`,
      `She works closely with the founding team on partner onboarding, community relationships, and the operational foundation behind ${flagshipProductName} and client engagements.`,
      "Additional public biography and media assets will be expanded as approved by leadership.",
    ],
    profileHighlights: [
      `Co-Founder & Director, ${companyName}.`,
      "Partnership and operations leadership.",
      `Supporting ${flagshipProductName} ecosystem growth.`,
      "Organizational and community engagement.",
    ],
    expertise: [
      "Operations Leadership",
      "Partnership Development",
      "Organizational Strategy",
      "Community Engagement",
    ],
    imageAlt: "Swathi Varada — Co-Founder and Director of Nexynth Labs",
    socialLinks: {
      email,
    },
    featured: true,
    order: 2,
    seoTitle: "Swathi Varada — Co-Founder & Director",
    seoDescription: `Swathi Varada, Co-Founder & Director at ${companyName}. Operations, partnerships, and organizational leadership.`,
  },
] as const;

export function getLeadershipProfile(slug: string): LeadershipProfile | undefined {
  return leadershipProfiles.find((profile) => profile.slug === slug);
}

export function getFeaturedLeadershipProfiles(): LeadershipProfile[] {
  return [...leadershipProfiles]
    .filter((profile) => profile.featured)
    .sort((a, b) => a.order - b.order);
}

export function getLeadershipProfilePath(slug: string): string {
  return `/leadership/${slug}`;
}

export function getPrimaryFounder(): LeadershipProfile {
  return leadershipProfiles[0];
}
