import type { PlannedAnalyticsEvent } from "@/types/analytics";

/**
 * Public env keys for analytics providers — placeholders only.
 * Scripts and events are no-ops until at least one ID is set.
 * @see docs/nexynth-labs/15-analytics-dashboard-guide.md
 */
export const analyticsEnvKeys = {
  gaMeasurementId: "NEXT_PUBLIC_GA_MEASUREMENT_ID",
  gtmContainerId: "NEXT_PUBLIC_GTM_CONTAINER_ID",
  metaPixelId: "NEXT_PUBLIC_META_PIXEL_ID",
  linkedInPartnerId: "NEXT_PUBLIC_LINKEDIN_PARTNER_ID",
  analyticsDebug: "NEXT_PUBLIC_ANALYTICS_DEBUG",
} as const;

export const analyticsDashboardCopy = {
  title: "Analytics dashboard readiness",
  description:
    "Planned events and provider slots for GA4, GTM, Meta Pixel, and LinkedIn Insight Tag. Scripts load only when public IDs are set in environment variables.",
} as const;

/** Primary conversion events (Prompt 21) + supplementary page-view / newsletter events. */
export const plannedAnalyticsEvents: readonly {
  name: PlannedAnalyticsEvent;
  description: string;
  gtmTriggerHint: string;
}[] = [
  {
    name: "contact_form_submit",
    description: "Successful contact form submission on /contact.",
    gtmTriggerHint: "Custom Event — contact_form_submit",
  },
  {
    name: "rfp_submit",
    description: "Successful RFP / proposal request on /request-proposal.",
    gtmTriggerHint: "Custom Event — rfp_submit",
  },
  {
    name: "partner_submit",
    description: "Successful partner enquiry on /partners or /partners/portal.",
    gtmTriggerHint: "Custom Event — partner_submit",
  },
  {
    name: "getpandit_cta_click",
    description: "Click external CTA to getpandit.com (product domain).",
    gtmTriggerHint: "Custom Event — getpandit_cta_click",
  },
  {
    name: "whatsapp_cta_click",
    description: "Click WhatsApp click-to-chat CTA.",
    gtmTriggerHint: "Custom Event — whatsapp_cta_click",
  },
  {
    name: "consultation_submit",
    description: "Successful consultation request on /book-consultation.",
    gtmTriggerHint: "Custom Event — consultation_submit",
  },
  {
    name: "resource_download_click",
    description: "Click download or request-access on a resource card (/resources).",
    gtmTriggerHint: "Custom Event — resource_download_click",
  },
  {
    name: "portfolio_view",
    description: "Portfolio index page view (/portfolio).",
    gtmTriggerHint: "Custom Event — portfolio_view",
  },
  {
    name: "case_study_view",
    description: "Case study detail view (/case-studies/[slug]).",
    gtmTriggerHint: "Custom Event — case_study_view",
  },
  {
    name: "newsletter_submit",
    description: "Successful newsletter signup (any placement).",
    gtmTriggerHint: "Custom Event — newsletter_submit",
  },
] as const;
