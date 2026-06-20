import { homeConversionCopy } from "@/config/conversion";
import { bookConsultationHref } from "@/config/book-consultation";
import { flagshipProductName } from "@/config/site-values";

export type FooterNavLink = {
  label: string;
  href: string;
  external?: boolean;
};

const getPanditProductUrl = "https://getpandit.com";

export const footerBrandCopy = {
  summary: `AI-first product engineering from Hyderabad — ${flagshipProductName}, enterprise platforms, and honest spiritual technology.`,
} as const;

export const footerNavigation = {
  products: [
    { label: flagshipProductName, href: "/getpandit" },
    { label: "Visit getpandit.com", href: getPanditProductUrl, external: true },
    { label: "Products overview", href: "/products" },
    { label: "Product ecosystem", href: "/products/ecosystem" },
    { label: "Public roadmap", href: "/roadmap" },
    { label: "Case studies", href: "/case-studies" },
  ],
  solutions: [
    { label: "All services", href: "/services" },
    { label: "AI Engineering", href: "/ai" },
    { label: "AI Showcase", href: "/ai-showcase" },
    { label: "Engineering excellence", href: "/engineering" },
    { label: "Technology excellence", href: "/technology" },
    { label: "Request proposal", href: "/request-proposal" },
    { label: "Book consultation", href: bookConsultationHref() },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Founder story", href: "/founder" },
    { label: "Vision", href: "/vision" },
    { label: "Careers", href: "/careers" },
    { label: "Partners", href: "/partners" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/resources" },
    { label: "Case studies", href: "/case-studies" },
    { label: "Innovation Lab", href: "/innovation-lab" },
    { label: "Brand system", href: "/brand" },
    { label: "Media kit", href: "/media-kit" },
    { label: "FAQ", href: "/faq" },
    { label: "Security", href: "/security" },
    { label: "Trust center", href: "/trust" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
} as const satisfies Record<string, readonly FooterNavLink[]>;

export const homeFinalCtaCopy = homeConversionCopy.final;

/** Flat list for QA scripts and legacy consumers. */
export function getFooterNavHrefs(): string[] {
  const groups = Object.values(footerNavigation).flat();
  return [...new Set(groups.map((link) => link.href))];
}
