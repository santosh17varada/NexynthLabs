import type { ShowcasePreviewRegistry } from "@/types/product-showcase";
import { cn } from "@/lib/cn";

function AiWorkflowPreview() {
  return (
    <div className="space-y-3" aria-hidden="true">
      {["Intake", "Classify", "Route", "Approve"].map((step, index) => (
        <div
          key={step}
          className={cn(
            "flex items-center justify-between rounded-ds-md border px-3 py-2.5",
            index === 1
              ? "border-electric-violet/30 bg-electric-violet/5"
              : "border-border/60 bg-surface",
          )}
        >
          <span className="text-sm font-medium text-foreground">{step}</span>
          <span className="text-xs text-muted">{index === 1 ? "Agent" : "Rule"}</span>
        </div>
      ))}
    </div>
  );
}

function AiAgentPreview() {
  return (
    <div className="space-y-3" aria-hidden="true">
      <div className="rounded-ds-md border border-electric-cyan/25 bg-electric-cyan/5 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-electric-cyan">
          Support agent
        </p>
        <p className="mt-2 text-sm text-foreground">Draft reply with guardrails</p>
      </div>
      <div className="rounded-ds-md border border-border/60 bg-surface p-3 text-sm text-muted">
        Escalate to human when confidence &lt; threshold
      </div>
    </div>
  );
}

function AiDashboardPreview() {
  return (
    <div className="grid gap-2 sm:grid-cols-2" aria-hidden="true">
      {[
        { label: "Eval pass rate", value: "—" },
        { label: "Human handoffs", value: "—" },
        { label: "Cost / 1k runs", value: "—" },
        { label: "Latency p95", value: "—" },
      ].map((stat) => (
        <div
          key={stat.label}
          className="rounded-ds-md border border-glass-border-dark bg-glass-dark/40 p-3"
        >
          <p className="text-[0.65rem] uppercase tracking-wide text-on-dark-muted">{stat.label}</p>
          <p className="mt-1 text-2xl font-semibold text-on-dark">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

function AiAssistantPreview() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <div className="rounded-ds-md bg-gradient-brand px-3 py-3 text-on-dark">
        <p className="text-sm font-semibold">How can I help?</p>
      </div>
      <div className="rounded-ds-md border border-border/60 bg-surface px-3 py-2 text-sm text-muted">
        Summarize this ticket…
      </div>
      <div className="rounded-ds-md border border-electric-blue/20 bg-electric-blue/5 px-3 py-2 text-sm text-foreground">
        Draft ready · Review before send
      </div>
    </div>
  );
}

export const aiPreviewRegistry: ShowcasePreviewRegistry = {
  "ai-workflow": AiWorkflowPreview,
  "ai-agent": AiAgentPreview,
  "ai-dashboard": AiDashboardPreview,
  "ai-assistant": AiAssistantPreview,
};
