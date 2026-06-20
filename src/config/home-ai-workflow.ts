export const homeAiWorkflowCopy = {
  id: "ai-workflow",
  eyebrow: "AI in production",
  title: "From enterprise data to business outcomes",
  description:
    "Beyond prototypes. Real AI systems solving real business problems.",
  sources: [
    { id: "crm", label: "CRM" },
    { id: "erp", label: "ERP" },
    { id: "email", label: "Email" },
    { id: "documents", label: "Documents" },
    { id: "apis", label: "API Systems" },
  ],
  layers: [
    { id: "agent", label: "AI Agent Layer", description: "Ingest, reason, and orchestrate" },
    { id: "decision", label: "Decision Engine", description: "Policy, evals, and human gates" },
    { id: "automation", label: "Automation Layer", description: "Workflows, APIs, and actions" },
    { id: "outcomes", label: "Business Outcomes", description: "Measurable operational impact" },
  ],
  outcomes: [
    "Faster operations",
    "Reduced manual work",
    "Better decisions",
  ],
  cta: {
    label: "Explore AI engineering",
    href: "/ai",
  },
} as const;

/** Fixed SVG layout — deterministic for SSR and client. */
export const AI_WORKFLOW_LAYOUT = {
  viewBox: { width: 880, height: 640 },
  sources: [
    { id: "crm", x: 88, y: 72 },
    { id: "erp", x: 220, y: 72 },
    { id: "email", x: 352, y: 72 },
    { id: "documents", x: 484, y: 72 },
    { id: "apis", x: 616, y: 72 },
  ],
  layers: [
    { id: "agent", x: 440, y: 188, width: 360, height: 72 },
    { id: "decision", x: 440, y: 300, width: 320, height: 64 },
    { id: "automation", x: 440, y: 400, width: 320, height: 64 },
    { id: "outcomes", x: 440, y: 520, width: 400, height: 88 },
  ],
  convergeY: 148,
  centerX: 440,
} as const;
