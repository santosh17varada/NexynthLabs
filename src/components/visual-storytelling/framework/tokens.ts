export type StoryVisualAccent = "violet" | "blue" | "cyan" | "gold";

export const STORY_VISUAL_ACCENTS: Record<StoryVisualAccent, string> = {
  violet: "#8b5cf6",
  blue: "#3b82f6",
  cyan: "#06b6d4",
  gold: "#d4a017",
};

/** @deprecated Use STORY_VISUAL_ACCENTS */
export const accentStroke = STORY_VISUAL_ACCENTS;

export const STORY_VISUAL_TOKENS = {
  nodeFill: "#0f1b2d",
  nodeFillActive: "#1e3a5f",
  nodeFillMuted: "#141e38",
  nodeFillNested: "#121c38",
  textPrimary: "#f8f7f4",
  textSecondary: "#a8b4c4",
  textMuted: "#6b7a90",
  travelDot: "#f8f7f4",
  statusLive: "#22c55e",
  connectionIdle: 0.55,
  connectionDim: 0.2,
  connectionActive: 0.95,
} as const;

export function storyVisualAccent(color?: StoryVisualAccent | string): string {
  if (!color) return STORY_VISUAL_ACCENTS.blue;
  return STORY_VISUAL_ACCENTS[color as StoryVisualAccent] ?? color;
}
