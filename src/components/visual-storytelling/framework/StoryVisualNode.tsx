import type { ReactNode } from "react";
import { storyVizNodeActive } from "@/components/visual-storytelling/framework/motion";
import { STORY_VISUAL_TOKENS } from "@/components/visual-storytelling/framework/tokens";
import { cn } from "@/lib/cn";

type StoryVisualNodeCircleProps = {
  cx: number;
  cy: number;
  r: number;
  accent: string;
  active: boolean;
  isHovered?: boolean;
  reducedMotion?: boolean;
  glowRing?: boolean;
  glowOpacity?: { idle: number; active: number };
  fill?: string;
  className?: string;
};

export function StoryVisualNodeCircle({
  cx,
  cy,
  r,
  accent,
  active,
  isHovered = false,
  reducedMotion = false,
  glowRing = false,
  glowOpacity = { idle: 0.08, active: 0.2 },
  fill,
  className,
}: StoryVisualNodeCircleProps) {
  const nodeFill = fill ?? (active ? STORY_VISUAL_TOKENS.nodeFillActive : STORY_VISUAL_TOKENS.nodeFill);

  return (
    <>
      {glowRing ? (
        <circle
          cx={cx}
          cy={cy}
          r={active ? r + 12 : r + 6}
          fill={accent}
          opacity={active ? glowOpacity.active : glowOpacity.idle}
          className="transition-opacity duration-200"
        />
      ) : null}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={isHovered ? STORY_VISUAL_TOKENS.nodeFillActive : nodeFill}
        stroke={accent}
        strokeWidth={isHovered ? 2.5 : active ? 2 : 1.5}
        strokeOpacity={active ? 0.95 : 0.4}
        className={cn(
          "transition-all duration-200",
          storyVizNodeActive(reducedMotion, isHovered),
          className,
        )}
      />
    </>
  );
}

type StoryVisualNodeRectProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  rx?: number;
  accent: string;
  active: boolean;
  fill?: string;
  strokeOpacity?: number;
  strokeWidth?: number;
  activeStrokeWidth?: number;
  className?: string;
};

export function StoryVisualNodeRect({
  x,
  y,
  width,
  height,
  rx = 14,
  accent,
  active,
  fill,
  strokeOpacity,
  strokeWidth = 1.25,
  activeStrokeWidth = 2,
  className,
}: StoryVisualNodeRectProps) {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={rx}
      fill={fill ?? (active ? STORY_VISUAL_TOKENS.nodeFillActive : STORY_VISUAL_TOKENS.nodeFill)}
      stroke={accent}
      strokeWidth={active ? activeStrokeWidth : strokeWidth}
      strokeOpacity={strokeOpacity ?? (active ? 0.9 : 0.45)}
      className={cn("transition-all duration-200", className)}
    />
  );
}

export function StoryVisualNodeLabel({
  x,
  y,
  children,
  fontSize = 12,
  fontWeight = 600,
  fill = STORY_VISUAL_TOKENS.textPrimary,
  className,
}: {
  x: number;
  y: number;
  children: ReactNode;
  fontSize?: number;
  fontWeight?: number;
  fill?: string;
  className?: string;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fill={fill}
      fontSize={fontSize}
      fontWeight={fontWeight}
      className={className}
    >
      {children}
    </text>
  );
}

export function StoryVisualNodeSubLabel({
  x,
  y,
  children,
  visible = true,
}: {
  x: number;
  y: number;
  children: ReactNode;
  visible?: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fill={STORY_VISUAL_TOKENS.textSecondary}
      fontSize={9}
      opacity={visible ? 1 : 0}
      className="transition-opacity duration-200"
    >
      {children}
    </text>
  );
}
