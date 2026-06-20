import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { AiArchitectureVariant } from "@/config/ai-capability";

type NodeProps = {
  label: string;
  className?: string;
  accent?: boolean;
};

function DiagramNode({ label, className, accent }: NodeProps) {
  return (
    <div
      className={cn(
        "rounded-ds-md border px-3 py-2 text-center text-[0.65rem] font-semibold sm:text-xs",
        accent
          ? "border-electric-violet/40 bg-gradient-brand-subtle text-foreground"
          : "border-border/70 bg-surface/90 text-foreground shadow-soft",
        className,
      )}
    >
      {label}
    </div>
  );
}

function DiagramArrow({ className }: { className?: string }) {
  return (
    <span className={cn("text-muted", className)} aria-hidden="true">
      →
    </span>
  );
}

function HeroStackDiagram() {
  return (
    <div className="space-y-3" aria-hidden="true">
      <div className="grid grid-cols-3 gap-2">
        {["Web & mobile", "Agents", "Workflows"].map((label) => (
          <DiagramNode key={label} label={label} accent />
        ))}
      </div>
      <div className="flex justify-center">
        <DiagramArrow />
      </div>
      <DiagramNode label="LLM gateway · routing · evals" className="w-full" accent />
      <div className="flex justify-center">
        <DiagramArrow />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <DiagramNode label="Retrieval & data" />
        <DiagramNode label="Governance layer" />
      </div>
      <div className="flex justify-center">
        <DiagramArrow />
      </div>
      <DiagramNode label="Your APIs · CRM · messaging" className="w-full" />
    </div>
  );
}

function StrategyDiagram() {
  const steps = ["Discover", "Design", "Deliver", "Govern"];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" aria-hidden="true">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2 sm:gap-3">
          <DiagramNode label={step} accent={index === 1 || index === 3} />
          {index < steps.length - 1 ? <DiagramArrow /> : null}
        </div>
      ))}
    </div>
  );
}

function AgenticDiagram() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <DiagramNode label="User intent" className="w-full" />
      <div className="flex justify-center"><DiagramArrow className="rotate-90" /></div>
      <DiagramNode label="Planner · memory" className="w-full" accent />
      <div className="grid grid-cols-3 gap-2">
        {["Tool A", "Tool B", "Approve"].map((t) => (
          <DiagramNode key={t} label={t} />
        ))}
      </div>
      <DiagramNode label="Audited response" className="w-full" accent />
    </div>
  );
}

function WorkflowDiagram() {
  return (
    <div className="space-y-2" aria-hidden="true">
      {["Trigger", "Classify", "Route", "Notify"].map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric-blue/15 text-[0.6rem] font-bold text-electric-blue">
            {i + 1}
          </span>
          <DiagramNode label={step} className="flex-1" accent={i === 1} />
        </div>
      ))}
    </div>
  );
}

function IntegrationsDiagram() {
  return (
    <div className="relative flex items-center justify-center py-4" aria-hidden="true">
      <DiagramNode label="AI gateway" className="relative z-10" accent />
      <div className="absolute inset-0 grid grid-cols-2 gap-8">
        {["Web app", "Mobile", "CRM", "Messaging"].map((label) => (
          <DiagramNode key={label} label={label} className="self-center justify-self-center" />
        ))}
      </div>
    </div>
  );
}

function LlmPlatformDiagram() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <div className="grid grid-cols-3 gap-2">
        {["Fast tier", "Quality tier", "Fallback"].map((t) => (
          <DiagramNode key={t} label={t} accent={t === "Quality tier"} />
        ))}
      </div>
      <DiagramNode label="Prompt registry · evals" className="w-full" />
      <DiagramNode label="Token budget · cache" className="w-full" accent />
    </div>
  );
}

function AssistantsDiagram() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <DiagramNode label="User message" className="w-full" />
      <DiagramNode label="Context + policies" className="w-full" accent />
      <DiagramNode label="Retrieval (approved KB)" className="w-full" />
      <div className="grid grid-cols-2 gap-2">
        <DiagramNode label="Auto reply" />
        <DiagramNode label="Human handoff" accent />
      </div>
    </div>
  );
}

function RetrievalDiagram() {
  return (
    <div className="space-y-2" aria-hidden="true">
      {["Ingest", "Chunk & embed", "Index", "Retrieve", "Generate"].map((step, i) => (
        <DiagramNode key={step} label={step} className="w-full" accent={i === 2 || i === 4} />
      ))}
    </div>
  );
}

function EnterpriseDiagram() {
  return (
    <div className="grid grid-cols-2 gap-2" aria-hidden="true">
      {["Tenant A", "Tenant B", "SSO", "Audit log", "VPC option", "Observability"].map(
        (label) => (
          <DiagramNode key={label} label={label} accent={label.includes("Audit")} />
        ),
      )}
    </div>
  );
}

function GovernanceDiagram() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <DiagramNode label="Policy & allowlists" className="w-full" accent />
      <div className="grid grid-cols-2 gap-2">
        <DiagramNode label="Eval gate" />
        <DiagramNode label="Human review" accent />
      </div>
      <DiagramNode label="Monitor · rollback" className="w-full" />
    </div>
  );
}

const diagrams: Record<AiArchitectureVariant, () => ReactNode> = {
  "hero-stack": HeroStackDiagram,
  strategy: StrategyDiagram,
  agentic: AgenticDiagram,
  workflow: WorkflowDiagram,
  integrations: IntegrationsDiagram,
  "llm-platform": LlmPlatformDiagram,
  assistants: AssistantsDiagram,
  retrieval: RetrievalDiagram,
  enterprise: EnterpriseDiagram,
  governance: GovernanceDiagram,
};

type AiArchitectureDiagramProps = {
  variant: AiArchitectureVariant;
  className?: string;
  tone?: "light" | "dark";
};

export function AiArchitectureDiagram({
  variant,
  className,
  tone = "light",
}: AiArchitectureDiagramProps) {
  const Diagram = diagrams[variant];

  return (
    <div
      className={cn(
        "rounded-ds-lg border p-4 sm:p-6",
        tone === "dark"
          ? "border-glass-border-dark bg-glass-dark/50"
          : "border-glass-border bg-glass/80 shadow-soft backdrop-blur-sm",
        className,
      )}
      aria-hidden="true"
    >
      <Diagram />
    </div>
  );
}

export function AiHeroArchitectureVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div
        className="pointer-events-none absolute -right-6 top-4 h-40 w-40 rounded-full bg-electric-violet/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-8 -left-4 h-32 w-32 rounded-full bg-electric-cyan/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-ds-xl border border-glass-border-dark bg-glass-dark/40 p-6 shadow-glass-dark backdrop-blur-sm sm:p-8">
        <p className="text-eyebrow text-electric-cyan">Architecture overview</p>
        <div className="mt-4">
          <AiArchitectureDiagram variant="hero-stack" tone="dark" className="border-glass-border-dark bg-midnight/40" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[0.65rem] text-on-dark-muted sm:text-xs">
          <span>Products</span>
          <span>Platform</span>
          <span>Governance</span>
        </div>
      </div>
    </div>
  );
}
