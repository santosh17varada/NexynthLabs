import type { ReactNode } from "react";
import { InteractiveStoryDiagram } from "@/components/visual-storytelling/InteractiveStoryDiagram";
import { MotionReveal } from "@/motion/MotionReveal";
import type { StoryVisualDefinition } from "@/types/visual-storytelling";
import { cn } from "@/lib/cn";

type StoryVisualBlockProps = {
  story: StoryVisualDefinition;
  reverse?: boolean;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
};

export function StoryVisualBlock({
  story,
  reverse = false,
  delay = 0,
}: StoryVisualBlockProps) {

  return (
    <MotionReveal variant="section" delay={delay} className="scroll-mt-28">
      <article
        id={story.id}
        className={cn(
          "grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <StoryVisualCopy story={story} />
        <InteractiveStoryDiagram story={story} />
      </article>
    </MotionReveal>
  );
}

function StoryVisualCopy({ story }: { story: StoryVisualDefinition }) {
  return (
    <div className="min-w-0">
      <p className="text-eyebrow text-electric-cyan">{story.eyebrow}</p>
      <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {story.title}
      </h3>
      <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
        {story.description}
      </p>
      <p className="mt-4 text-xs text-muted">
        Hover or focus nodes on desktop to trace connected paths.
      </p>
    </div>
  );
}

export function StoryVisualBlockShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-16 sm:space-y-20 lg:space-y-24", className)}>{children}</div>;
}
