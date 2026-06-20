import { phone } from "@/config/site-values";
import {
  whatsAppEnvKeys,
  whatsAppProviderSlugs,
  type WhatsAppProviderSlug,
} from "@/config/whatsapp";

export type WhatsAppChatConfig = {
  /** Digits only, E.164 without leading + (for wa.me). */
  phoneE164: string;
  provider: WhatsAppProviderSlug | null;
  chatEnabled: boolean;
  ctaVisible: boolean;
  chatUrl: string;
  envKeys: typeof whatsAppEnvKeys;
};

function readEnv(key: string): string | undefined {
  const value = process.env[key]?.trim();
  return value ? value : undefined;
}

/** Strip non-digits; ensure India country code when 10-digit local number is provided. */
export function normalizeWhatsAppPhoneE164(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) {
    return `91${digits}`;
  }
  return digits;
}

function resolveProvider(): WhatsAppProviderSlug | null {
  const raw = readEnv(whatsAppEnvKeys.provider)?.toLowerCase();
  if (!raw) return null;
  return whatsAppProviderSlugs.includes(raw as WhatsAppProviderSlug)
    ? (raw as WhatsAppProviderSlug)
    : null;
}

function resolveBusinessPhoneE164(): string {
  const fromEnv =
    readEnv(whatsAppEnvKeys.publicBusinessPhone) ??
    readEnv(whatsAppEnvKeys.businessPhone);

  if (fromEnv) {
    return normalizeWhatsAppPhoneE164(fromEnv);
  }

  return normalizeWhatsAppPhoneE164(`91${phone}`);
}

export function buildWhatsAppChatUrl(
  phoneE164: string,
  message?: string,
): string {
  const base = `https://wa.me/${phoneE164}`;
  if (!message?.trim()) {
    return base;
  }
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

/**
 * Corporate-site WhatsApp click-to-chat configuration.
 * No provider API calls — wa.me link only.
 */
export function getWhatsAppChatConfig(prefilledMessage?: string): WhatsAppChatConfig {
  const phoneE164 = resolveBusinessPhoneE164();
  const enabledFlag = readEnv(whatsAppEnvKeys.chatEnabled)?.toLowerCase();
  const chatEnabled = enabledFlag !== "false";
  const ctaVisible = chatEnabled && phoneE164.length >= 10;

  return {
    phoneE164,
    provider: resolveProvider(),
    chatEnabled,
    ctaVisible,
    chatUrl: buildWhatsAppChatUrl(phoneE164, prefilledMessage),
    envKeys: whatsAppEnvKeys,
  };
}

export function getWhatsAppApiEnvKeyNames(): readonly string[] {
  return [
    whatsAppEnvKeys.provider,
    whatsAppEnvKeys.businessPhone,
    whatsAppEnvKeys.publicBusinessPhone,
    whatsAppEnvKeys.apiToken,
    whatsAppEnvKeys.apiKey,
    whatsAppEnvKeys.phoneNumberId,
    whatsAppEnvKeys.chatEnabled,
    whatsAppEnvKeys.integrationStatus,
  ];
}
