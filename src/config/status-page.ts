import { brandName, flagshipProductName } from "@/config/site-values";
import type { ServiceHealthComponent } from "@/types/status-page";

export const serviceHealthStatusLabels = {
  operational: "Operational",
  degraded: "Degraded",
  maintenance: "Maintenance",
  planned: "Planned",
} as const;

export const serviceHealthCategoryLabels = {
  website: "Websites",
  api: "API",
  data: "Data",
  integration: "Integrations",
} as const;

/**
 * Manually maintained service health placeholders.
 * Do not imply live monitoring — update statuses in config after incidents or reviews.
 */
export const serviceHealthComponents: readonly ServiceHealthComponent[] = [
  {
    id: "nexynth-website",
    name: `${brandName} Website`,
    category: "website",
    status: "operational",
    description:
      "Corporate marketing site (nexynthlabs.com) — public pages, forms, and admin shell.",
  },
  {
    id: "getpandit-website",
    name: `${flagshipProductName} Website`,
    category: "website",
    status: "operational",
    description:
      "Product marketing and booking domain (getpandit.com) — monitored separately from corporate deploys.",
  },
  {
    id: "api",
    name: "API",
    category: "api",
    status: "operational",
    description:
      "Corporate enquiry and admin APIs on this deployment — not GetPandit product APIs.",
  },
  {
    id: "database",
    name: "Database",
    category: "data",
    status: "planned",
    description:
      "PostgreSQL persistence for leads and CMS — file-based storage in use until migration.",
  },
  {
    id: "email-service",
    name: "Email Service",
    category: "integration",
    status: "planned",
    description:
      "SMTP / transactional email for lead notifications — not connected on corporate site yet.",
  },
  {
    id: "whatsapp-service",
    name: "WhatsApp Service",
    category: "integration",
    status: "planned",
    description:
      "WhatsApp Business API messaging — corporate click-to-chat only; server templates not wired.",
  },
  {
    id: "sms-service",
    name: "SMS Service",
    category: "integration",
    status: "planned",
    description:
      "Transactional SMS gateways (MSG91, Twilio, etc.) — integration slots documented, not live here.",
  },
  {
    id: "payment-service",
    name: "Payment Service",
    category: "integration",
    status: "planned",
    description:
      "Payment gateway processing on product domains — corporate site does not accept payments.",
  },
] as const;

export const statusPageCopy = {
  hero: {
    eyebrow: "System status",
    title: "Service health overview",
    description: `Lightweight status view for ${brandName} and related components. Values are config-maintained placeholders — not automated uptime probes.`,
  },
  /**
   * Set when ops manually reviews statuses (ISO date string). Omit to hide the line.
   * Example: "2026-06-16"
   */
  lastReviewedAt: undefined as string | undefined,
  disclaimer:
    "This page does not connect to live monitoring. Update src/config/status-page.ts after incidents, maintenance windows, or integration go-live.",
  footnote:
    "GetPandit product infrastructure may use separate status communication on getpandit.com when available.",
  closingCta: {
    title: "Reporting an issue?",
    description:
      "For corporate site or partnership enquiries, contact our team. Product booking issues belong on getpandit.com.",
    primary: { label: "Contact us", href: "/contact" },
    secondary: { label: "Public roadmap", href: "/roadmap" },
  },
} as const;

export function getOverallServiceHealth(): ServiceHealthComponent["status"] {
  const statuses = serviceHealthComponents.map((c) => c.status);

  if (statuses.every((s) => s === "operational")) {
    return "operational";
  }
  if (statuses.some((s) => s === "degraded" || s === "maintenance")) {
    return statuses.some((s) => s === "maintenance") ? "maintenance" : "degraded";
  }
  if (statuses.every((s) => s === "planned")) {
    return "planned";
  }
  return "operational";
}

export function getServiceHealthCounts(): Record<
  ServiceHealthComponent["status"],
  number
> {
  return serviceHealthComponents.reduce(
    (counts, component) => {
      counts[component.status] += 1;
      return counts;
    },
    {
      operational: 0,
      degraded: 0,
      maintenance: 0,
      planned: 0,
    },
  );
}
