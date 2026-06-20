"use client";

import type { ReactNode } from "react";
import { STORY_VIZ_CLASSES } from "@/components/visual-storytelling/framework/motion";
import { cn } from "@/lib/cn";

type StoryVisualInteractiveGroupProps = {
  ariaLabel: string;
  children: ReactNode;
  role?: "button" | "group" | "presentation";
  tabIndex?: number;
  className?: string;
  onMouseEnter?: () => void;
  onFocus?: () => void;
  onMouseLeave?: () => void;
  onBlur?: () => void;
  "aria-hidden"?: boolean;
};

export function StoryVisualInteractiveGroup({
  ariaLabel,
  children,
  role = "button",
  tabIndex = role === "button" ? 0 : undefined,
  className,
  onMouseEnter,
  onFocus,
  onMouseLeave,
  onBlur,
  "aria-hidden": ariaHidden,
}: StoryVisualInteractiveGroupProps) {
  return (
    <g
      className={cn(STORY_VIZ_CLASSES.node, className)}
      role={role}
      tabIndex={tabIndex}
      aria-label={ariaHidden ? undefined : ariaLabel}
      aria-hidden={ariaHidden}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      onMouseLeave={onMouseLeave}
      onBlur={onBlur}
    >
      {children}
    </g>
  );
}
