import { brandName, flagshipProductName } from "@/config/site-values";
import { getFlagshipProduct, getProductHostname } from "@/config/products";
import type { ProductDemoDefinition } from "@/types/product-demo";

const flagship = getFlagshipProduct();
const productHost = getProductHostname(flagship);

export const productDemoCopy = {
  framework: {
    title: "Interactive product demos",
    description:
      "Config-driven flow steppers with animated panels — keyboard accessible, reduced-motion aware, zero external animation libraries.",
    usage: `import { ProductDemoSection } from "@/components/product-demo";`,
    cmsNote:
      "Edit demo steps in src/config/product-demos.ts. Panel mock UIs live in src/components/product-demo/panels/.",
  },
  controls: {
    previous: "Previous step",
    next: "Next step",
    stepOf: (current: number, total: number) => `Step ${current} of ${total}`,
  },
} as const;

export const getPanditBookingFlowDemo: ProductDemoDefinition = {
  id: "getpandit-booking-flow",
  panelId: "getpandit-booking-flow",
  eyebrow: "Interactive demo",
  title: "GetPandit booking flow",
  description: `Walk through how families discover pandits, choose pooja packages, schedule ceremonies, and receive confirmations on ${productHost}.`,
  disclaimer: "Illustrative UI — reflects product architecture, not live analytics.",
  steps: [
    {
      id: "discover",
      label: "Discover",
      title: "Browse pandit profiles",
      description:
        "Families search by language, ritual expertise, and region — with verification signals before they shortlist.",
      highlights: ["Structured profiles", "Language filters", "Availability hints"],
    },
    {
      id: "choose",
      label: "Choose",
      title: "Compare pooja packages",
      description:
        "Transparent ritual scope, inclusions, and duration — so families commit with clarity, not phone tag.",
      highlights: ["Pooja catalogs", "Package inclusions", "Honest pricing signals"],
    },
    {
      id: "schedule",
      label: "Schedule",
      title: "Pick date, time, and location",
      description:
        "Calendar-aware booking captures ceremony details, muhurat preferences, and venue information.",
      highlights: ["Ceremony scheduling", "Location capture", "Muhurat-friendly slots"],
    },
    {
      id: "confirm",
      label: "Confirm",
      title: "Stay informed through the journey",
      description:
        "Booking references, reminders, and status updates keep families aligned until the ceremony.",
      highlights: ["Confirmations", "Reminders", "Messaging-ready architecture"],
    },
  ],
};

export const vendorJourneyDemo: ProductDemoDefinition = {
  id: "vendor-journey",
  panelId: "vendor-journey",
  eyebrow: "Partner journey",
  title: "Vendor journey",
  description: `How temples, vendors, and service partners move from enquiry to live listings on the ${flagshipProductName} marketplace.`,
  disclaimer: "Partner onboarding is enquiry-led — no self-serve signup on the corporate site.",
  steps: [
    {
      id: "enquiry",
      label: "Enquire",
      title: "Partner enquiry received",
      description:
        "Leads arrive via /contact or /partners. The team qualifies fit before product onboarding begins.",
      highlights: ["Enquiry-led intake", "Qualification checkpoint", "No public self-serve"],
    },
    {
      id: "catalog",
      label: "Catalog",
      title: "Build service listings",
      description:
        "Partners define rituals, packages, languages, and coverage areas aligned to the product catalog model.",
      highlights: ["Service listings", "Package tiers", "Coverage regions"],
    },
    {
      id: "review",
      label: "Review",
      title: "Quality and verification review",
      description:
        "Internal review checks profile completeness, ritual scope accuracy, and verification documents.",
      highlights: ["Document checks", "Listing QA", "Trust signals"],
    },
    {
      id: "live",
      label: "Go live",
      title: "Active on the marketplace",
      description:
        "Approved partners appear on the product domain with booking handoffs and admin operations support.",
      highlights: ["Product-domain visibility", "Booking handoffs", "Admin ops views"],
    },
  ],
};

export const panditOnboardingDemo: ProductDemoDefinition = {
  id: "pandit-onboarding",
  panelId: "pandit-onboarding",
  eyebrow: "Supply onboarding",
  title: "Pandit onboarding",
  description: `Structured intake for pandit partners joining ${flagshipProductName} — verification, catalog setup, and go-live readiness.`,
  disclaimer: "Readiness labels describe platform capability — not partner counts.",
  steps: [
    {
      id: "intake",
      label: "Intake",
      title: "Profile and expertise capture",
      description:
        "Pandits submit languages, specializations, and service scope through guided intake flows.",
      highlights: ["Profile intake", "Ritual expertise", "Language coverage"],
    },
    {
      id: "verify",
      label: "Verify",
      title: "Identity and credential checks",
      description:
        "Verification checkpoints before profiles go public — documents, references, and ritual alignment.",
      highlights: ["ID verification", "Credential review", "Trust-by-design"],
    },
    {
      id: "catalog",
      label: "Catalog",
      title: "Service and package setup",
      description:
        "Pandits define pooja offerings, package tiers, and availability calendars tied to booking flows.",
      highlights: ["Pooja listings", "Package tiers", "Calendar setup"],
    },
    {
      id: "launch",
      label: "Launch",
      title: "Discoverable on the product domain",
      description:
        "Completed onboarding unlocks marketplace visibility with honest readiness communication.",
      highlights: ["Live profile", "Booking-ready", "Ops oversight"],
    },
  ],
};

export const aiWorkflowDemo: ProductDemoDefinition = {
  id: "ai-workflow",
  panelId: "ai-workflow",
  eyebrow: "AI delivery",
  title: "AI workflow",
  description: `${brandName} ships agentic workflows with tool permissions, eval hooks, and human-in-the-loop approval — scoped per engagement.`,
  disclaimer: "Illustrative agent flow — not live model output or customer metrics.",
  steps: [
    {
      id: "intake",
      label: "Intake",
      title: "Trigger and context assembly",
      description:
        "Tickets, documents, or API events enter a workflow with scoped context and policy boundaries.",
      highlights: ["Event triggers", "Context windows", "Policy boundaries"],
    },
    {
      id: "classify",
      label: "Classify",
      title: "Route to the right agent",
      description:
        "Intent classification selects specialized agents with confidence thresholds and fallback rules.",
      highlights: ["Intent routing", "Confidence gates", "Fallback paths"],
    },
    {
      id: "execute",
      label: "Execute",
      title: "Tool calls within guardrails",
      description:
        "Agents call approved tools — lookups, drafts, updates — with credentials scoped per task.",
      highlights: ["Scoped tools", "PII guardrails", "Reasoning traces"],
    },
    {
      id: "approve",
      label: "Approve",
      title: "Human review and handoff",
      description:
        "High-risk actions pause for human approval. Eval results and audit trails are logged.",
      highlights: ["Human-in-the-loop", "Audit trails", "Eval logging"],
    },
  ],
};

export const marketplaceLifecycleDemo: ProductDemoDefinition = {
  id: "marketplace-lifecycle",
  panelId: "marketplace-lifecycle",
  eyebrow: "Marketplace pattern",
  title: "Marketplace lifecycle",
  description: `Reusable lifecycle from ${flagshipProductName} — list services, discovery, booking, and fulfillment with honest readiness labels.`,
  disclaimer: "Pattern overview — not revenue or transaction volume claims.",
  steps: [
    {
      id: "list",
      label: "List",
      title: "Supply lists services",
      description:
        "Partners publish structured listings with ritual scope, pricing signals, and verification status.",
      highlights: ["Structured listings", "Verification", "Catalog discipline"],
    },
    {
      id: "discover",
      label: "Discover",
      title: "Demand discovers and compares",
      description:
        "Families or buyers search, filter, and compare offerings with trust signals before booking.",
      highlights: ["Search & filters", "Profile comparison", "Trust indicators"],
    },
    {
      id: "book",
      label: "Book",
      title: "Transact with clear state",
      description:
        "Booking state machines capture scheduling, payment-ready architecture, and confirmations.",
      highlights: ["Booking states", "Payment-ready", "Notifications"],
    },
    {
      id: "fulfill",
      label: "Fulfill",
      title: "Deliver and close the loop",
      description:
        "Reminders, support channels, and qualitative feedback complete the marketplace loop.",
      highlights: ["Fulfillment", "Support handoff", "Feedback loop"],
    },
  ],
};

const productDemoRegistry: Record<string, ProductDemoDefinition> = {
  "getpandit-booking-flow": getPanditBookingFlowDemo,
  "vendor-journey": vendorJourneyDemo,
  "pandit-onboarding": panditOnboardingDemo,
  "ai-workflow": aiWorkflowDemo,
  "marketplace-lifecycle": marketplaceLifecycleDemo,
};

export function getProductDemo(id: string): ProductDemoDefinition | undefined {
  return productDemoRegistry[id];
}

export function listProductDemoIds(): string[] {
  return Object.keys(productDemoRegistry);
}

export const featuredProductDemos: readonly ProductDemoDefinition[] = [
  getPanditBookingFlowDemo,
  vendorJourneyDemo,
  panditOnboardingDemo,
  aiWorkflowDemo,
  marketplaceLifecycleDemo,
];
