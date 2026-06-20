import { brandName, flagshipProductName } from "@/config/site-values";
import type {
  DeveloperNavSection,
  DeveloperReadinessStatus,
  DeveloperSection,
} from "@/types/developers";

export const developersPageCopy = {
  hero: {
    eyebrow: "Developers",
    title: "API & developer ecosystem vision",
    description: `How ${brandName} thinks about public APIs, partner integrations, and ${flagshipProductName} connectivity — honest readiness only. No live developer portal or API keys on this corporate site.`,
  },
  disclaimer:
    "This page describes future direction, not shipped endpoints. The marketing site does not host API sandboxes, publish OpenAPI files, or display credentials. Integration work is scoped per engagement until a formal developer program launches.",
  footnote:
    "Interested in early access or co-design? Contact us with your use case — we respond manually; there is no self-serve API signup.",
  relatedLinks: [
    { label: "Technology excellence", href: "/technology" },
    { label: "Innovation Lab", href: "/innovation-lab" },
    { label: "Partners", href: "/partners" },
    { label: "GetPandit product", href: "/getpandit" },
    { label: "System status", href: "/status" },
  ],
  closingCta: {
    title: "Building an integration?",
    description:
      "Share your architecture, auth model, and timeline. We will confirm what is live on product domains versus roadmap.",
    primaryLabel: "Technology partners",
    primaryHref: "/partners?interest=technology",
    secondaryLabel: "Book consultation",
    secondaryHref: "/book-consultation",
  },
} as const;

export const developerReadinessLabels: Record<DeveloperReadinessStatus, string> = {
  vision: "Vision",
  planned: "Planned",
  "coming-soon": "Coming soon",
  "in-design": "In design",
};

export const developerNavSections: readonly DeveloperNavSection[] = [
  { id: "api-vision", title: "API vision" },
  { id: "coming-soon-apis", title: "Coming soon APIs" },
  { id: "getpandit-integrations", title: "GetPandit integrations" },
  { id: "webhooks-planned", title: "Webhooks" },
  { id: "documentation-planned", title: "Documentation" },
] as const;

export const developerSections: readonly DeveloperSection[] = [
  {
    id: "api-vision",
    eyebrow: "Direction",
    title: "API vision",
    description: `A partner-friendly API layer across ${brandName} products and services — designed for temples, vendors, enterprises, and technology allies in India.`,
    summary: `${brandName} is building toward a consistent developer experience: versioned REST APIs, signed webhooks, clear sandbox boundaries, and separation between the corporate marketing site and product domains such as getpandit.com. Today this is a vision document — not a live gateway.`,
    principles: [
      "Product APIs live on product domains; nexynthlabs.com remains marketing, leads, and admin CMS only",
      "OAuth-style partner credentials and scoped API keys — never embedded in public pages",
      "Webhook signatures, idempotency keys, and retry policies documented before GA",
      "India-ready integrations: payments, SMS, WhatsApp — with compliance awareness per provider",
      "Human review for partner onboarding until self-serve portals ship",
      "OpenAPI specs published only when endpoints are stable and supported",
    ],
  },
  {
    id: "coming-soon-apis",
    eyebrow: "Roadmap",
    title: "Coming soon APIs",
    description:
      "Illustrative API families under consideration. Names and scopes may change; nothing below is callable from this site.",
    items: [
      {
        id: "partner-directory-api",
        title: "Partner directory API",
        status: "coming-soon",
        description:
          "Read-only partner and temple metadata for approved integrators — eligibility flags, regions, and integration readiness labels.",
        highlights: [
          "Pagination and ETag caching",
          "No PII without partner consent",
          "Sandbox with synthetic fixtures",
        ],
      },
      {
        id: "lead-status-api",
        title: "Lead status API",
        status: "planned",
        description:
          "Optional webhook callbacks for enterprise customers who submit RFPs or consultations — status transitions only, not full CRM.",
        highlights: [
          "HMAC-signed delivery",
          "Staff-approved partners only",
          "Corporate site lead store — not GetPandit bookings",
        ],
      },
      {
        id: "ai-readiness-export",
        title: "AI readiness export API",
        status: "in-design",
        description:
          "Structured export of self-assessment tiers for teams that complete the AI Readiness Score — indicative only, not certification.",
        highlights: [
          "User-consented export",
          "No model inference on marketing domain",
          "PDF/email handoff before JSON API",
        ],
      },
      {
        id: "events-rsvp-api",
        title: "Events RSVP API",
        status: "planned",
        description:
          "Programmatic RSVP for webinars and meetups once ticketing moves beyond enquiry-only registration.",
        highlights: [
          "Waitlist and capacity flags",
          "Calendar ICS generation",
          "Anti-abuse rate limits",
        ],
      },
    ],
  },
  {
    id: "getpandit-integrations",
    eyebrow: flagshipProductName,
    title: "GetPandit integrations",
    description: `Partner and vendor connectivity for ${flagshipProductName} on getpandit.com — separate from the corporate site. Capabilities follow product roadmap; confirm live status on the product domain.`,
    items: [
      {
        id: "booking-availability",
        title: "Booking & availability",
        status: "coming-soon",
        description:
          "Expose pandit calendars, service catalogues, and slot holds for temple and vendor partners with conflict detection.",
        highlights: [
          "Timezone-aware scheduling",
          "Service-type metadata",
          "Partner-scoped credentials",
        ],
        cta: { label: "GetPandit overview", href: "/getpandit" },
      },
      {
        id: "payments-reconciliation",
        title: "Payments & reconciliation",
        status: "planned",
        description:
          "Payment gateway webhooks and settlement exports — architecture-ready; production cutover confirmed per product release notes only.",
        highlights: [
          "Idempotent payment events",
          "Refund and dispute hooks",
          "No card data on marketing site",
        ],
      },
      {
        id: "notifications-messaging",
        title: "Notifications (SMS & WhatsApp)",
        status: "planned",
        description:
          "Transactional templates for booking confirmations and reminders — provider-specific (Twilio, Gupshup, Meta Cloud API).",
        highlights: [
          "Template approval workflow",
          "Delivery receipt webhooks",
          "Corporate click-to-chat stays separate",
        ],
        cta: { label: "WhatsApp guide (docs)", href: "/resources" },
      },
      {
        id: "temple-vendor-onboarding",
        title: "Temple & vendor onboarding",
        status: "in-design",
        description:
          "Document upload, eligibility review, and integration checklist for partners joining the marketplace model.",
        highlights: [
          "Staff review before API access",
          "Partner portal readiness alignment",
          "Honest readiness labels on listings",
        ],
        cta: { label: "Partner portal", href: "/partners/portal" },
      },
    ],
  },
  {
    id: "webhooks-planned",
    eyebrow: "Events",
    title: "Webhooks (planned)",
    description:
      "Event types we intend to support for integrators. Payload schemas and signing secrets ship with documentation — not before.",
    items: [
      {
        id: "webhook-booking-created",
        title: "booking.created",
        status: "planned",
        description: `Fired when a ${flagshipProductName} booking is confirmed on the product domain — includes booking ID, service type, and partner reference.`,
        highlights: [
          "Signed payload (HMAC-SHA256)",
          "Retry with exponential backoff",
          "Dead-letter queue for failures",
        ],
      },
      {
        id: "webhook-booking-cancelled",
        title: "booking.cancelled",
        status: "planned",
        description: "Cancellation and reschedule events with reason codes for partner dashboards.",
        highlights: [
          "Idempotency-Key header support",
          "Audit trail correlation ID",
          "Sandbox fixtures for testing",
        ],
      },
      {
        id: "webhook-payment-completed",
        title: "payment.completed",
        status: "coming-soon",
        description:
          "Payment success signal for reconciliation — amount, currency, and gateway reference only; no PAN or full card numbers.",
        highlights: [
          "PCI scope minimized",
          "Provider-specific metadata bag",
          "Manual replay in admin until tooling ships",
        ],
      },
      {
        id: "webhook-partner-approved",
        title: "partner.approved",
        status: "in-design",
        description:
          "Corporate partner onboarding milestone — triggers when staff approves a technology or temple partner application.",
        highlights: [
          "Corporate site only",
          "No automatic API key issuance",
          "Email fallback until portal ships",
        ],
      },
    ],
  },
  {
    id: "documentation-planned",
    eyebrow: "Docs",
    title: "Documentation (planned)",
    description:
      "Developer portal deliverables on the roadmap. Until then, use enquiry and consultation for integration questions.",
    items: [
      {
        id: "docs-openapi",
        title: "OpenAPI specifications",
        status: "planned",
        description:
          "Versioned OpenAPI 3.1 bundles per API family — published when endpoints reach beta with breaking-change policy.",
        highlights: [
          "Semantic versioning",
          "Changelog per release",
          "No specs for unimplemented routes",
        ],
      },
      {
        id: "docs-auth-guide",
        title: "Authentication guide",
        status: "planned",
        description:
          "Client credentials, rotating secrets, IP allowlists, and scoped tokens for server-to-server integrations.",
        highlights: [
          "No API keys in browser bundles",
          "Rotation runbooks",
          "Separate sandboxes per partner",
        ],
      },
      {
        id: "docs-webhook-playbook",
        title: "Webhook verification playbook",
        status: "coming-soon",
        description:
          "Step-by-step signature verification, clock skew tolerance, and sample handlers in TypeScript and Python.",
        highlights: [
          "ngrok-friendly local testing",
          "Replay attack mitigation",
          "Sample payloads only — no live secrets",
        ],
      },
      {
        id: "docs-sandbox",
        title: "Sandbox environment",
        status: "vision",
        description:
          "Isolated sandbox with synthetic data, rate limits, and no production PII — launched after auth and webhook baselines.",
        highlights: [
          "Request access via partners enquiry",
          "No public signup on marketing site",
          "Status page linkage when live",
        ],
        cta: { label: "System status", href: "/status" },
      },
    ],
  },
] as const;
