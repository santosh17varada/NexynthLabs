import { PageSection } from "@/components/layout/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VisualStoryRenderer } from "@/components/visual-story/VisualStoryRenderer";
import type { VisualStoryDefinition } from "@/types/visual-story";

type VisualStorySectionProps = {
  story: VisualStoryDefinition;
  variant?: "default" | "surface" | "muted" | "dark";
  className?: string;
};

export function VisualStorySection({
  story,
  variant = "default",
  className,
}: VisualStorySectionProps) {
  const isDark = variant === "dark";
  const isArchitecture = story.variant === "architecture-journey";

  return (
    <PageSection id={story.id} variant={variant} className={className}>
      {isArchitecture ? (
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <SectionHeading
            eyebrow={story.eyebrow}
            title={story.title}
            description={story.description}
            tone={isDark ? "dark" : "light"}
          />
          <VisualStoryRenderer story={story} />
        </div>
      ) : (
        <>
          <SectionHeading
            eyebrow={story.eyebrow}
            title={story.title}
            description={story.description}
            tone={isDark ? "dark" : "light"}
          />
          <div className="mt-10">
            <VisualStoryRenderer story={story} />
          </div>
        </>
      )}
    </PageSection>
  );
}

type VisualStoryStackProps = {
  stories: readonly VisualStoryDefinition[];
  variants?: readonly ("default" | "surface" | "muted" | "dark")[];
};

export function VisualStoryStack({
  stories,
  variants = ["surface", "default"],
}: VisualStoryStackProps) {
  return (
    <>
      {stories.map((story, index) => (
        <VisualStorySection
          key={story.id}
          story={story}
          variant={variants[index] ?? variants[variants.length - 1] ?? "default"}
        />
      ))}
    </>
  );
}
