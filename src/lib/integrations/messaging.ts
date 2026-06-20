import { getIntegration } from "@/lib/integrations";
import { getWhatsAppChatConfig } from "@/lib/whatsapp";

export type MessagingDispatchResult = {
  sent: boolean;
  channel: "whatsapp" | "sms";
  provider: string | null;
  message: string;
};

/**
 * Placeholder for WhatsApp Business API dispatch — not implemented.
 */
export async function sendWhatsAppMessage(input: {
  to: string;
  templateId?: string;
  body?: string;
}): Promise<MessagingDispatchResult> {
  void input;
  const slot = getIntegration("whatsapp-business");

  return {
    sent: false,
    channel: "whatsapp",
    provider: slot.provider,
    message: slot.isActive
      ? "WhatsApp provider adapter not implemented yet."
      : "WhatsApp Business integration is not active.",
  };
}

/**
 * Placeholder for SMS gateway dispatch — not implemented.
 */
export async function sendSmsMessage(input: {
  to: string;
  body: string;
}): Promise<MessagingDispatchResult> {
  void input;
  const slot = getIntegration("sms-gateway");

  return {
    sent: false,
    channel: "sms",
    provider: slot.provider,
    message: slot.isActive
      ? "SMS provider adapter not implemented yet."
      : "SMS gateway integration is not active.",
  };
}

export function isWhatsAppChatEnabled(): boolean {
  return getWhatsAppChatConfig().ctaVisible;
}
