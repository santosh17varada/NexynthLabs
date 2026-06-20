import { STORY_VIZ_CLASSES } from "@/components/visual-storytelling/framework/motion";
import { STORY_VISUAL_TOKENS } from "@/components/visual-storytelling/framework/tokens";
import { cn } from "@/lib/cn";

type StoryVisualTravelDotProps = {
  path: string;
  duration: number;
  r?: number;
  filter?: string;
  className?: string;
  animationDelay?: number;
};

export function StoryVisualTravelDot({
  path,
  duration,
  r = 3.5,
  filter,
  className,
  animationDelay,
}: StoryVisualTravelDotProps) {
  return (
    <circle
      r={r}
      fill={STORY_VISUAL_TOKENS.travelDot}
      filter={filter}
      className={cn(STORY_VIZ_CLASSES.travelDot, className)}
      style={animationDelay !== undefined ? { animationDelay: `${animationDelay}ms` } : undefined}
    >
      <animateMotion dur={`${duration}s`} repeatCount="indefinite" path={path} />
    </circle>
  );
}

type StoryVisualMidpointPulseProps = {
  cx: number;
  cy: number;
  r?: number;
  animationDelay?: number;
};

export function StoryVisualMidpointPulse({
  cx,
  cy,
  r = 3,
  animationDelay,
}: StoryVisualMidpointPulseProps) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={STORY_VISUAL_TOKENS.travelDot}
      className={STORY_VIZ_CLASSES.midpointPulse}
      style={animationDelay !== undefined ? { animationDelay: `${animationDelay}ms` } : undefined}
    />
  );
}
