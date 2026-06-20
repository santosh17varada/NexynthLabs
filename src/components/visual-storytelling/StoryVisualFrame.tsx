"use client";

import type { ReactNode } from "react";
import type { StoryVisualTheme } from "@/types/visual-storytelling";
import { cn } from "@/lib/cn";

export {
  accentStroke,
  isEdgeHighlighted,
  isNodeHighlighted,
  STORY_VISUAL_ACCENTS,
} from "@/components/visual-storytelling/framework";

const themeFrameClasses: Record<StoryVisualTheme, string> = {
  getpandit:
    "border-electric-violet/25 bg-gradient-to-br from-midnight via-[#141e38] to-[#0a1628]",
  ai: "border-electric-blue/25 bg-gradient-to-br from-[#0c1428] via-midnight to-[#12082a]",
  marketplace:
    "border-electric-cyan/20 bg-gradient-to-br from-midnight via-[#0f1f2e] to-[#101828]",
  cloud: "border-electric-blue/20 bg-gradient-to-br from-[#0a1220] via-navy-deep to-midnight",
  lifecycle:
    "border-electric-violet/20 bg-gradient-to-br from-[#101828] via-midnight to-[#0c1830]",
};

type StoryVisualFrameProps = {
  theme: StoryVisualTheme;
  children: ReactNode;
  className?: string;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
};

export function StoryVisualFrame({
  theme,
  children,
  className,
  onPointerEnter,
  onPointerLeave,
}: StoryVisualFrameProps) {
  return (
    <div
      className={cn(
        "story-visual-frame relative overflow-hidden rounded-ds-xl border shadow-floating",
        themeFrameClasses[theme],
        className,
      )}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_65%)]"
        aria-hidden="true"
      />
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}
