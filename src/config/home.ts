import { companyName, flagshipProductName } from "@/config/site-values";
import { homeConversionCopy } from "@/config/conversion";

export const homeStoryOrder = [
  "hero",
  "ai-network",
  "products",
  "ai-workflow",
  "marketplace-intelligence",
  "delivery-journey",
  "why-nexynth",
  "mid-cta",
  "getpandit-ecosystem-story",
  "getpandit-highlight",
  "social-proof",
  "technology",
  "final-cta",
] as const;

export const homeHeroCopy = {
  eyebrow: "Building products people trust",
  flagshipBadge: "Flagship · Live on getpandit.com",
  title: "Products people trust.\nPlatforms that scale.",
  description:
    "Nexynth Labs designs and builds AI-native platforms — from our live marketplace GetPandit to enterprise web, mobile, and automation systems.",
  trustBadges: ["Live products", "AI-native stack", "Cloud-ready"] as const,
  ctas: {
    primary: homeConversionCopy.hero.primary,
    secondary: homeConversionCopy.hero.secondary,
  },
  visualCards: {
    getPandit: {
      title: flagshipProductName,
      subtitle: "Marketplace · Pooja booking platform",
      href: "/getpandit",
      status: "Live",
      domain: "getpandit.com",
    },
    aiAutomation: {
      title: "AI Automation",
      subtitle: "Agents with guardrails",
      href: "/ai-showcase",
    },
    cloudEngineering: {
      title: "Cloud Engineering",
      subtitle: "Static-first · API-ready",
      href: "/technology",
    },
    metrics: {
      title: "Readiness signals",
      href: "/getpandit",
      footer: "Enterprise-grade foundation in place",
      items: [
        { label: "Platform", level: "high" as const },
        { label: "Integrations", level: "high" as const },
        { label: "Security", level: "high" as const },
      ],
    },
  },
  companyLabel: companyName,
} as const;
