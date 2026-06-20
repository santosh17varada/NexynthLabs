export const homeDeliveryJourneyCopy = {
  id: "delivery-journey",
  eyebrow: "How we deliver",
  title: "From idea to production systems",
  description:
    "Nexynth partners through discovery, design, engineering, AI integration, launch, and scale — turning concepts into live products with honest milestones at every step.",
  stages: [
    {
      id: "discover",
      label: "Discover",
      outcome: "Validate the problem and define a shippable scope before production code.",
      icon: "discover" as const,
      accent: "cyan" as const,
    },
    {
      id: "design",
      label: "Design",
      outcome: "Shape UX, flows, and architecture spikes that prove the experience early.",
      icon: "design" as const,
      accent: "blue" as const,
    },
    {
      id: "build",
      label: "Build",
      outcome: "Ship typed APIs, CI/CD, and foundations that scale without surprise ops debt.",
      icon: "build" as const,
      accent: "violet" as const,
    },
    {
      id: "ai-integration",
      label: "AI Integration",
      outcome: "Embed agents, automation, and intelligent workflows into production paths.",
      icon: "ai" as const,
      accent: "gold" as const,
    },
    {
      id: "launch",
      label: "Launch",
      outcome: "Go live on product domains with monitoring, security, and clear ownership.",
      icon: "launch" as const,
      accent: "cyan" as const,
    },
    {
      id: "scale",
      label: "Scale",
      outcome: "Expand integrations, supply, and operations with metrics-driven iteration.",
      icon: "scale" as const,
      accent: "blue" as const,
    },
  ],
  outcomes: [
    "Honest readiness labels — not launch theatre",
    "AI-native integration built into delivery, not bolted on",
    "Product domains own go-live; corporate site explains",
  ],
  cta: {
    label: "Book a consultation",
    href: "/book-consultation",
  },
} as const;

/** Fixed SVG layout — six stages, deterministic for SSR and client. */
export const DELIVERY_JOURNEY_LAYOUT = {
  viewBox: { width: 960, height: 220 },
  trackY: 88,
  nodeY: 88,
  nodeRadius: 30,
  stages: [
    { id: "discover", x: 72 },
    { id: "design", x: 216 },
    { id: "build", x: 360 },
    { id: "ai-integration", x: 504 },
    { id: "launch", x: 648 },
    { id: "scale", x: 792 },
  ],
} as const;
