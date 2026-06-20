import { cn } from "@/lib/cn";

export const STORY_VIZ_CLASSES = {
  diagram: "story-viz-diagram hidden h-full w-full lg:block",
  diagramWide:
    "story-viz-diagram hidden h-full min-h-[16rem] w-full sm:min-h-[18rem] lg:block lg:min-h-[20rem] xl:min-h-[22rem]",
  mobile: "story-viz-mobile flex flex-col gap-0 px-4 py-6 lg:hidden",
  mobileSurface: "story-viz-mobile px-4 py-6 lg:hidden",
  node: "story-viz-node",
  connection: "story-viz-connection transition-opacity duration-200",
  connectionFlow: "story-viz-connection--flow",
  travelDot: "story-viz-travel-dot",
  midpointPulse: "story-viz-midpoint-pulse",
  nodeActive: "story-viz-node--active",
  statusPulse: "story-viz-status--pulse",
} as const;

export function storyVizConnectionFlow(reducedMotion: boolean, enabled = true): string {
  return !reducedMotion && enabled ? STORY_VIZ_CLASSES.connectionFlow : "";
}

export function storyVizNodeActive(reducedMotion: boolean, isActive: boolean): string {
  return isActive && !reducedMotion ? STORY_VIZ_CLASSES.nodeActive : "";
}

export function storyVizStatusPulse(reducedMotion: boolean, enabled = true): string {
  return !reducedMotion && enabled ? STORY_VIZ_CLASSES.statusPulse : "";
}

export function storyVizConnectionClasses(
  reducedMotion: boolean,
  options: {
    active: boolean;
    animate?: boolean;
    className?: string;
  },
): string {
  return cn(
    STORY_VIZ_CLASSES.connection,
    storyVizConnectionFlow(reducedMotion, options.animate ?? options.active),
    options.className,
  );
}

export function storyVizConnectionOpacity(
  active: boolean,
  hasHover: boolean,
  levels: { idle?: number; dim?: number; active?: number } = {},
): number {
  const idle = levels.idle ?? 0.55;
  const dim = levels.dim ?? 0.2;
  const activeOpacity = levels.active ?? 0.95;
  if (active) return activeOpacity;
  if (hasHover) return dim;
  return idle;
}
