import { homeTechStackItems } from "@/config/home-tech-stack";
import { homeTrustMetrics } from "@/config/home-trust";
import { getCaseStudyHomeExcerpt } from "@/config/home-case-studies";
import {
  getCaseStudyPath,
  getCaseStudyStatusLabel,
  getFeaturedCaseStudies,
} from "@/config/portfolio";
import { brandName, flagshipProductName } from "@/config/site-values";
import type {
  CaseStudyHighlight,
  LogoEntry,
  TechnologyLogoEntry,
  TrustIndicator,
} from "@/types/social-proof";

export const socialProofCopy = {
  framework: {
    title: "Social proof framework",
    description:
      "Reusable testimonial, quote, logo, metric, and trust components — premium SaaS layout with honest approval labels. No fabricated KPIs.",
    usage: `import { SocialProofBlock, ApprovedCustomerQuotes, CaseStudyHighlightsSection } from "@/components/social-proof";`,
  },
  disclaimers: {
    testimonial:
      "Quotes marked Placeholder are illustrative until written approval is obtained.",
    review:
      "Review cards never show numeric ratings unless verified. Qualitative labels describe approval status only.",
    partnerLogo:
      "Partner logos display monogram placeholders until brand assets are approved for public use.",
    technology:
      "Technology names describe delivery capability — not endorsements or certifications.",
    metrics:
      "Metrics describe readiness and delivery signals — not vanity KPIs or unverified performance statistics.",
    trust:
      "Trust indicators are positioning pillars — not audited certifications or performance guarantees.",
    caseStudy:
      "Highlights summarise published delivery stories — outcomes are qualitative unless explicitly verified.",
  },
} as const;

/** Partner / ecosystem logos — placeholder until approved brand assets ship. */
export const partnerLogos: readonly LogoEntry[] = [
  {
    id: "getpandit",
    name: flagshipProductName,
    status: "approved",
    monogram: "GP",
    href: "/getpandit",
  },
  {
    id: "temple-trust",
    name: "Temple trust partner",
    status: "placeholder",
    monogram: "TT",
  },
  {
    id: "vendor-network",
    name: "Vendor network partner",
    status: "placeholder",
    monogram: "VN",
  },
  {
    id: "technology-ally",
    name: "Technology alliance",
    status: "placeholder",
    monogram: "TA",
  },
] as const;

export const technologyLogos: readonly TechnologyLogoEntry[] = homeTechStackItems.map(
  (item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    status: "approved",
  }),
);

export const trustIndicators: readonly TrustIndicator[] = homeTrustMetrics.map((item) => ({
  id: item.id,
  label: item.label,
  description: item.description,
  icon: item.icon,
}));

export function getPublicPartnerLogos(): LogoEntry[] {
  return partnerLogos.filter((logo) => logo.status === "approved");
}

export function getPublicTechnologyLogos(): TechnologyLogoEntry[] {
  return technologyLogos.filter((item) => item.status !== "draft");
}

export function getFeaturedCaseStudyHighlight(): CaseStudyHighlight | undefined {
  const highlights = getCaseStudyHighlights(1);
  return highlights[0];
}

export function getCaseStudyHighlights(limit = 2): CaseStudyHighlight[] {
  return getFeaturedCaseStudies().slice(0, limit).map((study) => {
    const excerpt = getCaseStudyHomeExcerpt(study);
    const hero = study.images[0];

    return {
      id: study.id,
      slug: study.slug,
      projectName: study.projectName,
      title: study.title,
      summary: study.summary,
      statusLabel: getCaseStudyStatusLabel(study),
      industry: study.industry,
      href: getCaseStudyPath(study.slug),
      image: hero ? { src: hero.src, alt: hero.alt } : undefined,
      pillars: [
        { label: "Problem", text: excerpt.problem },
        { label: "Solution", text: excerpt.solution },
        { label: "Outcome", text: excerpt.outcome },
      ],
      featured: study.featured,
    };
  });
}

export const socialProofHomeCopy = {
  testimonials: {
    eyebrow: "Voices",
    title: "What partners say",
    description: `Approved customer quotes — published only with written permission from ${brandName} partners and clients.`,
    cta: { label: "All testimonials", href: "/testimonials" },
  },
  partners: {
    eyebrow: "Partners",
    title: "Ecosystem we build with",
    description: "Partner logos appear when brand assets are approved. Monograms mark placeholders.",
  },
  technology: {
    eyebrow: "Stack",
    title: "Technologies we ship with",
    description: "Capability labels — confirmed per engagement.",
  },
} as const;
