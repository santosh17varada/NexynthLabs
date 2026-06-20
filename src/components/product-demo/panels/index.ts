import { getPanditBookingFlowPanel } from "@/components/product-demo/panels/booking-flow";
import { vendorJourneyPanel } from "@/components/product-demo/panels/vendor-journey";
import { panditOnboardingPanel } from "@/components/product-demo/panels/pandit-onboarding";
import { aiWorkflowPanel } from "@/components/product-demo/panels/ai-workflow";
import { marketplaceLifecyclePanel } from "@/components/product-demo/panels/marketplace-lifecycle";
import type { DemoPanelRenderer, ProductDemoPanelId } from "@/types/product-demo";

export const demoPanelRegistry: Record<ProductDemoPanelId, DemoPanelRenderer> = {
  "getpandit-booking-flow": getPanditBookingFlowPanel,
  "vendor-journey": vendorJourneyPanel,
  "pandit-onboarding": panditOnboardingPanel,
  "ai-workflow": aiWorkflowPanel,
  "marketplace-lifecycle": marketplaceLifecyclePanel,
};

export function getDemoPanelRenderer(panelId: ProductDemoPanelId): DemoPanelRenderer | undefined {
  return demoPanelRegistry[panelId];
}
