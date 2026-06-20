import { phoneDisplay } from "@/config/site-values";
import type { IntegrationDefinition } from "@/types/integrations";

/**
 * Static integration registry for Nexynth Labs.
 *
 * Values here describe intent and documentation defaults only.
 * Secrets and IDs are supplied via environment variables (see `.env.example`
 * and `docs/nexynth-labs/12-integrations-guide.md`).
 *
 * Do not store API keys or tokens in this file.
 */
export const integrationsRegistryVersion = 1;

export const integrationDefinitions = {
  "google-analytics": {
    id: "google-analytics",
    category: "analytics",
    label: "Google Analytics",
    description:
      "Privacy-conscious traffic and conversion measurement for the corporate site (GA4).",
    scope: "corporate-site",
    phase: 3,
    defaultLifecycle: "disabled",
    supportedProviders: ["ga4"],
    envVars: [
      {
        key: "NEXT_PUBLIC_GA_MEASUREMENT_ID",
        public: true,
        required: true,
        description: "GA4 measurement ID (format G-XXXXXXXXXX).",
      },
      {
        key: "GA_API_SECRET",
        public: false,
        required: false,
        description:
          "Measurement Protocol secret for server-side events (optional).",
      },
    ],
    notes:
      "Enable cookie consent before loading in production if required by policy.",
  },
  "google-tag-manager": {
    id: "google-tag-manager",
    category: "analytics",
    label: "Google Tag Manager",
    description:
      "Tag orchestration layer for marketing pixels and event routing without frequent deploys.",
    scope: "corporate-site",
    phase: 3,
    defaultLifecycle: "disabled",
    supportedProviders: ["gtm"],
    envVars: [
      {
        key: "NEXT_PUBLIC_GTM_CONTAINER_ID",
        public: true,
        required: true,
        description: "GTM container ID (format GTM-XXXXXXX).",
      },
    ],
    notes:
      "Prefer GTM over multiple hard-coded snippets. Coordinate with GA4 to avoid duplicate page views.",
  },
  "meta-pixel": {
    id: "meta-pixel",
    category: "analytics",
    label: "Meta Pixel",
    description:
      "Facebook / Instagram conversion and remarketing events for paid campaigns.",
    scope: "corporate-site",
    phase: 3,
    defaultLifecycle: "disabled",
    supportedProviders: ["meta-pixel"],
    envVars: [
      {
        key: "NEXT_PUBLIC_META_PIXEL_ID",
        public: true,
        required: true,
        description: "Meta Pixel ID (numeric string).",
      },
      {
        key: "META_CONVERSIONS_API_TOKEN",
        public: false,
        required: false,
        description:
          "Conversions API access token for server-side event matching (optional).",
      },
    ],
    notes: "Requires marketing cookie consent in applicable regions.",
  },
  "linkedin-insight-tag": {
    id: "linkedin-insight-tag",
    category: "analytics",
    label: "LinkedIn Insight Tag",
    description:
      "LinkedIn conversion and website audience insights for B2B campaigns and partner outreach.",
    scope: "corporate-site",
    phase: 3,
    defaultLifecycle: "disabled",
    supportedProviders: ["linkedin-insight"],
    envVars: [
      {
        key: "NEXT_PUBLIC_LINKEDIN_PARTNER_ID",
        public: true,
        required: true,
        description: "LinkedIn Insight Tag partner ID (numeric string).",
      },
    ],
    notes:
      "Map planned events in GTM where possible. Enable after cookie policy review.",
  },
  "whatsapp-business": {
    id: "whatsapp-business",
    category: "messaging",
    label: "WhatsApp Business",
    description:
      "Transactional WhatsApp notifications and click-to-chat for enquiries. Primary product use on getpandit.com; corporate site may expose a chat entry point.",
    scope: "both",
    phase: 4,
    defaultLifecycle: "disabled",
    supportedProviders: [
      "whatsapp-cloud-api",
      "twilio-whatsapp",
      "gupshup-whatsapp",
    ],
    envVars: [
      {
        key: "INTEGRATIONS_WHATSAPP_PROVIDER",
        public: false,
        required: false,
        description:
          "Provider slug: whatsapp-cloud-api | twilio-whatsapp | gupshup-whatsapp.",
      },
      {
        key: "WHATSAPP_API_KEY",
        public: false,
        required: false,
        description:
          "Optional alias for provider API key (some BSPs use API_KEY naming). Prefer WHATSAPP_API_TOKEN when both exist.",
      },
      {
        key: "NEXT_PUBLIC_WHATSAPP_BUSINESS_PHONE",
        public: true,
        required: false,
        description:
          "E.164 business number for click-to-chat on the corporate site (digits only or with +).",
      },
      {
        key: "WHATSAPP_BUSINESS_PHONE",
        public: false,
        required: false,
        description: `Server-side E.164 business number (default click-to-chat: ${phoneDisplay}).`,
      },
      {
        key: "WHATSAPP_API_TOKEN",
        public: false,
        required: false,
        description: "Provider API token or permanent system user token.",
      },
      {
        key: "WHATSAPP_PHONE_NUMBER_ID",
        public: false,
        required: false,
        description: "Meta Cloud API phone number ID (Cloud API only).",
      },
      {
        key: "NEXT_PUBLIC_WHATSAPP_CHAT_ENABLED",
        public: true,
        required: false,
        description:
          'Set to "true" to show a public WhatsApp chat link on the corporate site.',
      },
    ],
    notes:
      "Booking notifications belong on the GetPandit product domain. Corporate site should limit to marketing chat links unless approved.",
  },
  "sms-gateway": {
    id: "sms-gateway",
    category: "messaging",
    label: "SMS Gateway",
    description:
      "OTP, booking confirmations, and operational SMS. Expected on getpandit.com; corporate site uses for lead alerts when enabled.",
    scope: "both",
    phase: 4,
    defaultLifecycle: "disabled",
    supportedProviders: ["msg91", "twilio-sms", "gupshup-sms"],
    envVars: [
      {
        key: "INTEGRATIONS_SMS_PROVIDER",
        public: false,
        required: false,
        description: "Provider slug: msg91 | twilio-sms | gupshup-sms.",
      },
      {
        key: "SMS_API_KEY",
        public: false,
        required: false,
        description: "Primary API key or auth token for the SMS provider.",
      },
      {
        key: "SMS_SENDER_ID",
        public: false,
        required: false,
        description: "DLT-registered sender ID (India) or alphanumeric sender.",
      },
      {
        key: "SMS_NOTIFY_ENABLED",
        public: false,
        required: false,
        description:
          'Set to "true" to send SMS alerts for new corporate-site leads (future).',
      },
    ],
  },
  "payment-gateway": {
    id: "payment-gateway",
    category: "commerce",
    label: "Payment Gateway",
    description:
      "Accept online payments on product flows. Not used on the corporate marketing site checkout (no cart today).",
    scope: "getpandit",
    phase: 4,
    defaultLifecycle: "disabled",
    supportedProviders: ["razorpay", "stripe", "payu"],
    envVars: [
      {
        key: "INTEGRATIONS_PAYMENT_PROVIDER",
        public: false,
        required: false,
        description: "Provider slug: razorpay | stripe | payu.",
      },
      {
        key: "PAYMENT_KEY_ID",
        public: false,
        required: false,
        description: "Publishable / key ID for client-side checkout initialization.",
      },
      {
        key: "PAYMENT_KEY_SECRET",
        public: false,
        required: false,
        description: "Secret key — server only. Never expose to the browser.",
      },
      {
        key: "PAYMENT_WEBHOOK_SECRET",
        public: false,
        required: false,
        description: "Webhook signing secret for payment status callbacks.",
      },
      {
        key: "NEXT_PUBLIC_PAYMENT_KEY_ID",
        public: true,
        required: false,
        description:
          "Optional public key if checkout SDK requires a browser-visible ID (provider-specific).",
      },
    ],
    notes:
      "Implement on getpandit.com. Corporate site only documents readiness in product marketing copy.",
  },
  "crm": {
    id: "crm",
    category: "crm",
    label: "CRM Integration",
    description:
      "Sync contact form leads and lifecycle stages to a CRM for sales follow-up.",
    scope: "corporate-site",
    phase: 2,
    defaultLifecycle: "disabled",
    supportedProviders: [
      "hubspot",
      "salesforce",
      "zoho-crm",
      "pipedrive",
      "custom",
    ],
    envVars: [
      {
        key: "INTEGRATIONS_CRM_PROVIDER",
        public: false,
        required: false,
        description:
          "Provider slug: hubspot | salesforce | zoho-crm | pipedrive | custom.",
      },
      {
        key: "CRM_API_BASE_URL",
        public: false,
        required: false,
        description: "REST API base URL (required for custom / self-hosted CRM).",
      },
      {
        key: "CRM_API_KEY",
        public: false,
        required: false,
        description: "API key or private app token for server-side sync.",
      },
      {
        key: "CRM_PIPELINE_ID",
        public: false,
        required: false,
        description: "Default pipeline or deal stage mapping ID (provider-specific).",
      },
      {
        key: "CRM_SYNC_ENABLED",
        public: false,
        required: false,
        description:
          'Set to "true" to push new leads from POST /api/enquiry to CRM (future).',
      },
    ],
    notes:
      "Map lead fields in `src/lib/integrations/crm.ts` when implementing (file stub).",
  },
} as const satisfies Record<
  IntegrationDefinition["id"],
  IntegrationDefinition
>;

export type IntegrationRegistry = typeof integrationDefinitions;

export const integrationDefinitionList = Object.values(integrationDefinitions);

export const integrationsByCategory = {
  analytics: [
    integrationDefinitions["google-analytics"],
    integrationDefinitions["google-tag-manager"],
    integrationDefinitions["meta-pixel"],
    integrationDefinitions["linkedin-insight-tag"],
  ],
  messaging: [
    integrationDefinitions["whatsapp-business"],
    integrationDefinitions["sms-gateway"],
  ],
  commerce: [integrationDefinitions["payment-gateway"]],
  crm: [integrationDefinitions.crm],
} as const;
