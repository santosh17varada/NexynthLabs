/** First-party planned events for dashboard / GTM mapping. */
export type PlannedAnalyticsEvent =
  | "contact_form_submit"
  | "rfp_submit"
  | "partner_submit"
  | "getpandit_cta_click"
  | "whatsapp_cta_click"
  | "consultation_submit"
  | "resource_download_click"
  | "portfolio_view"
  | "case_study_view"
  | "newsletter_submit";

export type AnalyticsEventParams = Record<
  string,
  string | number | boolean | undefined
>;

export type PublicAnalyticsProviderKey =
  | "googleAnalytics"
  | "googleTagManager"
  | "metaPixel"
  | "linkedInInsight";

export type PublicAnalyticsConfig = {
  googleAnalytics: { enabled: boolean; measurementId: string | null };
  googleTagManager: { enabled: boolean; containerId: string | null };
  metaPixel: { enabled: boolean; pixelId: string | null };
  linkedInInsight: { enabled: boolean; partnerId: string | null };
  hasAnyProvider: boolean;
  debug: boolean;
};
