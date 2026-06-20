import { brandName, flagshipProductName } from "@/config/site-values";
import type { GetPanditSuccessMetric } from "@/types/getpandit-metrics";

export const getPanditMetricsPageCopy = {
  eyebrow: "Platform readiness",
  title: `${flagshipProductName} success metrics`,
  description: `Honest readiness indicators for ${flagshipProductName} on getpandit.com — what is live, what is integration-ready, and what is still in progress. ${brandName} does not publish customer counts or revenue on this corporate site.`,
  disclaimer:
    "Status labels reflect platform and integration readiness only — not user totals, bookings completed, or financial performance.",
  footnote:
    "Metrics are updated when product milestones ship on getpandit.com. This page does not connect to live product analytics.",
} as const;

/**
 * Config-driven readiness metrics for GetPandit.
 * Edit statuses here when milestones change — no fake growth numbers.
 */
export const getPanditSuccessMetrics: readonly GetPanditSuccessMetric[] = [
  {
    id: "pooja-categories",
    title: "Pooja service categories",
    description:
      "Structured catalog of pujas and rituals with transparent service details for family discovery.",
    status: "platform-ready",
  },
  {
    id: "pandit-onboarding",
    title: "Pandit onboarding readiness",
    description:
      "Profile intake, verification checkpoints, and service listing flows for pandit partners.",
    status: "in-progress",
  },
  {
    id: "booking-workflow",
    title: "Booking workflow readiness",
    description:
      "Browse-to-confirm journey with calendar-aware scheduling, status updates, and family notifications.",
    status: "platform-ready",
  },
  {
    id: "mobile-web-platform",
    title: "Mobile & web platform readiness",
    description:
      "Mobile-first responsive experience on the product domain with performance and accessibility baselines.",
    status: "platform-ready",
  },
  {
    id: "payment-messaging",
    title: "Payment / SMS / WhatsApp integration readiness",
    description:
      "Architecture and configuration slots prepared for payment gateway and transactional messaging providers.",
    status: "integration-ready",
  },
  {
    id: "admin-dashboard",
    title: "Admin dashboard readiness",
    description:
      "Internal tools for operations, booking oversight, and partner management on the product stack.",
    status: "in-progress",
  },
] as const;

export const getPanditMetricStatusLabels = {
  "platform-ready": "Platform Ready",
  "integration-ready": "Integration Ready",
  "in-progress": "In Progress",
  planned: "Planned",
} as const;
