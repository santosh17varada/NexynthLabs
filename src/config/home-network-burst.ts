export const homeNetworkBurstCopy = {
  id: "ai-network",
  badge: "Our ecosystem",
  headline: "Building Connected Digital Products, Platforms & AI Systems",
  description:
    "Nexynth Labs connects AI Agents, Enterprise Systems, Cloud Infrastructure, Mobile Applications and Industry Products into one intelligent ecosystem.",
} as const;

export type HomeEcosystemCapability = {
  id: string;
  title: string;
  value: string;
  href: string;
};

export const homeEcosystemCapabilities: readonly HomeEcosystemCapability[] = [
  {
    id: "ai-agents",
    title: "AI Agents",
    value: "Intelligent workflows that automate decisions and scale operations.",
    href: "/ai",
  },
  {
    id: "cloud",
    title: "Cloud Engineering",
    value: "Secure, scalable infrastructure built for product growth.",
    href: "/engineering",
  },
  {
    id: "enterprise",
    title: "Enterprise Systems",
    value: "Integrations and data layers that connect the business.",
    href: "/services",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    value: "Native experiences customers rely on every day.",
    href: "/products",
  },
  {
    id: "digital-products",
    title: "Digital Products",
    value: "Industry platforms like GetPandit, shipped and scaled.",
    href: "/getpandit",
  },
] as const;
