export const homeMarketplaceIntelligenceCopy = {
  id: "marketplace-intelligence",
  eyebrow: "Marketplace intelligence",
  title: "Five-sided networks, one intelligence layer",
  description:
    "Nexynth builds marketplace platforms where customers, pandits, vendors, agents, and admins share discovery, booking, payments, scheduling, and support — orchestrated through a single product core.",
  actors: [
    { id: "customers", label: "Customers" },
    { id: "pandits", label: "Pandits" },
    { id: "vendors", label: "Vendors" },
    { id: "agents", label: "Agents" },
    { id: "admins", label: "Admins" },
  ],
  connections: [
    { id: "discovery", label: "Discovery" },
    { id: "booking", label: "Booking" },
    { id: "payments", label: "Payments" },
    { id: "scheduling", label: "Scheduling" },
    { id: "support", label: "Support" },
  ],
  capabilities: [
    "Unified discovery and catalog flows",
    "Booking and scheduling in sync",
    "Payment-ready architecture",
    "Operations and support tooling",
  ],
  cta: {
    label: "See GetPandit marketplace",
    href: "/getpandit",
  },
} as const;

/** Actor ↔ connection map — deterministic, no runtime generation. */
export const MARKETPLACE_ACTOR_LINKS: Record<
  (typeof homeMarketplaceIntelligenceCopy.connections)[number]["id"],
  readonly (typeof homeMarketplaceIntelligenceCopy.actors)[number]["id"][]
> = {
  discovery: ["customers", "pandits"],
  booking: ["customers", "pandits", "vendors", "agents"],
  payments: ["customers", "vendors", "admins"],
  scheduling: ["customers", "pandits", "agents"],
  support: ["customers", "admins", "agents"],
};

export const MARKETPLACE_LAYOUT = {
  viewBox: { width: 900, height: 560 },
  hub: { x: 450, y: 280, r: 36 },
  actors: [
    { id: "customers", x: 450, y: 58 },
    { id: "pandits", x: 730, y: 175 },
    { id: "vendors", x: 655, y: 455 },
    { id: "admins", x: 245, y: 455 },
    { id: "agents", x: 170, y: 175 },
  ],
  connections: [
    { id: "discovery", x: 450, y: 165 },
    { id: "booking", x: 575, y: 255 },
    { id: "payments", x: 535, y: 385 },
    { id: "scheduling", x: 365, y: 385 },
    { id: "support", x: 325, y: 255 },
  ],
} as const;
