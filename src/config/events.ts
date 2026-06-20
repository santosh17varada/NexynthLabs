import { address, brandName, flagshipProductName } from "@/config/site-values";
import { bookConsultationHref } from "@/config/book-consultation";
import type { EventSection, EventStatus } from "@/types/events";

export const eventStatusLabels: Record<EventStatus, string> = {
  upcoming: "Upcoming",
  completed: "Completed",
  planned: "Planned",
};

export const eventStatusDescriptions: Record<EventStatus, string> = {
  upcoming: "Scheduled with a published date — registration via enquiry until ticketing ships",
  completed: "Session or launch concluded — recordings or summaries when available",
  planned: "On the roadmap — date and format subject to confirmation",
};

export const eventsPageCopy = {
  hero: {
    eyebrow: "Events & webinars",
    title: "Meetups, webinars, and launches",
    description: `${brandName} publishes events honestly — upcoming, planned, and completed sessions across partners, products, and AI. No fabricated attendance or live-stream claims.`,
  },
  disclaimer:
    "Event listings are config-maintained on this marketing site — not a live ticketing platform. Upcoming items may link to enquiry or consultation until registration backends are connected.",
  footnote: "Edit sections in src/config/events.ts — no automatic calendar sync yet.",
  closingCta: {
    title: "Host or sponsor a session with us?",
    description:
      "Temple partners, enterprises, and community groups can propose webinars or launch moments — we confirm dates manually.",
    primary: { label: "Book free consultation", href: bookConsultationHref() },
    secondary: { label: "Partner enquiry", href: "/partners" },
  },
} as const;

export const eventSections: readonly EventSection[] = [
  {
    id: "upcoming-events",
    eyebrow: "Calendar",
    title: "Upcoming Events",
    description:
      "Confirmed or scheduled sessions with published dates — register interest via contact or consultation until dedicated signup ships.",
    items: [
      {
        id: "hyderabad-partner-meetup",
        title: "Hyderabad partner & product meetup",
        status: "upcoming",
        schedule: "Q3 2026 · Evening · Hyderabad",
        format: "In-person · Partner roundtable",
        description: `Informal meetup for temple, vendor, and technology partners near ${address.city} — product roadmap Q&A and ${flagshipProductName} ecosystem updates.`,
        highlights: [
          "Limited seats — enquiry required",
          "No paid ticket portal on nexynthlabs.com",
          "Slides shared with attendees after the session",
        ],
        cta: { label: "Request an invite", href: "/partners#partner-form" },
      },
      {
        id: "virtual-office-hours",
        title: "Virtual office hours — engineering & AI",
        status: "upcoming",
        schedule: "Monthly · 45 minutes · Video call",
        format: "Online · Open Q&A",
        description:
          "Monthly office hours for prospects and partners to ask integration, AI readiness, and delivery questions — not a sales webinar.",
        highlights: [
          "Rotating topics: AI, web/mobile, cloud",
          "Manual calendar invite after enquiry",
          "No recording unless announced in advance",
        ],
        cta: { label: "Book consultation", href: bookConsultationHref() },
      },
    ],
  },
  {
    id: "webinars",
    eyebrow: "Webinars",
    title: "Webinars",
    description:
      "Topic-led online sessions — registration via enquiry or external link when listed.",
    items: [
      {
        id: "ai-automation-ops-webinar",
        title: "Practical AI automation for operations teams",
        status: "planned",
        schedule: "Planned H2 2026",
        format: "Live webinar · 60 minutes",
        description:
          "Walkthrough of human-in-the-loop automation patterns — guardrails, evals, and when not to deploy agents in production.",
        highlights: [
          "Based on AI Showcase and readiness materials",
          "No vendor certification claims",
          "Q&A with engineering leads",
        ],
        cta: { label: "AI consultation", href: bookConsultationHref("ai") },
      },
      {
        id: "config-driven-content-webinar",
        title: "Config-driven content for fast marketing sites",
        status: "planned",
        schedule: "Planned 2026",
        format: "Live webinar · 45 minutes",
        description:
          "How static-first Next.js sites ship Phase 3 features without a public CMS — patterns used on this corporate site.",
        highlights: [
          "SEO, sitemap, and honesty labels",
          "Separation from product domains",
          "Developer-focused examples",
        ],
        cta: { label: "Discuss a similar build", href: "/request-proposal" },
      },
    ],
  },
  {
    id: "product-launches",
    eyebrow: "Launches",
    title: "Product Launches",
    description: `Milestones on ${flagshipProductName} and the ${brandName} product line — live products on their own domains.`,
    items: [
      {
        id: "getpandit-public-booking",
        title: `${flagshipProductName} public booking journey`,
        status: "completed",
        schedule: "Live on getpandit.com",
        format: "Product launch · Ongoing",
        description:
          "Core pandit discovery and pooja booking on the dedicated product domain — corporate site links externally only.",
        highlights: [
          "Live product domain",
          "Independent release cadence",
          "Case study on nexynthlabs.com",
        ],
        cta: {
          label: `Visit ${flagshipProductName}`,
          href: "https://getpandit.com",
          external: true,
        },
      },
      {
        id: "product-ecosystem-page",
        title: "Product ecosystem page",
        status: "completed",
        schedule: "2026 · Corporate site",
        format: "Marketing launch",
        description:
          "Public product line with Live / In Progress / Planned / Coming Soon labels — honest readiness communication.",
        highlights: [
          "Route: /products/ecosystem",
          "No false SKU claims",
          "Config-driven cards",
        ],
        cta: { label: "View ecosystem", href: "/products/ecosystem" },
      },
      {
        id: "temple-partner-portal-preview",
        title: "Temple partner portal readiness",
        status: "planned",
        schedule: "Planned 2026",
        format: "Partner preview · Enquiry-only today",
        description:
          "Self-service temple onboarding preview — public login not claimed until product confirms cutover.",
        highlights: [
          "Partner Portal page live as readiness",
          "Manual onboarding until auth ships",
          "Enquiry-led today",
        ],
        cta: { label: "Partner Portal", href: "/partners/portal" },
      },
    ],
  },
  {
    id: "ai-sessions",
    eyebrow: "AI",
    title: "AI Sessions",
    description:
      "Workshops and walkthroughs for AI readiness, agents, and automation — always with human oversight messaging.",
    items: [
      {
        id: "ai-readiness-walkthrough",
        title: "AI Readiness Score walkthrough",
        status: "upcoming",
        schedule: "On request · 30 minutes",
        format: "Guided session · Online",
        description:
          "Live tour of the public AI Readiness Score and how teams use tier results before paid discovery — not a certification program.",
        highlights: [
          "Uses /ai-readiness-score tool",
          "Indicative tiers only",
          "Optional lead capture explained",
        ],
        cta: { label: "Try the score", href: "/ai-readiness-score" },
      },
      {
        id: "agent-guardrails-workshop",
        title: "Agent guardrails workshop",
        status: "planned",
        schedule: "Planned 2026",
        format: "Workshop · Half day",
        description:
          "Hands-on patterns for tool boundaries, human approval, and eval datasets — aligned with public guides content.",
        highlights: [
          "Concept and checklist focus",
          "No live agent APIs on marketing site",
          "Enterprise enquiry for private delivery",
        ],
        cta: { label: "AI Showcase", href: "/ai-showcase" },
      },
    ],
  },
  {
    id: "past-events",
    eyebrow: "Archive",
    title: "Past Events",
    description:
      "Completed sessions and milestones — summaries or recordings linked only when explicitly available.",
    items: [
      {
        id: "phase-3-site-launch",
        title: "Corporate site Phase 3 feature wave",
        status: "completed",
        schedule: "2026",
        format: "Internal + public changelog",
        description:
          "Rollout of technology, innovation lab, partner portal readiness, AI readiness, and knowledge center routes on nexynthlabs.com.",
        highlights: [
          "Documented in public roadmap",
          "Static-first deployment",
          "No user-count launch claims",
        ],
        cta: { label: "Public roadmap", href: "/roadmap" },
      },
      {
        id: "innovation-lab-publish",
        title: "Innovation Lab public catalog",
        status: "completed",
        schedule: "2026",
        format: "Content launch",
        description:
          "Published R&D sections with Concept / Prototype / Planned / Live labels — illustrative, not a product catalog.",
        highlights: [
          "Route: /innovation-lab",
          "Honest status legend",
          "No experiment APIs on marketing domain",
        ],
        cta: { label: "Innovation Lab", href: "/innovation-lab" },
      },
    ],
  },
] as const;

export function getEventItemCounts(): Record<EventStatus, number> {
  const counts: Record<EventStatus, number> = {
    upcoming: 0,
    completed: 0,
    planned: 0,
  };

  for (const section of eventSections) {
    for (const item of section.items) {
      counts[item.status] += 1;
    }
  }

  return counts;
}

export function getEventItemTotal(): number {
  return eventSections.reduce((sum, section) => sum + section.items.length, 0);
}
