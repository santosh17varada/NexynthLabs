import { flagshipProductName } from "@/config/site-values";
import {
  getPanditMetricStatusLabels,
  getPanditSuccessMetrics,
} from "@/config/getpandit-metrics";
import { getFlagshipProduct, getProductHostname } from "@/config/products";
import type { GetPanditSuccessMetric } from "@/types/getpandit-metrics";

const flagship = getFlagshipProduct();
const productHost = getProductHostname(flagship);

export const getPanditShowcaseCopy = {
  badge: "Flagship product",
  title: flagshipProductName,
  tagline: flagship.tagline,
  summary: flagship.description,
  domainNote: `${flagshipProductName} runs on ${productHost} — independent from this corporate site. Status labels describe platform readiness only, not user counts or revenue.`,
  ecosystemTitle: "Product ecosystem",
  ecosystemDescription:
    "Web, mobile, and admin surfaces on the product stack — designed for families, pandit partners, and internal operations.",
  readinessTitle: "Platform readiness",
  readinessDescription:
    "Honest milestones for booking, onboarding, admin operations, and integrations — updated as capabilities ship on the product domain.",
  disclaimer:
    "Readiness labels reflect engineering and integration status only — not bookings completed, active users, or financial performance.",
  ctas: {
    explore: { label: "Explore GetPandit", href: flagship.internalHref },
    partner: { label: "Partner With Us", href: "/contact?intent=partner" },
  },
  mockup: {
    imageSrc: "/portfolio/getpandit-hero.svg",
    imageAlt: `${flagshipProductName} platform overview — pandit discovery and pooja booking on ${productHost}`,
    urlBar: productHost,
  },
} as const;

export type GetPanditEcosystemSurface = {
  id: string;
  label: string;
  description: string;
  metricId: string;
};

/** Web, mobile, and admin ecosystem — statuses pulled from metrics config. */
export const getPanditEcosystemSurfaces: readonly GetPanditEcosystemSurface[] = [
  {
    id: "web",
    label: "Web",
    description: "Family-facing discovery, pooja packages, and booking flows on the product domain.",
    metricId: "mobile-web-platform",
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Mobile-first responsive experience with touch-friendly ceremony scheduling.",
    metricId: "mobile-web-platform",
  },
  {
    id: "admin",
    label: "Admin",
    description: "Internal operations for booking oversight, partners, and platform management.",
    metricId: "admin-dashboard",
  },
] as const;

/** Showcase readiness rows — booking, onboarding, admin, integrations. */
export const getPanditShowcaseReadinessIds = [
  "booking-workflow",
  "pandit-onboarding",
  "admin-dashboard",
  "payment-messaging",
] as const;

export function getShowcaseReadinessMetrics(): GetPanditSuccessMetric[] {
  return getPanditShowcaseReadinessIds
    .map((id) => getPanditSuccessMetrics.find((metric) => metric.id === id))
    .filter((metric): metric is GetPanditSuccessMetric => metric !== undefined);
}

export function getEcosystemStatusLabel(metricId: string): string {
  const metric = getPanditSuccessMetrics.find((entry) => entry.id === metricId);
  if (!metric) return getPanditMetricStatusLabels.planned;
  return getPanditMetricStatusLabels[metric.status];
}

export function getEcosystemStatus(metricId: string) {
  return getPanditSuccessMetrics.find((entry) => entry.id === metricId)?.status ?? "planned";
}
