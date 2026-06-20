import type { StoryVisualDefinition } from "@/types/visual-storytelling";

export const homeVisualStorytellingCopy = {
  eyebrow: "Visual storytelling",
  title: "See how Nexynth systems connect",
  description:
    "Interactive diagram for our flagship product — hover nodes to trace journeys without reading walls of text.",
} as const;

export const getPanditEcosystemStory: StoryVisualDefinition = {
  id: "getpandit-ecosystem",
  theme: "getpandit",
  eyebrow: "GetPandit ecosystem",
  title: "The Digital Spiritual Ecosystem",
  description:
    "Connecting families, pandits, vendors, and ceremonies through one intelligent platform.",
  nodes: [
    { id: "hub", label: "GetPandit", x: 450, y: 235, accent: "violet", ring: "primary" },
    { id: "user", label: "Family", x: 95, y: 235, accent: "cyan", ring: "primary" },
    { id: "search", label: "Search", x: 195, y: 115, accent: "blue", ring: "primary" },
    { id: "compare", label: "Compare", x: 330, y: 72, accent: "blue", ring: "primary" },
    { id: "book", label: "Book", x: 450, y: 58, accent: "violet", ring: "primary" },
    { id: "pandit", label: "Pandit", x: 600, y: 115, accent: "cyan", ring: "primary" },
    { id: "ceremony", label: "Ceremony", shortLabel: "Done", x: 760, y: 235, accent: "gold", ring: "primary" },
    { id: "astrology", label: "Astrology", x: 270, y: 365, accent: "blue", ring: "secondary" },
    { id: "pooja", label: "Pooja", x: 450, y: 390, accent: "violet", ring: "secondary" },
    { id: "vendors", label: "Vendors", x: 630, y: 365, accent: "cyan", ring: "secondary" },
    { id: "support", label: "Support", x: 130, y: 365, accent: "blue", ring: "secondary" },
    { id: "notify", label: "Alerts", x: 735, y: 125, accent: "cyan", ring: "secondary" },
  ],
  edges: [
    { id: "e1", from: "user", to: "search", primary: true },
    { id: "e2", from: "search", to: "compare", primary: true },
    { id: "e3", from: "compare", to: "book", primary: true },
    { id: "e4", from: "book", to: "pandit", primary: true },
    { id: "e5", from: "pandit", to: "ceremony", primary: true },
    { id: "e6", from: "hub", to: "search" },
    { id: "e7", from: "hub", to: "book" },
    { id: "e8", from: "hub", to: "pandit" },
    { id: "e9", from: "hub", to: "astrology" },
    { id: "e10", from: "hub", to: "pooja" },
    { id: "e11", from: "hub", to: "vendors" },
    { id: "e12", from: "hub", to: "support" },
    { id: "e13", from: "hub", to: "notify" },
    { id: "e14", from: "user", to: "hub" },
    { id: "e15", from: "ceremony", to: "hub" },
  ],
};

export const homeVisualStories: readonly StoryVisualDefinition[] = [
  getPanditEcosystemStory,
] as const;
