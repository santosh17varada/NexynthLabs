import { brandName, email } from "@/config/site-values";
import type { LeadSource } from "@/types/lead";

export const NEWSLETTER_LEAD_SOURCE: LeadSource = "newsletter";

export const newsletterCopy = {
  title: "Stay in the loop",
  description: `Occasional updates from ${brandName} — product notes, engineering patterns, and event announcements. No spam; unsubscribe when provider integration ships.`,
  emailLabel: "Email",
  nameLabel: "Name (optional)",
  submitLabel: "Subscribe",
  privacyNote: "By subscribing you agree to our",
  privacyLinkLabel: "Privacy Policy",
  successMessage: "Thank you — you're on the list. We'll confirm by email when our newsletter provider is connected.",
  fallbackNote: `If signup fails, email ${email} with subject "Newsletter subscribe".`,
} as const;

export function buildNewsletterMailto(body: { email: string; name: string }): string {
  const subject = encodeURIComponent("Newsletter subscribe");
  const lines = [
    "Please add me to the Nexynth Labs newsletter.",
    "",
    `Email: ${body.email}`,
    body.name ? `Name: ${body.name}` : null,
  ].filter((line): line is string => line !== null);

  return `mailto:${email}?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;
}
