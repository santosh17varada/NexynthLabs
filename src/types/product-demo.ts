import type { ReactNode } from "react";

export type ProductDemoStep = {
  id: string;
  label: string;
  title: string;
  description: string;
  highlights?: readonly string[];
};

export type ProductDemoPanelId =
  | "getpandit-booking-flow"
  | "vendor-journey"
  | "pandit-onboarding"
  | "ai-workflow"
  | "marketplace-lifecycle";

export type ProductDemoDefinition = {
  id: string;
  panelId: ProductDemoPanelId;
  eyebrow: string;
  title: string;
  description?: string;
  disclaimer?: string;
  steps: readonly ProductDemoStep[];
};

export type DemoPanelRenderProps = {
  stepIndex: number;
  step: ProductDemoStep;
  totalSteps: number;
};

export type DemoPanelRenderer = (props: DemoPanelRenderProps) => ReactNode;
