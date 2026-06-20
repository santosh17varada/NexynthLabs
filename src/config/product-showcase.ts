import { brandName } from "@/config/site-values";
import {
  getEcosystemStatus,
  getEcosystemStatusLabel,
  getPanditEcosystemSurfaces,
  getPanditShowcaseCopy,
  getShowcaseReadinessMetrics,
} from "@/config/getpandit-showcase";
import {
  getPanditMarketingCopy,
  type GetPanditPreviewId,
} from "@/config/getpandit-marketing";
import { getPanditMetricStatusLabels } from "@/config/getpandit-metrics";
import type {
  ProductShowcaseDefinition,
  ShowcaseDeviceType,
  ShowcaseVisual,
} from "@/types/product-showcase";

export const productShowcaseCopy = {
  framework: {
    title: "Product showcase framework",
    description:
      "Reusable screenshot mockups, device frames, feature walkthroughs, and before/after comparisons — config-driven for GetPandit, AI products, and future launches.",
    usage: `import { ProductShowcaseSection, ProductFeatureSection, HeroMockupStack } from "@/components/product-showcase";`,
    cmsNote:
      "Edit showcase copy and visuals in src/config/product-showcase.ts and product-specific configs (getpandit-marketing.ts, getpandit-showcase.ts). Preview components live in src/components/product-showcase/preview-registry/.",
  },
} as const;

const getPanditPreviewDevices: Partial<Record<GetPanditPreviewId, ShowcaseDeviceType>> = {
  "mobile-app": "mobile",
  "admin-ops": "dashboard",
};

const getPanditWalkthroughPreviews: Record<string, GetPanditPreviewId> = {
  discover: "pandit-discovery",
  choose: "pooja-booking",
  schedule: "pooja-booking",
  confirm: "customer-journey",
};

export function previewToVisual(
  previewId: string,
  options?: { urlBar?: string; device?: ShowcaseDeviceType },
): ShowcaseVisual {
  const device =
    options?.device ??
    getPanditPreviewDevices[previewId as GetPanditPreviewId] ??
    "browser";

  return {
    type: "preview",
    previewId,
    device,
    urlBar: options?.urlBar,
  };
}

function buildGetPanditFeatures(): ProductShowcaseDefinition["features"] {
  const urlBar = getPanditShowcaseCopy.mockup.urlBar;

  return getPanditMarketingCopy.features.map((feature) => ({
    id: feature.id,
    eyebrow: feature.eyebrow,
    title: feature.title,
    description: feature.description,
    bullets: feature.bullets,
    readiness: feature.readiness,
    visual: previewToVisual(feature.preview, { urlBar }),
  }));
}

export const getPanditShowcaseDefinition: ProductShowcaseDefinition = {
  productId: "getpandit",
  badge: getPanditShowcaseCopy.badge,
  title: getPanditShowcaseCopy.title,
  tagline: getPanditShowcaseCopy.tagline,
  summary: getPanditShowcaseCopy.summary,
  domainNote: getPanditShowcaseCopy.domainNote,
  disclaimer: getPanditShowcaseCopy.disclaimer,
  mockup: getPanditShowcaseCopy.mockup,
  heroOverlay: previewToVisual("mobile-app", { urlBar: getPanditShowcaseCopy.mockup.urlBar }),
  ctas: getPanditShowcaseCopy.ctas,
  ecosystemTitle: getPanditShowcaseCopy.ecosystemTitle,
  ecosystemDescription: getPanditShowcaseCopy.ecosystemDescription,
  ecosystemSurfaces: getPanditEcosystemSurfaces,
  readinessTitle: getPanditShowcaseCopy.readinessTitle,
  readinessDescription: getPanditShowcaseCopy.readinessDescription,
  readinessMetrics: getShowcaseReadinessMetrics().map((metric) => ({
    id: metric.id,
    title: metric.title,
    description: metric.description,
    status: metric.status,
    statusLabel: getPanditMetricStatusLabels[metric.status],
  })),
  features: buildGetPanditFeatures(),
  walkthrough: {
    eyebrow: getPanditMarketingCopy.howItWorks.eyebrow,
    title: getPanditMarketingCopy.howItWorks.title,
    description: getPanditMarketingCopy.howItWorks.description,
    steps: getPanditMarketingCopy.howItWorks.steps.map((step) => ({
      id: step.id,
      step: step.step,
      title: step.title,
      description: step.description,
      visual: previewToVisual(getPanditWalkthroughPreviews[step.id] ?? "pandit-discovery", {
        urlBar: getPanditShowcaseCopy.mockup.urlBar,
      }),
    })),
  },
  gallery: {
    eyebrow: "Product surfaces",
    title: "Web, mobile, admin, and dashboard mockups",
    description:
      "CSS previews and portfolio screenshots — illustrative until production captures ship.",
    items: [
      previewToVisual("pandit-discovery", { urlBar: getPanditShowcaseCopy.mockup.urlBar }),
      previewToVisual("mobile-app"),
      previewToVisual("admin-ops"),
      {
        type: "screenshot",
        kind: "web",
        device: "browser",
        asset: {
          imageSrc: "/portfolio/getpandit-flow.svg",
          imageAlt: "GetPandit booking flow overview",
          urlBar: getPanditShowcaseCopy.mockup.urlBar,
        },
      },
      {
        type: "before-after",
        before: {
          imageSrc: "/portfolio/getpandit-hero.svg",
          imageAlt: "Before — fragmented discovery",
          urlBar: "before.example",
        },
        after: {
          imageSrc: "/portfolio/getpandit-flow.svg",
          imageAlt: "After — structured booking journey",
          urlBar: getPanditShowcaseCopy.mockup.urlBar,
        },
        beforeLabel: "Before",
        afterLabel: "After",
        device: "browser",
      },
    ],
  },
};

export const aiShowcaseDefinition: ProductShowcaseDefinition = {
  productId: "ai",
  badge: "AI products",
  title: "AI engineering showcase",
  tagline: "Agentic workflows, assistants, and ops dashboards",
  summary: `${brandName} ships AI features with scoped guardrails — workflow automation, retrieval pipelines, and human-in-the-loop checkpoints.`,
  domainNote:
    "Illustrative UI previews for AI delivery surfaces. No fabricated performance metrics or model benchmarks on the corporate site.",
  disclaimer:
    "Preview cards describe architecture patterns — not live product analytics or customer deployments.",
  mockup: {
    imageSrc: "/portfolio/getpandit-flow.svg",
    imageAlt: "AI workflow architecture preview",
    urlBar: "ai.nexynthlabs.com",
    caption: "Placeholder hero — replace with AI product capture",
  },
  ctas: {
    explore: { label: "View AI capability", href: "/ai-capability" },
    partner: { label: "Book AI consultation", href: "/contact?intent=ai" },
  },
  ecosystemTitle: "Delivery surfaces",
  ecosystemDescription: "Web consoles, admin dashboards, and embedded assistants — framed for enterprise AI rollouts.",
  ecosystemSurfaces: [
    {
      id: "web",
      label: "Web console",
      description: "Operator workflows, eval runs, and prompt iteration in the browser.",
      metricId: "web",
    },
    {
      id: "admin",
      label: "Ops dashboard",
      description: "Cost, latency, handoff, and eval signals for platform owners.",
      metricId: "admin",
    },
    {
      id: "mobile",
      label: "Embedded assistant",
      description: "In-product copilots with scoped tools and approval gates.",
      metricId: "mobile",
    },
  ],
  readinessTitle: "Capability readiness",
  readinessDescription: "Honest delivery phases — scoped per engagement, not vanity KPIs.",
  readinessMetrics: [
    {
      id: "agentic",
      title: "Agentic workflows",
      description: "Multi-step agents with tool permissions and audit trails.",
      status: "platform-ready",
      statusLabel: "Platform ready",
    },
    {
      id: "retrieval",
      title: "Retrieval pipelines",
      description: "RAG ingestion, chunking, and eval harnesses for knowledge products.",
      status: "integration-ready",
      statusLabel: "Integration ready",
    },
    {
      id: "governance",
      title: "Governance & monitoring",
      description: "Cost controls, PII boundaries, and human review checkpoints.",
      status: "in-progress",
      statusLabel: "In progress",
    },
  ],
  gallery: {
    eyebrow: "AI surfaces",
    title: "Workflow, agent, dashboard, and assistant mockups",
    items: [
      { type: "preview", previewId: "ai-workflow", device: "browser", urlBar: "console.example" },
      { type: "preview", previewId: "ai-agent", device: "browser" },
      { type: "preview", previewId: "ai-dashboard", device: "dashboard" },
      { type: "preview", previewId: "ai-assistant", device: "mobile" },
    ],
  },
};

const productShowcaseDefinitions: Record<string, ProductShowcaseDefinition> = {
  getpandit: getPanditShowcaseDefinition,
  ai: aiShowcaseDefinition,
};

export function getProductShowcaseDefinition(
  productId: string,
): ProductShowcaseDefinition | undefined {
  return productShowcaseDefinitions[productId];
}

export function listProductShowcaseIds(): string[] {
  return Object.keys(productShowcaseDefinitions);
}

export function resolveEcosystemSurfaceStatus(productId: string, metricId: string) {
  if (productId === "getpandit") {
    return {
      status: getEcosystemStatus(metricId),
      statusLabel: getEcosystemStatusLabel(metricId),
    };
  }

  return { status: "planned", statusLabel: "Planned" };
}

export const readinessStatusStyles: Record<string, string> = {
  "platform-ready": "bg-electric-violet/15 text-foreground ring-electric-violet/30",
  "integration-ready": "bg-primary/10 text-primary ring-primary/20",
  "in-progress": "bg-amber-500/15 text-foreground ring-amber-500/25",
  planned: "bg-surface text-muted ring-border",
};

export const ecosystemSurfaceIcons: Record<string, string> = {
  web: "WWW",
  mobile: "App",
  admin: "Ops",
};
