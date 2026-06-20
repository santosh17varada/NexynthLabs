import { brandName } from "@/config/site-values";
import { bookConsultationHref } from "@/config/book-consultation";
import { homeTechStackItems } from "@/config/home-tech-stack";

export type EngineeringDiagramVariant =
  | "hero-stack"
  | "philosophy"
  | "cloud"
  | "backend"
  | "api"
  | "marketplace"
  | "mobile"
  | "security"
  | "scalability"
  | "observability"
  | "cicd"
  | "infrastructure";

export type EngineeringHighlight = {
  id: string;
  title: string;
  description: string;
};

export type EngineeringPillar = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: readonly string[];
  highlights: readonly EngineeringHighlight[];
  diagram: EngineeringDiagramVariant;
  cta?: { label: string; href: string };
};

export const engineeringExcellenceCopy = {
  hero: {
    eyebrow: "Engineering",
    title: "Platforms built to ship — and maintain",
    description: `${brandName} designs cloud-native systems, APIs, and mobile experiences with clear boundaries, honest readiness labels, and operational discipline.`,
    primaryCta: { label: "Book engineering consultation", href: bookConsultationHref() },
    secondaryCta: { label: "View technology page", href: "/technology" },
    tertiaryCta: { label: "AI engineering", href: "/ai" },
  },
  philosophy: {
    eyebrow: "Architecture philosophy",
    title: "Static-first, API-ready, domain-separated",
    description:
      "We favor boring, observable foundations over novelty. Marketing sites stay fast and decoupled; product domains own auth, booking, and payments; services expose clear contracts.",
    principles: [
      {
        id: "boundaries",
        step: "01",
        title: "Clear domain boundaries",
        description:
          "Corporate marketing, product apps, and admin tooling release independently — fewer coupling incidents and safer rollouts.",
      },
      {
        id: "contracts",
        step: "02",
        title: "Contracts before code",
        description:
          "API shapes, event names, and integration readiness are documented before clients depend on them.",
      },
      {
        id: "operate",
        step: "03",
        title: "Built to operate",
        description:
          "Logging, health checks, and deployment paths are part of architecture — not a post-launch afterthought.",
      },
    ],
    diagram: "philosophy" as const,
  },
  pillars: [
    {
      id: "cloud-engineering",
      eyebrow: "Cloud engineering",
      title: "Cloud-native delivery on AWS and edge layers",
      description:
        "Hosting, networking, and environment separation designed for static marketing sites, APIs, and product workloads — with paths to scale without re-architecting everything.",
      bullets: [
        "Environment separation (dev, staging, production)",
        "Static-first public sites with CDN-friendly assets",
        "Compute patterns for APIs and background jobs",
        "Secrets and config via environment — not source control",
      ],
      highlights: [
        {
          id: "static-sites",
          title: "Static & SSR sites",
          description: "Next.js marketing and product surfaces with performance baselines.",
        },
        {
          id: "aws-patterns",
          title: "AWS patterns",
          description: "EC2, S3, and common managed services — scoped per engagement.",
        },
        {
          id: "edge-nginx",
          title: "Edge & Nginx",
          description: "Reverse proxy, TLS termination, and routing in front of app tiers.",
        },
      ],
      diagram: "cloud",
      cta: { label: "Discuss cloud architecture", href: "/contact?service=cloud-devops" },
    },
    {
      id: "backend-systems",
      eyebrow: "Backend systems",
      title: "Modular services with validation and integration seams",
      description:
        "TypeScript backends — typically NestJS — with structured modules for auth, webhooks, CRM hooks, and third-party providers suited to product and enterprise APIs.",
      bullets: [
        "Modular domain boundaries in service code",
        "DTO validation and auth guards",
        "Webhook and event ingestion patterns",
        "MongoDB and document models where fit-for-purpose",
      ],
      highlights: [
        {
          id: "nestjs-modules",
          title: "NestJS modules",
          description: "Controllers, services, and providers with testable seams.",
        },
        {
          id: "data-layer",
          title: "Data layer",
          description: "MongoDB schemas, indexes, and migration discipline.",
        },
        {
          id: "background-jobs",
          title: "Background work",
          description: "Queues and schedulers for async processing when required.",
        },
      ],
      diagram: "backend",
      cta: { label: "Plan backend delivery", href: bookConsultationHref() },
    },
    {
      id: "api-design",
      eyebrow: "API design",
      title: "RESTful APIs with explicit versioning and errors",
      description:
        "Predictable endpoints, consistent error shapes, and integration documentation — so web, mobile, and partner systems integrate without tribal knowledge.",
      bullets: [
        "Versioned REST and webhook contracts",
        "Consistent error and pagination patterns",
        "OpenAPI-ready documentation habits",
        "Rate limits and auth for partner access",
      ],
      highlights: [
        {
          id: "rest-contracts",
          title: "REST contracts",
          description: "Resource-oriented paths with stable response envelopes.",
        },
        {
          id: "webhooks",
          title: "Webhooks",
          description: "Signed callbacks for booking, CRM, and ops automations.",
        },
        {
          id: "partner-apis",
          title: "Partner APIs",
          description: "Scoped keys and audit trails for external integrators.",
        },
      ],
      diagram: "api",
      cta: { label: "Review API design", href: "/developers" },
    },
    {
      id: "marketplace-architecture",
      eyebrow: "Marketplace architecture",
      title: "Two-sided platforms with supply, demand, and trust layers",
      description:
        "Patterns from marketplace products like GetPandit — discovery, listings, booking state machines, partner onboarding, and honest readiness for payments and messaging.",
      bullets: [
        "Listings, profiles, and catalog models",
        "Booking and status state machines",
        "Partner onboarding and verification hooks",
        "Payment and notification integration readiness",
      ],
      highlights: [
        {
          id: "discovery",
          title: "Discovery layer",
          description: "Search, filters, and structured service catalogs.",
        },
        {
          id: "booking-core",
          title: "Booking core",
          description: "Calendar-aware scheduling with clear status transitions.",
        },
        {
          id: "trust-signals",
          title: "Trust signals",
          description: "Verification checkpoints without fake social proof metrics.",
        },
      ],
      diagram: "marketplace",
      cta: { label: "Explore GetPandit architecture", href: "/getpandit" },
    },
    {
      id: "mobile-architecture",
      eyebrow: "Mobile architecture",
      title: "Mobile apps aligned with shared APIs and design tokens",
      description:
        "React Native experiences that reuse TypeScript models and API contracts — native performance where it matters, shared logic where it reduces duplication.",
      bullets: [
        "Shared types between web and mobile clients",
        "Mobile-first layouts and accessibility baselines",
        "Secure token storage patterns",
        "Store release and OTA update readiness",
      ],
      highlights: [
        {
          id: "react-native",
          title: "React Native",
          description: "Cross-platform UI with platform-specific polish where needed.",
        },
        {
          id: "offline",
          title: "Offline-friendly flows",
          description: "Graceful degradation when connectivity is limited.",
        },
        {
          id: "push",
          title: "Push & deep links",
          description: "Notification hooks tied to booking and account events.",
        },
      ],
      diagram: "mobile",
      cta: { label: "Plan mobile delivery", href: "/contact?service=product-engineering" },
    },
    {
      id: "security",
      eyebrow: "Security",
      title: "Security practices described honestly — not as certifications",
      description:
        "HTTPS, access control, environment separation, and payment-security architecture — readiness statements for corporate and product stacks, not unverified compliance badges.",
      bullets: [
        "TLS for public endpoints and product domains",
        "Role-based access for admin and internal tools",
        "Secrets outside repositories; least-privilege IAM patterns",
        "Payment data handled on product domains when live",
      ],
      highlights: [
        {
          id: "access-control",
          title: "Access control",
          description: "Staff-only admin routes; product auth on product domains.",
        },
        {
          id: "data-handling",
          title: "Data handling",
          description: "PII boundaries documented per service and integration.",
        },
        {
          id: "trust-center",
          title: "Trust documentation",
          description: "Corporate trust and security pages kept config-maintained.",
        },
      ],
      diagram: "security",
      cta: { label: "Security center", href: "/security" },
    },
    {
      id: "scalability",
      eyebrow: "Scalability",
      title: "Scale paths without premature complexity",
      description:
        "Start static and modular; add caching, queues, and horizontal scale when traffic and team maturity justify it — not on day one for every marketing site.",
      bullets: [
        "Static generation and CDN for read-heavy surfaces",
        "Stateless API tiers behind load balancers when needed",
        "Database indexing and query discipline first",
        "Async work offloaded to queues at measured thresholds",
      ],
      highlights: [
        {
          id: "read-scale",
          title: "Read-heavy scale",
          description: "CDN, caching headers, and asset optimization.",
        },
        {
          id: "write-scale",
          title: "Write path scale",
          description: "Partitioning and job queues when booking volume grows.",
        },
        {
          id: "capacity",
          title: "Capacity planning",
          description: "Honest load assumptions — no vanity uptime claims.",
        },
      ],
      diagram: "scalability",
    },
    {
      id: "observability",
      eyebrow: "Observability",
      title: "Logs, metrics, and traces teams can act on",
      description:
        "Structured logging, health endpoints, and error surfacing — so incidents are diagnosable without SSH archaeology. Not a claim of 24/7 SOC unless contracted.",
      bullets: [
        "Structured logs with request correlation",
        "Health and readiness endpoints for deploys",
        "Error tracking hooks for client and server",
        "Dashboards for ops — config-maintained status pages",
      ],
      highlights: [
        {
          id: "logging",
          title: "Structured logging",
          description: "JSON logs with levels and request IDs in API tiers.",
        },
        {
          id: "health",
          title: "Health checks",
          description: "Liveness/readiness for rolling deployments.",
        },
        {
          id: "status",
          title: "Status communication",
          description: "Public status placeholders until live monitoring ships.",
        },
      ],
      diagram: "observability",
      cta: { label: "System status", href: "/status" },
    },
    {
      id: "cicd",
      eyebrow: "CI/CD",
      title: "Pipelines that gate quality without blocking velocity",
      description:
        "Lint, typecheck, build, and deploy steps in CI — with preview environments where teams benefit. Hooks and checks run before merge, not only before production.",
      bullets: [
        "Lint and TypeScript in CI on every change",
        "Production builds verified before deploy",
        "Environment-specific deploy scripts",
        "Rollback paths documented per project",
      ],
      highlights: [
        {
          id: "quality-gates",
          title: "Quality gates",
          description: "ESLint, tsc, and build steps as merge prerequisites.",
        },
        {
          id: "deploy",
          title: "Deploy automation",
          description: "Scripted deploys with PM2 or container patterns.",
        },
        {
          id: "previews",
          title: "Preview readiness",
          description: "Staging environments for stakeholder review.",
        },
      ],
      diagram: "cicd",
    },
    {
      id: "infrastructure",
      eyebrow: "Infrastructure",
      title: "Infrastructure as disciplined operations",
      description:
        "Servers, process managers, reverse proxies, and backups — documented and repeatable. We describe IaC readiness without claiming every engagement uses Terraform on day one.",
      bullets: [
        "Nginx reverse proxy and TLS termination",
        "PM2 or container runtime for Node services",
        "Backup and restore runbooks",
        "IaC patterns when teams require reproducibility",
      ],
      highlights: [
        {
          id: "runtime",
          title: "Runtime ops",
          description: "Process supervision, restarts, and resource limits.",
        },
        {
          id: "networking",
          title: "Networking",
          description: "Firewall rules, private subnets, and bastion patterns.",
        },
        {
          id: "dr",
          title: "Backup & DR",
          description: "RPO/RTO targets agreed per engagement — not generic SLAs.",
        },
      ],
      diagram: "infrastructure",
      cta: { label: "Request proposal", href: "/request-proposal" },
    },
  ] satisfies readonly EngineeringPillar[],
  techStack: {
    eyebrow: "Technology stack",
    title: "Tools and patterns we deliver with",
    description:
      "Stack choices are confirmed per project. Listing a technology describes engineering capability — not that every engagement uses every tool simultaneously.",
    items: homeTechStackItems,
    footnote:
      "See /technology for capability-area detail. This page focuses on how we architect and operate systems.",
  },
  finalCta: {
    title: "Need engineering leadership on your next release?",
    description:
      "Share your architecture, integrations, and timeline. We will recommend a phased delivery plan with honest scope — no shelfware diagrams.",
    primary: { label: "Book free consultation", href: bookConsultationHref() },
    secondary: { label: "View services", href: "/services" },
  },
  disclaimer:
    "Engineering patterns on this page describe how Nexynth Labs approaches delivery — not certifications, uptime guarantees, or live monitoring unless explicitly contracted.",
} as const;

export function getEngineeringPillar(id: string) {
  return engineeringExcellenceCopy.pillars.find((pillar) => pillar.id === id);
}
