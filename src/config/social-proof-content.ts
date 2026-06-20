import { getProductBySlug } from "@/config/products";
import { brandName, flagshipProductName } from "@/config/site-values";
import {
  getPublicPartnerLogos,
  getPublicTechnologyLogos,
  trustIndicators,
} from "@/config/social-proof";
import {
  getApprovedTestimonials,
  getFeaturedApprovedTestimonials,
  hasApprovedTestimonials,
} from "@/config/testimonials";
import type { ProductTrustIndicator, SocialProofBlockConfig } from "@/types/social-proof";

export const socialProofContentCopy = {
  approvedQuotes: {
    eyebrow: "Voices",
    title: "What partners say",
    description: `Approved customer quotes — published only with written permission from ${brandName} partners and clients.`,
  },
  caseStudyHighlights: {
    eyebrow: "Delivery stories",
    title: "Case study highlights",
    description: `Documented outcomes from ${brandName} engagements — qualitative delivery signals, not fabricated metrics.`,
    fallbackTitle: "Proof through delivery stories",
    fallbackDescription:
      "Approved customer quotes are not published yet. Explore case studies for documented problem, solution, and outcome narratives.",
  },
  technologyTrustBadges: {
    eyebrow: "Stack",
    title: "Technologies we ship with",
    description: "Capability labels from our delivery stack — not third-party endorsements or certifications.",
  },
  productTrustIndicators: {
    eyebrow: "Product readiness",
    title: "Trust indicators",
    description: `Honest readiness labels for ${flagshipProductName} — available, integration-ready, or planned.`,
  },
  partnerLogos: {
    eyebrow: "Partners",
    title: "Ecosystem we build with",
    description: "Approved partner logos only. Placeholder monograms are hidden from public pages.",
  },
  trustIndicators: {
    eyebrow: "How we earn trust",
    title: "Honest products, honest communication",
    description: `${brandName} publishes readiness labels instead of inflated counters.`,
  },
  fallbackPromo: {
    title: "Explore delivery stories",
    description:
      "We share documented case studies and client success patterns until approved testimonials are available.",
    cta: { label: "View case studies", href: "/case-studies" },
  },
} as const;

export function getProductTrustIndicators(productSlug: string): ProductTrustIndicator[] {
  const product = getProductBySlug(productSlug);
  if (!product) return [];

  return product.capabilities.map((capability) => ({
    id: capability.id,
    label: capability.title,
    description: capability.description,
    status: capability.status,
    productSlug,
  }));
}

export const homeSocialProofBlocks: readonly SocialProofBlockConfig[] = [
  { id: "home-trust", type: "trustIndicators", enabled: true },
  { id: "home-case-study", type: "caseStudyHighlights", enabled: true, limit: 1 },
  {
    id: "home-quotes",
    type: "approvedQuotes",
    enabled: true,
    limit: 2,
    showDisclaimer: true,
  },
] as const;

export {
  getApprovedTestimonials,
  getFeaturedApprovedTestimonials,
  hasApprovedTestimonials,
  getPublicPartnerLogos,
  getPublicTechnologyLogos,
  trustIndicators,
};
