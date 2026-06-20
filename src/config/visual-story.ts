import { brandName, flagshipProductName } from "@/config/site-values";
import { getPanditMarketingCopy } from "@/config/getpandit-marketing";
import { aiCapabilityCopy } from "@/config/ai-capability";
import type { VisualStoryDefinition } from "@/types/visual-story";

const { journey, problem, howItWorks } = getPanditMarketingCopy;

export const visualStoryCopy = {
  framework: {
    cmsNote:
      "Edit visual stories in src/config/visual-story.ts. Variants: timeline, process-flow, architecture-journey, animated-pathway, customer-journey, problem-solution-outcome.",
  },
} as const;

export const homeDeliveryPathway: VisualStoryDefinition = {
  id: "home-delivery-pathway",
  variant: "animated-pathway",
  eyebrow: "How we deliver",
  title: "From idea to production — with honest milestones",
  description: `${brandName} ships in phases — strategy, build, and live product domains — without vanity launch theatre.`,
  steps: [
    { id: "discover", label: "Discover", title: "Map the problem", description: "Workflows, users, and readiness boundaries." },
    { id: "design", label: "Design", title: "Architecture & UX", description: "Typed stacks, integrations, and calm interfaces." },
    { id: "build", label: "Build", title: "Ship iteratively", description: "Config-driven releases with visible milestones." },
    { id: "live", label: "Live", title: "Dedicated domains", description: "Products like GetPandit run where users book." },
    { id: "evolve", label: "Evolve", title: "Measure honestly", description: "Readiness labels — not fabricated KPIs." },
  ],
};

export const homeProblemSolution: VisualStoryDefinition = {
  id: "home-problem-solution",
  variant: "problem-solution-outcome",
  eyebrow: "Why it matters",
  title: "Problem → solution → outcome",
  description: "How we frame every engagement — clarity before code, outcomes without hype.",
  columns: [
    {
      id: "problem",
      title: "Problem",
      description: "Brochure sites coupled to fragile experiments. Families and enterprises lack trustworthy software.",
      items: [
        "Fragmented discovery and phone-tag coordination",
        "Marketing and product on the same release train",
        "AI demos without production guardrails",
      ],
    },
    {
      id: "solution",
      title: "Solution",
      description: `${brandName} separates storytelling from product delivery — with craft, config, and integration-ready cores.`,
      items: [
        "Flagship products on dedicated domains",
        "Honest readiness communication",
        "Agentic AI with human oversight",
      ],
    },
    {
      id: "outcome",
      title: "Outcome",
      description: "Software people can rely on — maintained for years, not demo-day applause.",
      items: [
        "Live marketplace on getpandit.com",
        "Enterprise platforms clients can own",
        "Partners who plan with clarity",
      ],
    },
  ],
};

export const getPanditCustomerJourney: VisualStoryDefinition = {
  id: "getpandit-customer-journey",
  variant: "customer-journey",
  eyebrow: journey.eyebrow,
  title: journey.title,
  description: "What families experience on the product domain — visual journey, not vanity metrics.",
  steps: journey.stages.map((stage, index) => ({
    id: stage.label.toLowerCase(),
    step: String(index + 1).padStart(2, "0"),
    label: stage.label,
    title: stage.label,
    description: stage.detail,
  })),
};

export const getPanditProblemSolution: VisualStoryDefinition = {
  id: "getpandit-problem-solution",
  variant: "problem-solution-outcome",
  eyebrow: "Impact",
  title: "Problem → solution → outcome",
  description: problem.description,
  columns: [
    {
      id: "problem",
      title: "Problem",
      description: problem.title,
      items: problem.pains.map((p) => p.title),
    },
    {
      id: "solution",
      title: "Solution",
      description: `${flagshipProductName} brings structured discovery, packages, and booking on getpandit.com.`,
      items: howItWorks.steps.map((s) => s.title),
    },
    {
      id: "outcome",
      title: "Outcome",
      description: "Families book with clarity. Partners onboard with honest readiness labels.",
      items: [
        "Transparent pooja packages",
        "Calendar-aware scheduling",
        "Confirmations and reminders",
      ],
    },
  ],
};

export const productsBuildTimeline: VisualStoryDefinition = {
  id: "products-build-timeline",
  variant: "timeline",
  eyebrow: "Product lifecycle",
  title: "How Nexynth products evolve",
  description: "Each product owns its domain, roadmap, and integration model — corporate site explains; product domains deliver.",
  steps: [
    { id: "concept", step: "01", label: "Concept", title: "Validate the domain", description: "Partner conversations and honest concept labels." },
    { id: "prototype", step: "02", label: "Prototype", title: "Prove the flows", description: "Interactive demos and architecture spikes." },
    { id: "mvp", step: "03", label: "MVP", title: "Ship on product domain", description: `${flagshipProductName} live on getpandit.com.` },
    { id: "ecosystem", step: "04", label: "Ecosystem", title: "Expand supply & integrations", description: "Vendor networks, payments, messaging." },
    { id: "scale", step: "05", label: "Scale", title: "Multi-city patterns", description: "Directional rollout with partner models." },
  ],
};

export const aiDeliveryFlow: VisualStoryDefinition = {
  id: "ai-delivery-flow",
  variant: "process-flow",
  eyebrow: "AI delivery",
  title: aiCapabilityCopy.strategy.title,
  description: aiCapabilityCopy.strategy.description,
  steps: aiCapabilityCopy.strategy.phases.map((phase) => ({
    id: phase.id,
    step: phase.step,
    label: phase.title,
    title: phase.title,
    description: phase.description,
  })),
};

export const aiArchitectureJourney: VisualStoryDefinition = {
  id: "ai-architecture-journey",
  variant: "architecture-journey",
  eyebrow: "Architecture",
  title: "Agentic stack — production path",
  description: "Lightweight view of how AI features move from trigger to governed output.",
  nodes: [
    { id: "trigger", label: "Trigger · ticket / API", accent: false },
    { id: "context", label: "Context assembly", accent: false },
    { id: "agent", label: "Agent · tools scoped", accent: true },
    { id: "eval", label: "Eval · guardrails", accent: false },
    { id: "human", label: "Human review", accent: true },
    { id: "ship", label: "Ship · audit trail", accent: false },
  ],
};

const visualStoryRegistry: Record<string, VisualStoryDefinition> = {
  "home-delivery-pathway": homeDeliveryPathway,
  "home-problem-solution": homeProblemSolution,
  "getpandit-customer-journey": getPanditCustomerJourney,
  "getpandit-problem-solution": getPanditProblemSolution,
  "products-build-timeline": productsBuildTimeline,
  "ai-delivery-flow": aiDeliveryFlow,
  "ai-architecture-journey": aiArchitectureJourney,
};

export function getVisualStory(id: string): VisualStoryDefinition | undefined {
  return visualStoryRegistry[id];
}

export const homeVisualStories: readonly VisualStoryDefinition[] = [
  homeDeliveryPathway,
  homeProblemSolution,
];

export const getPanditVisualStories: readonly VisualStoryDefinition[] = [
  getPanditProblemSolution,
  getPanditCustomerJourney,
];

export const productsVisualStories: readonly VisualStoryDefinition[] = [productsBuildTimeline];

export const aiVisualStories: readonly VisualStoryDefinition[] = [
  aiDeliveryFlow,
  aiArchitectureJourney,
];
