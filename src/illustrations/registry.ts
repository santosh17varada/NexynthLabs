import { AiIllustration } from "@/illustrations/categories/ai";
import { AnalyticsIllustration } from "@/illustrations/categories/analytics";
import { CloudIllustration } from "@/illustrations/categories/cloud";
import { EngineeringIllustration } from "@/illustrations/categories/engineering";
import { GetPanditIllustration } from "@/illustrations/categories/getpandit";
import { MarketplaceIllustration } from "@/illustrations/categories/marketplace";
import type {
  CategoryIllustrationProps,
  IllustrationCategory,
  IllustrationVariant,
} from "@/illustrations/types";
import type { ComponentType } from "react";

export const illustrationRegistry: Record<
  IllustrationCategory,
  ComponentType<CategoryIllustrationProps>
> = {
  getpandit: GetPanditIllustration,
  ai: AiIllustration,
  engineering: EngineeringIllustration,
  cloud: CloudIllustration,
  marketplace: MarketplaceIllustration,
  analytics: AnalyticsIllustration,
};

export function getIllustrationComponent(category: IllustrationCategory) {
  return illustrationRegistry[category];
}

export function resolveIllustrationVariant(
  category: IllustrationCategory,
  variant?: IllustrationVariant,
): IllustrationVariant {
  if (variant) return variant;
  return "hero";
}
