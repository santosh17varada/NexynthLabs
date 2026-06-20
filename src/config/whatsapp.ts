import { brandName } from "@/config/site-values";

/**
 * Environment variable names for WhatsApp Business — placeholders only.
 * Never store secrets or phone API tokens in this file.
 *
 * @see docs/nexynth-labs/13-whatsapp-business-guide.md
 */
export const whatsAppEnvKeys = {
  provider: "INTEGRATIONS_WHATSAPP_PROVIDER",
  businessPhone: "WHATSAPP_BUSINESS_PHONE",
  publicBusinessPhone: "NEXT_PUBLIC_WHATSAPP_BUSINESS_PHONE",
  apiToken: "WHATSAPP_API_TOKEN",
  apiKey: "WHATSAPP_API_KEY",
  phoneNumberId: "WHATSAPP_PHONE_NUMBER_ID",
  chatEnabled: "NEXT_PUBLIC_WHATSAPP_CHAT_ENABLED",
  integrationStatus: "INTEGRATIONS_WHATSAPP_BUSINESS_STATUS",
} as const;

export const whatsAppProviderSlugs = [
  "whatsapp-cloud-api",
  "twilio-whatsapp",
  "gupshup-whatsapp",
] as const;

export type WhatsAppProviderSlug = (typeof whatsAppProviderSlugs)[number];

export const whatsAppPageCopy = {
  ctaLabel: "Chat on WhatsApp",
  contact: {
    title: "Prefer WhatsApp?",
    description: `Message ${brandName} on WhatsApp for quick questions about services, products, or general enquiries. Opens WhatsApp — no login on this site.`,
    prefilledMessage:
      "Hello Nexynth Labs, I would like to enquire about your services.",
  },
  partners: {
    title: "Discuss on WhatsApp",
    description:
      "Share a short partnership or investor note on WhatsApp. Our team will follow up during business hours.",
    prefilledMessage:
      "Hello Nexynth Labs, I am interested in a partnership / investment conversation.",
  },
  readinessNote:
    "Click-to-chat uses your configured business number. WhatsApp Business API messaging is not connected on this corporate site yet.",
} as const;

/** Internal marker email for WhatsApp CTA click leads (no visitor email captured). */
export const whatsAppCtaLeadMarker = {
  name: "WhatsApp click-to-chat",
  email: "whatsapp-cta@leads.nexynthlabs.internal",
  interestType: "WhatsApp chat",
} as const;
