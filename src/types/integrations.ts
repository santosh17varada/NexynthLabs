/** Lifecycle of an integration slot — providers are not wired until status is `active`. */
export type IntegrationLifecycle = "disabled" | "configured" | "active";

/** Where an integration is intended to run. */
export type IntegrationScope = "corporate-site" | "getpandit" | "both";

export type IntegrationCategory =
  | "analytics"
  | "messaging"
  | "commerce"
  | "crm";

export type IntegrationId =
  | "google-analytics"
  | "google-tag-manager"
  | "meta-pixel"
  | "linkedin-insight-tag"
  | "whatsapp-business"
  | "sms-gateway"
  | "payment-gateway"
  | "crm";

/** Known provider identifiers — placeholders only; no SDKs are bundled yet. */
export type IntegrationProviderId =
  | "ga4"
  | "gtm"
  | "meta-pixel"
  | "linkedin-insight"
  | "whatsapp-cloud-api"
  | "twilio-whatsapp"
  | "gupshup-whatsapp"
  | "msg91"
  | "twilio-sms"
  | "gupshup-sms"
  | "razorpay"
  | "stripe"
  | "payu"
  | "hubspot"
  | "salesforce"
  | "zoho-crm"
  | "pipedrive"
  | "custom";

export type IntegrationEnvVar = {
  /** Environment variable name (documented in `.env.example`). */
  key: string;
  /** Whether the variable may be exposed to the browser (`NEXT_PUBLIC_*`). */
  public: boolean;
  required: boolean;
  description: string;
};

export type IntegrationDefinition = {
  id: IntegrationId;
  category: IntegrationCategory;
  label: string;
  description: string;
  scope: IntegrationScope;
  /** Roadmap phase when implementation is expected. */
  phase: 2 | 3 | 4;
  /** Default lifecycle before environment overrides are applied. */
  defaultLifecycle: IntegrationLifecycle;
  /** Provider options for documentation — not selectable in UI yet. */
  supportedProviders: readonly IntegrationProviderId[];
  /** Documented environment variables for this slot. */
  envVars: readonly IntegrationEnvVar[];
  /** Optional notes for implementers (privacy, cookie consent, etc.). */
  notes?: string;
};

export type ResolvedIntegration = IntegrationDefinition & {
  lifecycle: IntegrationLifecycle;
  /** Selected provider from env, if any. */
  provider: IntegrationProviderId | null;
  /** Env keys that are set but empty or unset when required. */
  missingRequiredEnv: string[];
  /** True when all required env vars are non-empty. */
  isConfigured: boolean;
  /** True only when lifecycle is `active` and configuration is complete. */
  isActive: boolean;
};

export type IntegrationsRuntime = {
  version: number;
  integrations: Record<IntegrationId, ResolvedIntegration>;
};
