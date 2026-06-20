import { brandName } from "@/config/site-values";

export type ServiceCta = {
  label: string;
  href: string;
};

export type ServiceCategoryId = "build" | "integrate" | "scale";

export type CatalogService = {
  id: string;
  title: string;
  description: string;
  benefits: readonly string[];
  category: ServiceCategoryId;
  cta: ServiceCta;
};

export const serviceCategories: Record<
  ServiceCategoryId,
  { label: string; description: string }
> = {
  build: {
    label: "Build",
    description: "Design and ship digital products from idea to launch.",
  },
  integrate: {
    label: "Integrate",
    description: "Connect payments, messaging, and enterprise systems reliably.",
  },
  scale: {
    label: "Scale & maintain",
    description: "Cloud infrastructure and long-term platform care.",
  },
};

function serviceContactHref(serviceId: string): string {
  return `/contact?service=${encodeURIComponent(serviceId)}`;
}

export const serviceCatalog: readonly CatalogService[] = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description:
      "LLM features, automation, and intelligent workflows — scoped to your product and data, not hype.",
    category: "build",
    benefits: [
      "Use-case discovery aligned with business outcomes",
      "LLM and ML integration without over-engineering",
      "Responsible AI patterns for production systems",
    ],
    cta: { label: "Discuss AI scope", href: serviceContactHref("ai-solutions") },
  },
  {
    id: "product-engineering",
    title: "Product Engineering",
    description:
      "From architecture to release — maintainable codebases and user trust, not throwaway MVPs.",
    category: "build",
    benefits: [
      "Full-stack delivery across web and APIs",
      "Iterative releases with clear milestones",
      "Codebases built for teams to own long term",
    ],
    cta: {
      label: "Start a product build",
      href: serviceContactHref("product-engineering"),
    },
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Fast, accessible websites and web apps — marketing sites, dashboards, and customer-facing platforms.",
    category: "build",
    benefits: [
      "Modern stacks including Next.js and TypeScript",
      "Mobile-first responsive UI",
      "SEO-ready structure and performance tuning",
    ],
    cta: {
      label: "Discuss web development",
      href: serviceContactHref("web-development"),
    },
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Native-quality mobile experiences for iOS and Android, or cross-platform when speed and reach matter most.",
    category: "build",
    benefits: [
      "User flows designed for small screens first",
      "Offline-aware patterns where needed",
      "App store readiness and release support",
    ],
    cta: {
      label: "Plan your mobile app",
      href: serviceContactHref("mobile-app-development"),
    },
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Scalable cloud setup, CI/CD pipelines, and observability so releases stay predictable and secure.",
    category: "scale",
    benefits: [
      "Infrastructure as code and environment parity",
      "Automated build, test, and deploy pipelines",
      "Monitoring, alerts, and incident-ready ops",
    ],
    cta: {
      label: "Review cloud setup",
      href: serviceContactHref("cloud-devops"),
    },
  },
  {
    id: "enterprise-integrations",
    title: "Enterprise Integrations",
    description:
      "Connect CRMs, ERPs, internal tools, and third-party APIs with stable, documented integration layers.",
    category: "integrate",
    benefits: [
      "API design and middleware for complex systems",
      "Secure auth and data mapping",
      "Reduced manual work between business tools",
    ],
    cta: {
      label: "Talk integrations",
      href: serviceContactHref("enterprise-integrations"),
    },
  },
  {
    id: "payment-gateway-integration",
    title: "Payment Gateway Integration",
    description:
      "Integrate payment gateways for bookings, subscriptions, and checkout — with reconciliation and failure handling.",
    category: "integrate",
    benefits: [
      "Gateway selection guidance for Indian markets",
      "Secure payment flows and webhook handling",
      "Ready for products like GetPandit booking checkout",
    ],
    cta: {
      label: "Integrate payments",
      href: serviceContactHref("payment-gateway-integration"),
    },
  },
  {
    id: "sms-gateway-integration",
    title: "SMS Gateway Integration",
    description:
      "Transactional SMS for OTPs, booking confirmations, and reminders — reliable delivery and template management.",
    category: "integrate",
    benefits: [
      "Provider integration and failover patterns",
      "Template and compliance-aware messaging",
      "Tied into scheduling and notification flows",
    ],
    cta: {
      label: "Add SMS capability",
      href: serviceContactHref("sms-gateway-integration"),
    },
  },
  {
    id: "whatsapp-business-integration",
    title: "WhatsApp Business Integration",
    description:
      "WhatsApp Business API for booking updates, support, and customer communication at scale.",
    category: "integrate",
    benefits: [
      "Template and session message workflows",
      "Booking and status notifications via WhatsApp",
      "Integration-ready alongside SMS and email",
    ],
    cta: {
      label: "Connect WhatsApp",
      href: serviceContactHref("whatsapp-business-integration"),
    },
  },
  {
    id: "platform-maintenance",
    title: "Platform Maintenance",
    description:
      "Ongoing care for live products — security patches, dependency updates, uptime, and incremental improvements.",
    category: "scale",
    benefits: [
      "Proactive monitoring and bug resolution",
      "Scheduled updates without disrupting users",
      "A partner for long-running platforms like GetPandit",
    ],
    cta: {
      label: "Request maintenance plan",
      href: serviceContactHref("platform-maintenance"),
    },
  },
] as const;

export type Service = (typeof serviceCatalog)[number];

export function getServiceById(id: string): Service | undefined {
  return serviceCatalog.find((service) => service.id === id);
}

export function getServicesByCategory(category: ServiceCategoryId): Service[] {
  return serviceCatalog.filter((service) => service.category === category);
}

export const servicesPageCopy = {
  hero: {
    eyebrow: "Services",
    title: "Engineering that scales with your product",
    description: `${brandName} helps teams build, integrate, and run digital platforms — AI, product engineering, payments, messaging, and cloud operations.`,
  },
  catalogNote: `${serviceCatalog.length} services · Config-driven catalog in src/config/services.ts`,
};

export const featuredServiceIds = [
  "ai-solutions",
  "product-engineering",
  "web-development",
  "mobile-app-development",
] as const;

export function getFeaturedServices(): Service[] {
  return featuredServiceIds
    .map((id) => getServiceById(id))
    .filter((service): service is Service => service !== undefined);
}
