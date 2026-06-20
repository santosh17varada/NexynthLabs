import type { DemoPanelRenderer } from "@/types/product-demo";
import { FlowMockCard, FlowMockRow, FlowNode } from "@/components/product-demo/panels/FlowMockPrimitives";

export const getPanditBookingFlowPanel: DemoPanelRenderer = ({ stepIndex }) => {
  const nodes = ["Discover", "Choose", "Schedule", "Confirm"];

  return (
    <div className="space-y-4" aria-hidden="true">
      <div className="flex items-start justify-between gap-1">
        {nodes.map((node, index) => (
          <FlowNode
            key={node}
            label={node}
            active={index === stepIndex}
            complete={index < stepIndex}
          />
        ))}
      </div>

      {stepIndex === 0 ? (
        <div className="space-y-2">
          <FlowMockCard title="Pandit R. Sharma" subtitle="Sanskrit · North Indian rituals" badge="Verified" active />
          <FlowMockCard title="Pandit K. Iyer" subtitle="Tamil · Homam specialist" />
          <FlowMockCard title="Pandit A. Joshi" subtitle="Marathi · Griha pravesh" />
        </div>
      ) : null}

      {stepIndex === 1 ? (
        <div className="space-y-2">
          <FlowMockCard title="Satyanarayan Pooja" subtitle="2–3 hrs · Includes samagri list" badge="Popular" active />
          <FlowMockRow label="Ritual scope" value="Full vrat katha" highlight />
          <FlowMockRow label="Inclusions" value="Samagri checklist" />
        </div>
      ) : null}

      {stepIndex === 2 ? (
        <div className="space-y-2">
          <FlowMockCard title="Ceremony date" subtitle="Sat, 12 Jul · Morning muhurat" active />
          <FlowMockRow label="Location" value="Home — Bengaluru" highlight />
          <FlowMockRow label="Language" value="Sanskrit + Hindi" />
        </div>
      ) : null}

      {stepIndex === 3 ? (
        <div className="space-y-2">
          <FlowMockCard title="Booking confirmed" subtitle="Reference GP-2048" badge="Confirmed" active />
          <FlowMockRow label="Reminder" value="48h before ceremony" highlight />
          <FlowMockRow label="Status updates" value="SMS · WhatsApp ready" />
        </div>
      ) : null}
    </div>
  );
};
