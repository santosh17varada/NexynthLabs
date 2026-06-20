import { VisualStoryStack } from "@/components/visual-story/VisualStorySection";
import { homeVisualStories } from "@/config/visual-story";

export function HomeVisualStorySection() {
  return (
    <VisualStoryStack stories={homeVisualStories} variants={["surface", "default"]} />
  );
}
