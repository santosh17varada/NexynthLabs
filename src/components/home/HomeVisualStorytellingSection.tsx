import { HomeSectionShell } from "@/components/home/HomeSectionShell";
import {
  StoryVisualBlock,
  StoryVisualBlockShell,
} from "@/components/visual-storytelling/StoryVisualBlock";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  homeVisualStories,
  homeVisualStorytellingCopy,
} from "@/config/home-visual-storytelling";

export function HomeVisualStorytellingSection() {
  const copy = homeVisualStorytellingCopy;

  return (
    <HomeSectionShell id="visual-storytelling" variant="surface">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <StoryVisualBlockShell className="mt-10 sm:mt-12">
        {homeVisualStories.map((story, index) => (
          <StoryVisualBlock
            key={story.id}
            story={story}
            reverse={index % 2 === 1}
            delay={(Math.min(index, 5) as 0 | 1 | 2 | 3 | 4 | 5)}
          />
        ))}
      </StoryVisualBlockShell>
    </HomeSectionShell>
  );
}
