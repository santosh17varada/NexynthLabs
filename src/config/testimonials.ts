import { brandName } from "@/config/site-values";
import type { Testimonial, TestimonialCategory, TestimonialStatus } from "@/types/testimonials";

export const testimonialStatusLabels: Record<TestimonialStatus, string> = {
  placeholder: "Placeholder",
  approved: "Approved",
  draft: "Draft",
};

export const testimonialCategoryLabels: Record<TestimonialCategory, string> = {
  services: "Services",
  product: "Product",
  partnership: "Partnership",
  ai: "AI",
  engineering: "Engineering",
};

export const testimonialCategories = Object.keys(
  testimonialCategoryLabels,
) as TestimonialCategory[];

export const testimonialsPageCopy = {
  hero: {
    eyebrow: "Testimonials",
    title: "What partners and clients say",
    description: `Approved customer quotes from ${brandName} partners and clients. We publish names and attribution only with written permission.`,
  },
  heroEmpty: {
    eyebrow: "Testimonials",
    title: "Customer voices",
    description: `Approved quotes appear here when partners grant written permission. Until then, explore delivery stories and case studies.`,
  },
  disclaimer:
    "Only testimonials with written approval are published. Quotes without approval status are never shown on the public site.",
  footnote: "Manage entries in src/config/testimonials.ts — set status to approved after written permission is obtained.",
  featuredTitle: "Featured voices",
  featuredDescription: "Approved quotes from partners and clients.",
  emptyState: {
    title: "No approved testimonials yet",
    description:
      "We do not publish placeholder or fabricated quotes. Explore case studies for documented delivery outcomes instead.",
    primaryCta: { label: "View case studies", href: "/case-studies" },
    secondaryCta: { label: "Client success stories", href: "/client-success" },
  },
} as const;

export const testimonials: readonly Testimonial[] = [
  {
    id: "placeholder-services",
    name: "Placeholder — Services client",
    role: "Head of Digital",
    company: "Illustrative B2B services company",
    quote:
      "Placeholder quote for services delivery — describes phased web and integration work with honest readiness labels. Not a verified endorsement.",
    category: "services",
    status: "placeholder",
    featured: true,
  },
  {
    id: "placeholder-product",
    name: "Placeholder — Product partner",
    role: "Founder",
    company: "Illustrative devotional tech startup",
    quote:
      "Placeholder quote for product engineering — references dedicated product domains and separation from corporate marketing. Replace before publishing as social proof.",
    category: "product",
    status: "placeholder",
    featured: true,
  },
  {
    id: "placeholder-partnership",
    name: "Placeholder — Temple partner",
    role: "Operations coordinator",
    company: "Illustrative temple trust",
    quote:
      "Placeholder quote for partnership onboarding — enquiry-led partner flows until authenticated portals ship. Not attributed to a real temple.",
    category: "partnership",
    status: "placeholder",
    featured: true,
  },
  {
    id: "placeholder-ai",
    name: "Placeholder — AI programme lead",
    role: "Director of Operations",
    company: "Illustrative enterprise services firm",
    quote:
      "Placeholder quote for AI readiness and automation discovery — emphasises human oversight and evals before production. Fictional attribution.",
    category: "ai",
    status: "placeholder",
  },
  {
    id: "placeholder-engineering",
    name: "Placeholder — Engineering manager",
    role: "VP Engineering",
    company: "Illustrative SaaS company",
    quote:
      "Placeholder quote for config-driven delivery and static-first corporate sites — describes collaboration patterns only, not a client reference.",
    category: "engineering",
    status: "placeholder",
  },
  {
    id: "draft-internal",
    name: "Draft testimonial (hidden)",
    role: "Internal sample",
    company: "Not for public display",
    quote: "This draft entry should not appear on the public site.",
    category: "services",
    status: "draft",
  },
] as const;

/** Approved quotes only — the sole source for public social proof. */
export function getApprovedTestimonials(): Testimonial[] {
  return testimonials.filter((item) => item.status === "approved");
}

export function hasApprovedTestimonials(): boolean {
  return getApprovedTestimonials().length > 0;
}

/** @deprecated Use getApprovedTestimonials — public site never shows non-approved quotes. */
export function getPublicTestimonials(): Testimonial[] {
  return getApprovedTestimonials();
}

export function getFeaturedTestimonials(): Testimonial[] {
  return getApprovedTestimonials().filter((item) => item.featured);
}

export function getFeaturedApprovedTestimonials(limit?: number): Testimonial[] {
  const featured = getFeaturedTestimonials();
  const source = featured.length > 0 ? featured : getApprovedTestimonials();
  return limit === undefined ? source : source.slice(0, limit);
}

export function getTestimonialsByCategory(category: TestimonialCategory | "all"): Testimonial[] {
  const approved = getApprovedTestimonials();
  if (category === "all") return approved;
  return approved.filter((item) => item.category === category);
}
