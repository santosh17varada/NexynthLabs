import { flagshipProductName } from "@/config/site-values";
import { bookConsultationHref } from "@/config/book-consultation";
import { getFlagshipProduct, getProductHostname } from "@/config/products";

const flagship = getFlagshipProduct();
const flagshipHost = getProductHostname(flagship);

export type ConversionCta = {
  label: string;
  href: string;
  external?: boolean;
};

export const conversionCtas = {
  consultation: {
    label: "Book a consultation",
    href: bookConsultationHref(),
  },
  consultationAi: {
    label: "Book AI consultation",
    href: bookConsultationHref("ai"),
  },
  contact: {
    label: "Contact the team",
    href: "/contact",
  },
  products: {
    label: "Explore products",
    href: "/products",
  },
  getpandit: {
    label: `Explore ${flagshipProductName}`,
    href: "/getpandit",
  },
  getpanditLive: {
    label: `Visit ${flagshipHost}`,
    href: flagship.bookingHref,
    external: true,
  },
  requestProposal: {
    label: "Request a proposal",
    href: "/request-proposal",
  },
  aiShowcase: {
    label: "View AI showcase",
    href: "/ai-showcase",
  },
  aiReadiness: {
    label: "AI readiness score",
    href: "/ai-readiness-score",
  },
  caseStudies: {
    label: "View case studies",
    href: "/case-studies",
  },
} as const satisfies Record<string, ConversionCta>;

export const homeConversionCopy = {
  hero: {
    primary: conversionCtas.consultation,
    secondary: conversionCtas.products,
  },
  midPage: {
    eyebrow: "Work with us",
    title: "Scope your platform with the team that ships",
    description:
      "Share your product goals, integrations, and timeline. We respond with an honest delivery plan — no pressure, no vanity metrics.",
    primary: conversionCtas.consultation,
    secondary: conversionCtas.requestProposal,
  },
  final: {
    title: "Build with a product team, not an agency slide deck",
    description:
      "Book a consultation for platforms and partnerships, or explore our live products and delivery stories.",
    primary: conversionCtas.consultation,
    secondary: conversionCtas.getpandit,
  },
} as const;

export type StickyConversionVariant =
  | "default"
  | "product"
  | "services"
  | "explore"
  | "demo";

export type StickyConversionConfig = {
  primary: ConversionCta;
  secondary: ConversionCta;
  message?: string;
};

export const stickyConversionVariants: Record<StickyConversionVariant, StickyConversionConfig> = {
  default: {
    message: "Questions about delivery or partnerships?",
    primary: conversionCtas.consultation,
    secondary: conversionCtas.contact,
  },
  product: {
    message: `Live on ${flagshipHost} — partner or explore the product.`,
    primary: conversionCtas.getpanditLive,
    secondary: conversionCtas.consultation,
  },
  services: {
    message: "Scope engineering, AI, or platform delivery with our team.",
    primary: conversionCtas.consultation,
    secondary: conversionCtas.requestProposal,
  },
  explore: {
    message: "Compare products, readiness labels, and delivery stories.",
    primary: conversionCtas.products,
    secondary: conversionCtas.consultation,
  },
  demo: {
    message: "See interactive demos, then talk through your use case.",
    primary: conversionCtas.consultationAi,
    secondary: conversionCtas.aiShowcase,
  },
};

/** Long marketing routes that show the sticky conversion bar. */
export const stickyConversionRoutes: Record<string, StickyConversionVariant> = {
  "/getpandit": "product",
  "/ai": "services",
  "/ai-showcase": "demo",
  "/engineering": "services",
  "/technology": "services",
  "/services": "services",
  "/products": "explore",
  "/products/ecosystem": "explore",
  "/about": "default",
  "/founder": "default",
  "/vision": "default",
  "/case-studies": "default",
  "/innovation-lab": "explore",
  "/partners": "default",
};

export function resolveStickyConversionVariant(pathname: string): StickyConversionVariant | null {
  if (pathname === "/") return null;
  if (pathname.startsWith("/admin")) return null;
  if (pathname === "/book-consultation" || pathname === "/request-proposal" || pathname === "/contact") {
    return null;
  }
  if (pathname in stickyConversionRoutes) {
    return stickyConversionRoutes[pathname];
  }
  if (pathname.startsWith("/case-studies/")) {
    return "default";
  }
  if (pathname.startsWith("/leadership/")) {
    return "default";
  }
  return null;
}
