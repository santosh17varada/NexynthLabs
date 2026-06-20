import { createElement } from "react";
import { IllustrationFrame } from "@/illustrations/primitives";
import {
  illustrationRegistry,
  resolveIllustrationVariant,
} from "@/illustrations/registry";
import type { NexynthIllustrationProps } from "@/illustrations/types";
import { illustrationCatalog } from "@/config/illustrations";
import { cn } from "@/lib/cn";

export function NexynthIllustration({
  category,
  variant,
  tone = "light",
  framed = true,
  className,
  title,
}: NexynthIllustrationProps) {
  const resolvedVariant = resolveIllustrationVariant(category, variant);
  const meta = illustrationCatalog.find((item) => item.category === category);
  const label = title ?? meta?.title ?? category;

  const svg = createElement(illustrationRegistry[category], {
    variant: resolvedVariant === "flow" ? "hero" : resolvedVariant,
    tone,
    title: label,
    className: cn(!framed && className),
  });

  if (!framed) {
    return svg;
  }

  return (
    <IllustrationFrame tone={tone} className={className}>
      {svg}
    </IllustrationFrame>
  );
}

export { illustrationCatalog };
