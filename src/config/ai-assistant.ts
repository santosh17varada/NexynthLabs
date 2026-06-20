import { brandName, flagshipProductName } from "@/config/site-values";
import type { AiAssistantProvider, AiAssistantUseCase } from "@/types/ai-assistant";

/**
 * Env keys for a future server-side assistant API — not wired on the marketing site today.
 * @see docs/nexynth-labs/42-ai-assistant-placeholder-guide.md
 */
export const aiAssistantEnvKeys = {
  enabled: "AI_ASSISTANT_ENABLED",
  provider: "AI_ASSISTANT_PROVIDER",
  openaiApiKey: "OPENAI_API_KEY",
  groqApiKey: "GROQ_API_KEY",
  openaiModel: "OPENAI_MODEL",
  groqModel: "GROQ_MODEL",
  maxTokens: "AI_ASSISTANT_MAX_TOKENS",
  rateLimitPerIp: "AI_ASSISTANT_RATE_LIMIT_PER_IP",
} as const;

/** Returns true only when server env explicitly enables assistant AND provider key exists. */
export function isAiAssistantApiConfigured(): boolean {
  if (process.env[aiAssistantEnvKeys.enabled]?.toLowerCase() !== "true") {
    return false;
  }

  const provider = resolveAiAssistantProvider();
  if (provider === "openai") {
    return Boolean(process.env[aiAssistantEnvKeys.openaiApiKey]?.trim());
  }
  return Boolean(process.env[aiAssistantEnvKeys.groqApiKey]?.trim());
}

export function resolveAiAssistantProvider(): AiAssistantProvider {
  const raw = process.env[aiAssistantEnvKeys.provider]?.trim().toLowerCase();
  return raw === "groq" ? "groq" : "openai";
}

export const aiAssistantCopy = {
  widgetLabel: "Ask Nexynth AI",
  widgetAriaLabel: "Open Nexynth AI assistant panel",
  panelTitle: "Ask Nexynth AI",
  panelSubtitle: `Guided answers about ${brandName} — coming soon on this site.`,
  comingSoonBadge: "Coming soon",
  disabledNotice:
    "This assistant is a placeholder. No messages are sent to an AI provider. Use the links below or contact us for help.",
  inputPlaceholder: "Ask about services, products, careers…",
  sendLabel: "Send",
  sendDisabledHint: "AI chat is not connected yet",
  closeLabel: "Close assistant",
  useCasesTitle: "Popular topics",
  section: {
    eyebrow: "AI assistant",
    title: "Ask Nexynth AI",
    description:
      "A future on-site helper for services, products, careers, GetPandit, and partnerships — with human escalation and guardrails. Not live yet.",
    footnote: "No OpenAI, Groq, or other model API is called from this corporate marketing site today.",
  },
  contactFallback: {
    label: "Talk to our team",
    href: "/contact",
  },
  faqFallback: {
    label: "Browse FAQ",
    href: "/faq",
  },
} as const;

export const aiAssistantUseCases: readonly AiAssistantUseCase[] = [
  {
    id: "services",
    label: "Services",
    description: "AI, web, mobile, cloud, and integration engagements",
    href: "/services",
  },
  {
    id: "products",
    label: "Products",
    description: `${brandName} product catalog and ecosystem`,
    href: "/products",
  },
  {
    id: "careers",
    label: "Careers",
    description: "Open roles and culture — email apply only",
    href: "/careers",
  },
  {
    id: "getpandit",
    label: flagshipProductName,
    description: "Flagship booking platform on getpandit.com",
    href: "/getpandit",
  },
  {
    id: "partnerships",
    label: "Partnerships",
    description: "Temple, vendor, technology, and investor tracks",
    href: "/partners",
  },
] as const;
