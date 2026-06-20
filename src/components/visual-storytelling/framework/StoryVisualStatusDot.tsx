import type { ReactNode } from "react";
import { storyVizStatusPulse } from "@/components/visual-storytelling/framework/motion";
import { STORY_VISUAL_TOKENS } from "@/components/visual-storytelling/framework/tokens";
import { cn } from "@/lib/cn";

type StoryVisualStatusDotProps = {
  cx: number;
  cy: number;
  r?: number;
  reducedMotion?: boolean;
  pulse?: boolean;
  className?: string;
};

export function StoryVisualStatusDot({
  cx,
  cy,
  r = 4,
  reducedMotion = false,
  pulse = true,
  className,
}: StoryVisualStatusDotProps) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={STORY_VISUAL_TOKENS.statusLive}
      className={cn(storyVizStatusPulse(reducedMotion, pulse), className)}
    />
  );
}

type StoryVisualDetailPanelProps = {
  children: ReactNode;
  placeholder?: string;
  className?: string;
};

export function StoryVisualDetailPanel({
  children,
  placeholder,
  className,
}: StoryVisualDetailPanelProps) {
  return (
    <div
      className={cn(
        "story-viz-detail hidden border-t border-glass-border-dark/60 px-5 py-4 lg:block",
        className,
      )}
      aria-live="polite"
    >
      {children ?? (
        placeholder ? <p className="text-sm text-on-dark-muted">{placeholder}</p> : null
      )}
    </div>
  );
}

type StoryVisualGlowDefsProps = {
  id: string;
  stdDeviation?: number;
};

export function StoryVisualGlowFilter({ id, stdDeviation = 4 }: StoryVisualGlowDefsProps) {
  return (
    <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation={stdDeviation} result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  );
}
