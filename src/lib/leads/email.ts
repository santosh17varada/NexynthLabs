import { siteConfig } from "@/config/site";
import type { Lead } from "@/types/lead";

export type EmailDeliveryResult = {
  sent: boolean;
  provider: "none" | "smtp";
  message: string;
};

/**
 * TODO: Configure SMTP or a transactional email provider (Resend, SendGrid, SES).
 * Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM in .env.local
 * See docs/leads.md
 */
export async function sendLeadNotificationEmail(
  lead: Lead,
): Promise<EmailDeliveryResult> {
  const smtpHost = process.env.SMTP_HOST;
  const smtpFrom = process.env.SMTP_FROM ?? siteConfig.email;
  const notifyTo = process.env.LEADS_NOTIFY_EMAIL ?? siteConfig.email;

  if (!smtpHost) {
    return {
      sent: false,
      provider: "none",
      message:
        "SMTP not configured. Lead saved to data/leads.json. Set SMTP_* env vars — see docs/leads.md.",
    };
  }

  // TODO: Implement nodemailer / Resend / SendGrid when SMTP credentials are provided.
  console.info("[leads/email:todo]", {
    to: notifyTo,
    from: smtpFrom,
    leadId: lead.id,
    smtpHost,
  });

  return {
    sent: false,
    provider: "smtp",
    message:
      "SMTP_HOST is set but email dispatch is not implemented yet. Lead stored successfully.",
  };
}

export function isEmailConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER);
}
