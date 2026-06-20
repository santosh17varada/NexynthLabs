import type { CaseStudyMetric, CaseStudyMetricStatus } from "@/types/portfolio";
import type { Testimonial, TestimonialCategory, TestimonialStatus } from "@/types/testimonials";

export type SocialProofApprovalStatus = TestimonialStatus;

export type SocialProofTone = "light" | "dark";

export type CustomerQuote = {
  id?: string;
  text: string;
  attribution: string;
  role?: string;
  company?: string;
  eyebrow?: string;
  status?: SocialProofApprovalStatus;
  image?: { src: string; alt: string };
};

export type ReviewCardData = CustomerQuote & {
  headline?: string;
  /** Qualitative label only — never a fabricated numeric score. */
  qualitativeLabel?: string;
  category?: TestimonialCategory;
};

export type LogoEntry = {
  id: string;
  name: string;
  status: SocialProofApprovalStatus;
  href?: string;
  external?: boolean;
  monogram?: string;
  image?: { src: string; alt: string };
};

export type TechnologyLogoEntry = {
  id: string;
  name: string;
  category: string;
  status?: SocialProofApprovalStatus;
};

export type TrustIndicatorIcon = "product" | "ai" | "cloud" | "marketplace" | "security" | "shield";

export type TrustIndicator = {
  id: string;
  label: string;
  description: string;
  icon?: TrustIndicatorIcon;
};

export type CaseStudyHighlightPillar = {
  label: string;
  text: string;
};

export type CaseStudyHighlight = {
  id: string;
  slug: string;
  projectName: string;
  title: string;
  summary: string;
  statusLabel: string;
  industry?: string;
  href: string;
  image?: { src: string; alt: string };
  pillars?: readonly CaseStudyHighlightPillar[];
  featured?: boolean;
};

export type ProductSuccessMetric = CaseStudyMetric;

export type ProductSuccessMetricStatus = CaseStudyMetricStatus;

export type TestimonialItem = Testimonial;

export type ProductTrustIndicatorStatus = "available" | "ready" | "planned";

export type ProductTrustIndicator = {
  id: string;
  label: string;
  description: string;
  status: ProductTrustIndicatorStatus;
  productSlug?: string;
};

export type SocialProofBlockType =
  | "approvedQuotes"
  | "caseStudyHighlights"
  | "technologyTrustBadges"
  | "productTrustIndicators"
  | "partnerLogos"
  | "trustIndicators";

export type SocialProofBlockConfig = {
  id: string;
  type: SocialProofBlockType;
  enabled?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Product slug when type is productTrustIndicators */
  productSlug?: string;
  limit?: number;
  showDisclaimer?: boolean;
};
