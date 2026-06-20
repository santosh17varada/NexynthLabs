import type { DemoPanelRenderer } from "@/types/product-demo";
import { FlowMockCard, FlowMockRow } from "@/components/product-demo/panels/FlowMockPrimitives";

export const vendorJourneyPanel: DemoPanelRenderer = ({ stepIndex }) => {
  if (stepIndex === 0) {
    return (
      <div className="space-y-2" aria-hidden="true">
        <FlowMockCard title="Partner enquiry" subtitle="Temple trust · Vendor network" badge="New" active />
        <FlowMockRow label="Intent" value="List pooja services" highlight />
        <FlowMockRow label="Channel" value="/contact?intent=partner" />
      </div>
    );
  }

  if (stepIndex === 1) {
    return (
      <div className="space-y-2" aria-hidden="true">
        <FlowMockCard title="Service catalog draft" subtitle="12 rituals · 3 packages" active />
        <FlowMockRow label="Languages" value="Hindi, Sanskrit" highlight />
        <FlowMockRow label="Coverage" value="Bengaluru metro" />
      </div>
    );
  }

  if (stepIndex === 2) {
    return (
      <div className="space-y-2" aria-hidden="true">
        <FlowMockCard title="Quality review" subtitle="Profile + listing checklist" badge="Review" active />
        <FlowMockRow label="Verification" value="Documents received" highlight />
        <FlowMockRow label="Ritual scope" value="Aligned to catalog" />
      </div>
    );
  }

  return (
    <div className="space-y-2" aria-hidden="true">
      <FlowMockCard title="Live on marketplace" subtitle="Visible to families on product domain" badge="Active" active />
      <FlowMockRow label="Bookings" value="Enquiry-led handoff" highlight />
      <FlowMockRow label="Ops view" value="Admin dashboard" />
    </div>
  );
};
