import type { ReactNode } from "react";

export type ShowcaseDeviceType = "browser" | "mobile" | "dashboard" | "tablet" | "plain";

export type ShowcaseScreenshotKind = "web" | "mobile" | "admin" | "dashboard";

export type ProductMockupAsset = {
  imageSrc: string;
  imageAlt: string;
  urlBar?: string;
  caption?: string;
};

export type ShowcaseVisual =
  | {
      type: "screenshot";
      kind: ShowcaseScreenshotKind;
      device: ShowcaseDeviceType;
      asset: ProductMockupAsset;
    }
  | {
      type: "preview";
      previewId: string;
      device: ShowcaseDeviceType;
      urlBar?: string;
    }
  | {
      type: "before-after";
      before: ProductMockupAsset;
      after: ProductMockupAsset;
      beforeLabel?: string;
      afterLabel?: string;
      device?: ShowcaseDeviceType;
    };

export type ProductShowcaseCta = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProductEcosystemSurface = {
  id: string;
  label: string;
  description: string;
  metricId: string;
};

export type ProductShowcaseReadinessMetric = {
  id: string;
  title: string;
  description: string;
  status: string;
  statusLabel: string;
};

export type ProductShowcaseFeature = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets?: readonly string[];
  visual: ShowcaseVisual;
  readiness?: string;
};

export type WalkthroughStep = {
  id: string;
  step?: string;
  title: string;
  description: string;
  visual: ShowcaseVisual;
};

export type ProductShowcaseDefinition = {
  productId: string;
  badge: string;
  title: string;
  tagline: string;
  summary: string;
  domainNote: string;
  disclaimer: string;
  mockup: ProductMockupAsset;
  heroOverlay?: ShowcaseVisual;
  ctas: {
    explore: ProductShowcaseCta;
    partner?: ProductShowcaseCta;
  };
  ecosystemTitle: string;
  ecosystemDescription: string;
  ecosystemSurfaces: readonly ProductEcosystemSurface[];
  readinessTitle: string;
  readinessDescription: string;
  readinessMetrics: readonly ProductShowcaseReadinessMetric[];
  features?: readonly ProductShowcaseFeature[];
  walkthrough?: {
    eyebrow: string;
    title: string;
    description?: string;
    steps: readonly WalkthroughStep[];
  };
  gallery?: {
    eyebrow: string;
    title: string;
    description?: string;
    items: readonly ShowcaseVisual[];
  };
};

export type ShowcasePreviewRegistry = Record<string, () => ReactNode>;
