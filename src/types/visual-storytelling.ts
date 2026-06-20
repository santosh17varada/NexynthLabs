export type StoryVisualTheme =
  | "getpandit"
  | "ai"
  | "marketplace"
  | "cloud"
  | "lifecycle";

export type StoryVisualNode = {
  id: string;
  label: string;
  shortLabel?: string;
  x: number;
  y: number;
  accent?: "violet" | "blue" | "cyan" | "gold";
  ring?: "primary" | "secondary";
};

export type StoryVisualEdge = {
  id: string;
  from: string;
  to: string;
  primary?: boolean;
};

export type StoryVisualDefinition = {
  id: string;
  theme: StoryVisualTheme;
  eyebrow: string;
  title: string;
  description: string;
  nodes: readonly StoryVisualNode[];
  edges: readonly StoryVisualEdge[];
};
