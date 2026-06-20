import { getIntegration } from "@/lib/integrations";

export type PaymentSessionResult = {
  created: boolean;
  provider: string | null;
  message: string;
};

/**
 * Placeholder for payment session creation — not implemented.
 * Intended for getpandit.com product flows, not the corporate site.
 */
export async function createPaymentSession(input: {
  amountInPaise: number;
  currency: string;
  referenceId: string;
}): Promise<PaymentSessionResult> {
  void input;
  const slot = getIntegration("payment-gateway");

  return {
    created: false,
    provider: slot.provider,
    message: slot.isActive
      ? "Payment gateway adapter not implemented yet."
      : "Payment gateway integration is not active.",
  };
}

export function isPaymentGatewayConfigured(): boolean {
  return getIntegration("payment-gateway").isConfigured;
}
