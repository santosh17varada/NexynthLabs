import type { DemoPanelRenderer } from "@/types/product-demo";
import {
  FlowMockCard,
  FlowMockRow,
  flowMockBadgeClassName,
} from "@/components/product-demo/panels/FlowMockPrimitives";
import { cn } from "@/lib/cn";

export const aiWorkflowPanel: DemoPanelRenderer = ({ stepIndex }) => {
  const pipeline = ["Intake", "Classify", "Execute", "Approve"];

  return (
    <div className="space-y-4" aria-hidden="true">
      <div className="flex flex-wrap items-center gap-2">
        {pipeline.map((stage, index) => (
          <div key={stage} className="flex items-center gap-2">
            <span
              className={cn(
                "rounded-ds-full px-2.5 py-1 text-xs font-semibold transition-colors duration-200",
                index === stepIndex
                  ? flowMockBadgeClassName
                  : index < stepIndex
                    ? "bg-gradient-brand text-on-dark"
                    : "border border-border bg-surface text-muted",
              )}
            >
              {stage}
            </span>
            {index < pipeline.length - 1 ? (
              <span className="text-muted" aria-hidden="true">
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>

      {stepIndex === 0 ? (
        <FlowMockCard title="Ticket intake" subtitle="Support request · billing question" badge="Trigger" active />
      ) : null}
      {stepIndex === 1 ? (
        <div className="space-y-2">
          <FlowMockCard title="Intent classified" subtitle="Refund eligibility · high confidence" active />
          <FlowMockRow label="Route" value="Billing agent" highlight />
        </div>
      ) : null}
      {stepIndex === 2 ? (
        <div className="space-y-2">
          <FlowMockCard title="Tool calls" subtitle="Lookup order · draft reply" badge="Agent" active />
          <FlowMockRow label="Guardrails" value="PII masked · tools scoped" highlight />
        </div>
      ) : null}
      {stepIndex === 3 ? (
        <div className="space-y-2">
          <FlowMockCard title="Human review" subtitle="Approve send · audit trail saved" badge="HITL" active />
          <FlowMockRow label="Eval" value="Pass · logged" highlight />
        </div>
      ) : null}
    </div>
  );
};
