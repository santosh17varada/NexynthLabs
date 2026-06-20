import type { ReactNode } from "react";
import { STORY_VIZ_CLASSES } from "@/components/visual-storytelling/framework/motion";
import { cn } from "@/lib/cn";

type StoryVisualDiagramProps = {
  viewBox: { width: number; height: number };
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "wide";
  /** When true, diagram renders on all breakpoints (not only lg+). */
  alwaysVisible?: boolean;
};

export function StoryVisualDiagram({
  viewBox,
  ariaLabel,
  children,
  className,
  variant = "default",
  alwaysVisible = false,
}: StoryVisualDiagramProps) {
  return (
    <svg
      viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      className={cn(
        alwaysVisible ? "story-viz-diagram block h-full w-full" : variant === "wide" ? STORY_VIZ_CLASSES.diagramWide : STORY_VIZ_CLASSES.diagram,
        className,
      )}
      role="img"
      aria-label={ariaLabel}
    >
      {children}
    </svg>
  );
}
