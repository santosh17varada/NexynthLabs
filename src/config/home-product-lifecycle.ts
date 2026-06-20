export const homeProductLifecycleCopy = {
  id: "product-lifecycle",
  eyebrow: "Product lifecycle",
  title: "From idea to scale",
  description:
    "Nexynth partners from first discovery through design, build, launch, and scale — honest milestones at every stage instead of launch theatre.",
  stages: [
    {
      id: "discover",
      label: "Discover",
      description:
        "Validate the problem space with partner conversations, research, and honest readiness labels before writing production code.",
      icon: "discover" as const,
      accent: "cyan" as const,
    },
    {
      id: "design",
      label: "Design",
      description:
        "Shape flows, UX, and architecture spikes — interactive prototypes that prove the experience before the full build.",
      icon: "design" as const,
      accent: "blue" as const,
    },
    {
      id: "build",
      label: "Build",
      description:
        "Ship with typed APIs, CI/CD, and config-driven content — production foundations that scale without surprise ops debt.",
      icon: "build" as const,
      accent: "violet" as const,
    },
    {
      id: "launch",
      label: "Launch",
      description:
        "Go live on product domains with monitoring, security baselines, and clear ownership — not a one-day marketing event.",
      icon: "launch" as const,
      accent: "gold" as const,
    },
    {
      id: "scale",
      label: "Scale",
      description:
        "Expand supply, integrations, and multi-city patterns with metrics-driven iteration and partner-ready operations.",
      icon: "scale" as const,
      accent: "cyan" as const,
    },
  ],
  principles: [
    "Honest readiness labels at every milestone",
    "Product domains own delivery — corporate site explains",
    "Iterate with signals, not vanity launches",
  ],
  cta: {
    label: "View case studies",
    href: "/case-studies",
  },
} as const;

/** Fixed SVG layout — deterministic for SSR and client. */
export const PRODUCT_LIFECYCLE_LAYOUT = {
  viewBox: { width: 840, height: 220 },
  trackY: 88,
  nodeY: 88,
  nodeRadius: 34,
  stages: [
    { id: "discover", x: 84 },
    { id: "design", x: 252 },
    { id: "build", x: 420 },
    { id: "launch", x: 588 },
    { id: "scale", x: 756 },
  ],
} as const;
