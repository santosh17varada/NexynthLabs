export type VisualStoryVariant =
  | "timeline"
  | "process-flow"
  | "architecture-journey"
  | "animated-pathway"
  | "customer-journey"
  | "problem-solution-outcome";

export type StoryStep = {
  id: string;
  label: string;
  title?: string;
  description?: string;
  step?: string;
};

export type StoryNode = {
  id: string;
  label: string;
  accent?: boolean;
};

export type StoryPsoColumn = {
  id: string;
  title: string;
  description: string;
  items?: readonly string[];
};

export type VisualStoryDefinition = {
  id: string;
  variant: VisualStoryVariant;
  eyebrow: string;
  title: string;
  description?: string;
  steps?: readonly StoryStep[];
  nodes?: readonly StoryNode[];
  columns?: readonly StoryPsoColumn[];
  layout?: "horizontal" | "vertical";
};
