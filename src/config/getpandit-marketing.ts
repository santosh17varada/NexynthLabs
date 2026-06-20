import { brandName, flagshipProductName } from "@/config/site-values";
import { getFlagshipProduct, getProductHostname } from "@/config/products";

const flagship = getFlagshipProduct();
const productHost = getProductHostname(flagship);
const productBase = flagship.href;
const bookingHref = flagship.bookingHref;

export type GetPanditPreviewId =
  | "pandit-discovery"
  | "pooja-booking"
  | "astrology"
  | "vendor-network"
  | "customer-journey"
  | "admin-ops"
  | "mobile-app"
  | "trust";

export type GetPanditMarketingStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export type GetPanditMarketingFeature = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: readonly string[];
  preview: GetPanditPreviewId;
  readiness?: string;
};

export type GetPanditMarketingFaq = {
  id: string;
  question: string;
  answer: string;
};

export const getPanditMarketingCopy = {
  hero: {
    eyebrow: `Flagship · Live on ${productHost}`,
    title: "Pandit booking, designed for families",
    description: `${flagshipProductName} helps families find trusted pandits, book ceremonies with clarity, and stay informed — on a dedicated domain built for devotional services, not generic appointment software.`,
    primaryCta: { label: "Book on getpandit.com", href: bookingHref, external: true },
    secondaryCta: { label: "Partner with us", href: "/contact?intent=partner" },
    tertiaryCta: { label: `Visit ${productHost}`, href: productBase, external: true },
    mockup: {
      imageSrc: "/portfolio/getpandit-hero.svg",
      imageAlt: `${flagshipProductName} — pandit discovery and pooja booking on ${productHost}`,
      urlBar: productHost,
    },
  },
  problem: {
    eyebrow: "The problem",
    title: "Spiritual services deserve better than phone tag",
    description: `Families struggle to compare pandits, understand pooja packages, and coordinate ceremony details. ${flagshipProductName} brings structure, transparency, and booking flows built for devotional use cases.`,
    pains: [
      {
        title: "Fragmented discovery",
        description:
          "Word-of-mouth referrals and unstructured listings make it hard to compare language, expertise, and availability.",
      },
      {
        title: "Opaque pooja packages",
        description:
          "Families need clear ritual scope, inclusions, and pricing signals before they commit to a ceremony.",
      },
      {
        title: "Coordination overhead",
        description:
          "Dates, locations, reminders, and payment handoffs scatter across calls and messages without a single journey.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "From discovery to ceremony — in four clear steps",
    description: `Every flow on ${productHost} is designed around devotional booking — browse, choose, schedule, and stay informed.`,
    steps: [
      {
        id: "discover",
        step: "01",
        title: "Discover",
        description: "Browse pandit profiles, pooja categories, and service packages with transparent details.",
      },
      {
        id: "choose",
        step: "02",
        title: "Choose",
        description: "Compare language, ritual expertise, and availability before selecting the right fit.",
      },
      {
        id: "schedule",
        step: "03",
        title: "Schedule",
        description: "Pick ceremony dates, locations, and ritual specifics with calendar-aware booking.",
      },
      {
        id: "confirm",
        step: "04",
        title: "Stay informed",
        description: "Receive confirmations, reminders, and status updates through the product journey.",
      },
    ] satisfies readonly GetPanditMarketingStep[],
  },
  features: [
    {
      id: "find-pandits",
      eyebrow: "Find pandits",
      title: "Search profiles built for trust and clarity",
      description:
        "Families explore verified pandit profiles with languages, specializations, and service catalogs — designed for informed decisions, not guesswork.",
      bullets: [
        "Structured pandit profiles with ritual expertise",
        "Language and region filters for the right match",
        "Service listings tied to pooja packages",
        "Clear availability signals before booking",
      ],
      preview: "pandit-discovery",
      readiness: "Live on product domain",
    },
    {
      id: "book-pujas",
      eyebrow: "Book pujas",
      title: "Ceremony booking flows that respect the ritual",
      description:
        "Pooja catalogs, package details, and scheduling are purpose-built for ceremonies — not repurposed salon or clinic software.",
      bullets: [
        "Structured pooja and ritual catalogs",
        "Calendar-aware ceremony scheduling",
        "Location and ritual detail capture",
        "Booking confirmations and reminders",
      ],
      preview: "pooja-booking",
      readiness: "Platform ready",
    },
    {
      id: "astrology",
      eyebrow: "Astrology services",
      title: "Consultations and horoscope services — catalog-ready",
      description:
        "Astrology offerings sit alongside pooja services with the same discovery and booking discipline — vetted practitioner listings and clear service scopes.",
      bullets: [
        "Astrology consultation categories",
        "Practitioner profiles with service scope",
        "Booking handoffs aligned with pooja flows",
        "Expansion path for horoscope products",
      ],
      preview: "astrology",
      readiness: "Catalog & flows in progress",
    },
    {
      id: "vendor-network",
      eyebrow: "Vendor & pandit network",
      title: "A network layer for temples, pandits, and service partners",
      description:
        "Partners onboard with verification checkpoints, service listings, and operational handoffs — scaling supply without losing quality signals.",
      bullets: [
        "Pandit onboarding and profile intake",
        "Temple and vendor partnership models",
        "Service listing and quality review hooks",
        "Enquiry-led partner growth today",
      ],
      preview: "vendor-network",
      readiness: "Partner onboarding in progress",
    },
    {
      id: "admin-platform",
      eyebrow: "Admin platform",
      title: "Operations tooling for bookings and partners",
      description:
        "Internal admin surfaces support booking oversight, partner management, and platform operations — separate from the public marketing site.",
      bullets: [
        "Booking oversight and status management",
        "Partner and pandit operations views",
        "Catalog and service administration",
        "Release cadence independent of corporate site",
      ],
      preview: "admin-ops",
      readiness: "In progress",
    },
    {
      id: "mobile-experience",
      eyebrow: "Mobile experience",
      title: "Mobile-first booking for families on the go",
      description:
        "Responsive, touch-friendly flows on the product domain — optimized for discovery and scheduling from any device.",
      bullets: [
        "Mobile-first responsive product UI",
        "Touch-friendly ceremony scheduling",
        "Performance and accessibility baselines",
        "Dedicated native apps on roadmap",
      ],
      preview: "mobile-app",
      readiness: "Platform ready",
    },
    {
      id: "trust-safety",
      eyebrow: "Trust & safety",
      title: "Trust-by-design for a sensitive category",
      description:
        "Verification checkpoints, honest readiness labels, and separation from the corporate marketing site — so families know what is live today.",
      bullets: [
        "Profile verification checkpoints for partners",
        "Honest platform readiness communication",
        "HTTPS product domain (getpandit.com)",
        "No fabricated user or revenue metrics",
      ],
      preview: "trust",
      readiness: "Ongoing",
    },
  ] satisfies readonly GetPanditMarketingFeature[],
  journey: {
    eyebrow: "End-to-end journey",
    title: "What families experience on getpandit.com",
    stages: [
      { label: "Search", detail: "Find pandits and pooja packages" },
      { label: "Compare", detail: "Review profiles and ritual scope" },
      { label: "Book", detail: "Schedule ceremony details" },
      { label: "Pay", detail: "Payment-ready architecture" },
      { label: "Attend", detail: "Reminders and confirmations" },
      { label: "Support", detail: "Product-domain help channels" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions about GetPandit",
    description: `Quick answers about ${flagshipProductName}. For corporate enquiries about ${brandName}, visit /contact.`,
  },
  finalCta: {
    title: "Ready to book a pandit or partner with the platform?",
    description: `Visit ${productHost} to explore live flows, or contact ${brandName} for partnerships and integrations.`,
    primary: { label: "Book on getpandit.com", href: bookingHref, external: true },
    secondary: { label: "Become a partner", href: "/contact?intent=partner" },
  },
  domainNote: `${flagshipProductName} runs on ${productHost} — independent from nexynthlabs.com. This page is product marketing; booking and payments happen on the product domain.`,
} as const;

export const getPanditMarketingFaqs: readonly GetPanditMarketingFaq[] = [
  {
    id: "what-is",
    question: `What is ${flagshipProductName}?`,
    answer: `${flagshipProductName} is an online platform for pandit discovery, pooja service catalogs, ceremony scheduling, and partner onboarding on getpandit.com — built by ${brandName}.`,
  },
  {
    id: "book-here",
    question: "Can I complete a booking on this page?",
    answer: `No. This is the ${brandName} product overview. Book ceremonies on getpandit.com using the Book CTA — we link externally by design.`,
  },
  {
    id: "astrology",
    question: "Does GetPandit include astrology services?",
    answer:
      "Astrology consultation categories and practitioner listings are part of the product roadmap with catalog-ready architecture. Check getpandit.com for current live categories.",
  },
  {
    id: "payments",
    question: "Are online payments available?",
    answer:
      "Payment gateway integration is architecture-ready on the product stack. We communicate readiness honestly — confirm live payment methods on getpandit.com before relying on them.",
  },
  {
    id: "partner",
    question: "How do pandits or temples join?",
    answer:
      "Partner onboarding is enquiry-led via /contact?intent=partner or /partners. The team qualifies leads before product onboarding — no self-serve public signup on this corporate site.",
  },
  {
    id: "mobile",
    question: "Is there a mobile app?",
    answer:
      "The product domain is mobile-first responsive today. Native iOS and Android apps are on the roadmap — this page does not claim app store availability until shipped.",
  },
  {
    id: "metrics",
    question: "Why don't you show user counts or revenue?",
    answer: `${brandName} does not publish unverified growth metrics on the corporate site. Readiness labels describe engineering status only.`,
  },
  {
    id: "support",
    question: "Where do I get product support?",
    answer:
      "Product booking issues and customer support channels are listed on getpandit.com. Corporate partnership enquiries go through /contact.",
  },
];

export function getPanditMarketingFeatureById(id: string) {
  return getPanditMarketingCopy.features.find((feature) => feature.id === id);
}
