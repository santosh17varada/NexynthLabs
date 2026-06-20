import type { DemoPanelRenderer } from "@/types/product-demo";
import { FlowMockCard, FlowMockRow, FlowNode } from "@/components/product-demo/panels/FlowMockPrimitives";

export const marketplaceLifecyclePanel: DemoPanelRenderer = ({ stepIndex }) => {
  const phases = ["List", "Discover", "Book", "Fulfill"];

  return (
    <div className="space-y-4" aria-hidden="true">
      <div className="flex items-start justify-between gap-1">
        {phases.map((phase, index) => (
          <FlowNode
            key={phase}
            label={phase}
            active={index === stepIndex}
            complete={index < stepIndex}
          />
        ))}
      </div>

      {stepIndex === 0 ? (
        <div className="space-y-2">
          <FlowMockCard title="Service listing" subtitle="Pooja package · transparent scope" badge="Supply" active />
          <FlowMockRow label="Partner" value="Verified pandit" highlight />
        </div>
      ) : null}

      {stepIndex === 1 ? (
        <div className="space-y-2">
          <FlowMockCard title="Family discovery" subtitle="Filters · profiles · compare" active />
          <FlowMockRow label="Trust signals" value="Verification · readiness" highlight />
        </div>
      ) : null}

      {stepIndex === 2 ? (
        <div className="space-y-2">
          <FlowMockCard title="Booking & payment" subtitle="Calendar · ceremony details" badge="Transact" active />
          <FlowMockRow label="State" value="Confirmed · notified" highlight />
        </div>
      ) : null}

      {stepIndex === 3 ? (
        <div className="space-y-2">
          <FlowMockCard title="Ceremony fulfilled" subtitle="Reminders · support handoff" badge="Complete" active />
          <FlowMockRow label="Feedback loop" value="Qualitative review" highlight />
        </div>
      ) : null}
    </div>
  );
};
