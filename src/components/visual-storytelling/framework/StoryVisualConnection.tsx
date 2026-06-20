import {
  storyVizConnectionClasses,
  storyVizConnectionOpacity,
  STORY_VIZ_CLASSES,
} from "@/components/visual-storytelling/framework/motion";
import { cn } from "@/lib/cn";

type StoryVisualConnectionProps = {
  active: boolean;
  hasHover: boolean;
  reducedMotion: boolean;
  animate?: boolean;
  animationDelay?: number;
  stroke?: string;
  strokeWidth?: number;
  activeStrokeWidth?: number;
  className?: string;
  opacityLevels?: { idle?: number; dim?: number; active?: number };
} & (
  | { x1: number; y1: number; x2: number; y2: number; d?: never }
  | { d: string; x1?: never; y1?: never; x2?: never; y2?: never }
);

export function StoryVisualConnection({
  active,
  hasHover,
  reducedMotion,
  animate,
  animationDelay,
  stroke = "#06b6d4",
  strokeWidth = 1.5,
  activeStrokeWidth = 2.5,
  className,
  opacityLevels,
  ...geometry
}: StoryVisualConnectionProps) {
  const shared = {
    fill: "none" as const,
    stroke,
    strokeWidth: active ? activeStrokeWidth : strokeWidth,
    strokeLinecap: "round" as const,
    strokeOpacity: storyVizConnectionOpacity(active, hasHover, opacityLevels),
    className: storyVizConnectionClasses(reducedMotion, { active, animate, className }),
    style: animationDelay !== undefined ? { animationDelay: `${animationDelay}ms` } : undefined,
  };

  if ("d" in geometry && geometry.d) {
    return <path d={geometry.d} {...shared} />;
  }

  return (
    <line
      x1={geometry.x1}
      y1={geometry.y1}
      x2={geometry.x2}
      y2={geometry.y2}
      className={cn(STORY_VIZ_CLASSES.connection, shared.className)}
      stroke={shared.stroke}
      strokeWidth={shared.strokeWidth}
      strokeLinecap={shared.strokeLinecap}
      strokeOpacity={shared.strokeOpacity}
      style={shared.style}
    />
  );
}
