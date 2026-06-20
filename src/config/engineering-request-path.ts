/** Production request-path architecture — shown on /engineering, not homepage. */
export const engineeringRequestPathCopy = {
  id: "request-path",
  eyebrow: "Production architecture",
  title: "Request paths built for production",
  description:
    "Cloud-native architecture designed to scale from startup traffic to enterprise workloads — edge delivery, typed APIs, durable state, and observability by default.",
  layers: [
    {
      id: "user",
      label: "User",
      description: "Browser or mobile client",
      handles: "Nexynth designs accessible UX and performance budgets from the first screen.",
    },
    {
      id: "edge",
      label: "Edge / CDN",
      description: "Global edge delivery",
      handles: "TLS, cache rules, edge routing, and static asset delivery at scale.",
    },
    {
      id: "application",
      label: "Application Layer",
      description: "Next.js · SSR · static",
      handles: "Static-first Next.js, SSR where needed, and deterministic build pipelines.",
    },
    {
      id: "api",
      label: "API Layer",
      description: "Typed REST · NestJS",
      handles: "Typed APIs, validation, auth seams, and integration-ready service boundaries.",
    },
    {
      id: "database",
      label: "Database",
      description: "MongoDB · durable state",
      handles: "Schema design, indexing strategy, backups, and migration-safe data models.",
    },
    {
      id: "analytics",
      label: "Analytics & Monitoring",
      description: "Logs · metrics · alerts",
      handles: "Structured logging, health checks, and observability from edge to datastore.",
    },
  ],
  signals: [
    "HTTPS and environment separation by default",
    "Static-first with API-ready extension points",
    "Observable paths from edge to datastore",
  ],
} as const;

export const CLOUD_ARCHITECTURE_LAYOUT = {
  viewBox: { width: 720, height: 620 },
  centerX: 360,
  layers: [
    { id: "user", y: 52, width: 120, height: 44 },
    { id: "edge", y: 128, width: 280, height: 56 },
    { id: "application", y: 216, width: 320, height: 56 },
    { id: "api", y: 304, width: 300, height: 56 },
    { id: "database", y: 392, width: 280, height: 56 },
    { id: "analytics", y: 480, width: 340, height: 56 },
  ],
} as const;
