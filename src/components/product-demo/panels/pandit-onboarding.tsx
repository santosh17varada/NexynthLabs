import type { DemoPanelRenderer } from "@/types/product-demo";
import { FlowMockCard, FlowMockRow } from "@/components/product-demo/panels/FlowMockPrimitives";
import { cn } from "@/lib/cn";

export const panditOnboardingPanel: DemoPanelRenderer = ({ stepIndex }) => {
  const checklist = [
    { label: "Identity verification", done: stepIndex >= 1 },
    { label: "Ritual expertise", done: stepIndex >= 2 },
    { label: "Service listings", done: stepIndex >= 3 },
    { label: "Availability calendar", done: stepIndex >= 3 },
  ];

  return (
    <div className="space-y-4" aria-hidden="true">
      <div className="space-y-2">
        {checklist.map((item) => (
          <div
            key={item.label}
            className={cn(
              "flex items-center gap-2 rounded-ds-md border px-3 py-2 text-sm transition-colors duration-200",
              item.done
                ? "border-emerald-500/25 bg-emerald-500/5 text-foreground"
                : "border-border/60 bg-surface text-muted",
            )}
          >
            <span className={item.done ? "text-emerald-600" : "text-muted"} aria-hidden="true">
              {item.done ? "✓" : "○"}
            </span>
            {item.label}
          </div>
        ))}
      </div>

      {stepIndex === 0 ? (
        <FlowMockCard title="Profile intake" subtitle="Name, languages, specializations" badge="Start" active />
      ) : null}
      {stepIndex === 1 ? (
        <FlowMockCard title="Document upload" subtitle="ID · credentials · references" active />
      ) : null}
      {stepIndex === 2 ? (
        <FlowMockCard title="Ritual catalog" subtitle="Pooja types · package tiers" active />
      ) : null}
      {stepIndex === 3 ? (
        <>
          <FlowMockCard title="Partner profile live" subtitle="Discoverable on getpandit.com" badge="Live" active />
          <FlowMockRow label="Readiness" value="Onboarding complete" highlight />
        </>
      ) : null}
    </div>
  );
};
