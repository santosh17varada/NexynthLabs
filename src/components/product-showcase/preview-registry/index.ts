import { aiPreviewRegistry } from "@/components/product-showcase/preview-registry/ai";
import { getPanditPreviewRegistry } from "@/components/product-showcase/preview-registry/getpandit";
import type { ShowcasePreviewRegistry } from "@/types/product-showcase";

export const showcasePreviewRegistries: Record<string, ShowcasePreviewRegistry> = {
  getpandit: getPanditPreviewRegistry,
  ai: aiPreviewRegistry,
};

export function getShowcasePreviewRegistry(productId: string): ShowcasePreviewRegistry {
  return showcasePreviewRegistries[productId] ?? {};
}
