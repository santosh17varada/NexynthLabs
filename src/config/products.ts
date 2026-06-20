import { brandName, flagshipProductName } from "@/config/site-values";

export type ProductStatus = "live" | "beta" | "coming_soon";

export type ProductCapabilityStatus = "available" | "ready" | "planned";

export type ProductCtaVariant = "primary" | "accent" | "outline";

export type ProductCta = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  variant?: ProductCtaVariant;
};

export type ProductCapability = {
  id: string;
  title: string;
  description: string;
  status: ProductCapabilityStatus;
};

export type ProductHighlight = {
  title: string;
  description: string;
};

export type CatalogProduct = {
  id: string;
  name: string;
  slug: string;
  status: ProductStatus;
  isFlagship: boolean;
  tagline: string;
  positioning: string;
  description: string;
  href: string;
  bookingHref: string;
  internalHref: string;
  features: readonly string[];
  capabilities: readonly ProductCapability[];
  highlights: readonly ProductHighlight[];
  ctas: readonly ProductCta[];
};

const getPanditBase = "https://getpandit.com";

export const productCatalog: readonly CatalogProduct[] = [
  {
    id: "getpandit",
    name: flagshipProductName,
    slug: "getpandit",
    status: "live",
    isFlagship: true,
    tagline: "Pandit booking, built for families",
    positioning:
      "Find trusted pandits, book pooja services, and stay informed at every step — designed around rituals, not generic appointments.",
    description: `${flagshipProductName} is ${brandName}'s flagship platform for pandit discovery, pooja booking, and ceremony scheduling. Payment gateway and messaging integration-ready on getpandit.com.`,
    href: getPanditBase,
    bookingHref: `${getPanditBase}/book`,
    internalHref: "/getpandit",
    features: [
      "Browse verified pandit profiles and pooja packages",
      "Schedule ceremonies with clear date and ritual details",
      "Booking notifications to keep families informed",
      "Payment gateway integration readiness",
      "SMS and WhatsApp notification readiness",
      "Runs on its own domain — independent from the corporate site",
    ],
    capabilities: [
      {
        id: "pooja-services",
        title: "Pooja services",
        description:
          "Structured catalog of pujas and rituals with transparent service details for families.",
        status: "available",
      },
      {
        id: "pandit-discovery",
        title: "Pandit discovery",
        description:
          "Search and compare pandit profiles based on language, expertise, and availability.",
        status: "available",
      },
      {
        id: "scheduling",
        title: "Scheduling",
        description:
          "Book ceremony slots with calendar-aware scheduling and confirmation flows.",
        status: "available",
      },
      {
        id: "notifications",
        title: "Notifications",
        description:
          "In-app and email updates for booking status, reminders, and schedule changes.",
        status: "available",
      },
      {
        id: "payments",
        title: "Payment gateway",
        description:
          "Architecture prepared for secure online payments and reconciliation.",
        status: "ready",
      },
      {
        id: "messaging",
        title: "SMS & WhatsApp",
        description:
          "Integration-ready for transactional SMS and WhatsApp booking updates.",
        status: "ready",
      },
    ],
    highlights: [
      {
        title: "Built for pooja bookings",
        description:
          "Flows designed around rituals and ceremonies — not generic appointment software.",
      },
      {
        title: "Trust-first discovery",
        description:
          "Families can explore pandits and services with clarity before they commit.",
      },
      {
        title: "Platform-ready integrations",
        description:
          "Payment and messaging layers are planned for scale without rework.",
      },
    ],
    ctas: [
      {
        id: "visit",
        label: "Visit GetPandit",
        href: getPanditBase,
        external: true,
        variant: "accent",
      },
      {
        id: "book",
        label: "Book a Pandit",
        href: `${getPanditBase}/book`,
        external: true,
        variant: "primary",
      },
      {
        id: "partner",
        label: "Partner With Us",
        href: "/contact?intent=partner",
        variant: "outline",
      },
      {
        id: "contact",
        label: "Contact Nexynth Labs",
        href: "/contact",
        variant: "outline",
      },
    ],
  },
] as const;

export type Product = (typeof productCatalog)[number];

export function getProductBySlug(slug: string): Product | undefined {
  return productCatalog.find((product) => product.slug === slug);
}

export function getFlagshipProduct(): Product {
  const flagship = productCatalog.find((product) => product.isFlagship);
  if (!flagship) {
    throw new Error("No flagship product configured in productCatalog.");
  }
  return flagship;
}

export function getLiveProducts(): Product[] {
  return productCatalog.filter(
    (product) => product.status === "live" || product.status === "beta",
  );
}

export function getProductHostname(product: Product): string {
  return new URL(product.href).hostname;
}

/** @deprecated Use product.ctas.find(c => c.id === "visit")?.label */
export function getPrimaryCtaLabel(product: Product): string {
  return product.ctas.find((cta) => cta.id === "visit")?.label ?? "Visit product";
}

export const productsPageCopy = {
  hero: {
    eyebrow: "Products",
    title: "Software we build and operate",
    description:
      "Each product runs on its own domain and release cycle. We add to the catalog as we ship — with honest readiness labels.",
  },
  catalogIntro:
    "GetPandit is our live flagship. Additional products join the catalog as they launch.",
};

export const getPanditPageCopy = {
  capabilitiesTitle: "What GetPandit does",
  capabilitiesDescription:
    "Full-stack booking — discovery through scheduling, with integrations ready to scale.",
  separationTitle: "Why a separate domain?",
};
