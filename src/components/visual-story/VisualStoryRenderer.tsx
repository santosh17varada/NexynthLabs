import {
  StoryAnimatedPathway,
  StoryArchitectureJourney,
  StoryCustomerJourney,
  StoryProblemSolutionOutcome,
  StoryProcessFlow,
  StoryTimeline,
} from "@/components/visual-story/VisualStoryPrimitives";
import type { VisualStoryDefinition } from "@/types/visual-story";

export function VisualStoryRenderer({ story }: { story: VisualStoryDefinition }) {
  switch (story.variant) {
    case "timeline":
      return story.steps ? <StoryTimeline steps={story.steps} /> : null;
    case "process-flow":
      return story.steps ? <StoryProcessFlow steps={story.steps} /> : null;
    case "architecture-journey":
      return story.nodes ? <StoryArchitectureJourney nodes={story.nodes} /> : null;
    case "animated-pathway":
      return story.steps ? <StoryAnimatedPathway steps={story.steps} /> : null;
    case "customer-journey":
      return story.steps ? <StoryCustomerJourney steps={story.steps} /> : null;
    case "problem-solution-outcome":
      return story.columns ? <StoryProblemSolutionOutcome columns={story.columns} /> : null;
    default:
      return null;
  }
}
