import {
  getFlagshipProduct,
  siteConfig,
} from "@/config/site";

const flagship = getFlagshipProduct();

export const aboutContent = {
  hero: {
    badge: "About Nexynth Labs",
    title: "Building AI-native products with engineering discipline",
    description:
      "Nexynth Labs is an AI-native product company building platforms, automation systems, and digital products that help businesses launch, operate, and scale.",
  },
  story: {
    title: "Our story",
    paragraphs: [
      `${siteConfig.brandName} started in ${siteConfig.address.city} with a simple premise: technology in devotional and family contexts should feel clear, respectful, and dependable.`,
      `We built ${flagship.name} first — a live marketplace for pandit discovery and pooja booking on its own domain, so product releases never compete with corporate marketing stability.`,
      "Today we partner with teams that need product engineering, design, and platform work — with the same standards we hold ourselves to.",
    ],
  },
  values: [
    {
      title: "Ship real products",
      description:
        "We build software people use — not demos that only work in pitch decks.",
    },
    {
      title: "Trust by default",
      description:
        "Transparency, reliability, and thoughtful UX in every release.",
    },
    {
      title: "Think in years",
      description:
        "Architecture and content systems designed to outlast the next funding round.",
    },
  ],
  stats: [
    { label: "Headquarters", value: siteConfig.copy.headquarters },
    { label: "Flagship product", value: flagship.name },
    { label: "Focus", value: "Product & platform" },
  ],
} as const;
