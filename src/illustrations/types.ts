export type IllustrationCategory =
  | "getpandit"
  | "ai"
  | "engineering"
  | "cloud"
  | "marketplace"
  | "analytics";

export type IllustrationVariant = "hero" | "flow" | "compact";

export type IllustrationTone = "light" | "dark";

export type IllustrationTheme = {
  bg: string;
  grid: string;
  nodeFill: string;
  nodeStroke: string;
  nodeAccentFill: string;
  nodeAccentStroke: string;
  text: string;
  textMuted: string;
  line: string;
  accent: string;
  accentSecondary: string;
  glow: string;
};

export type IllustrationMeta = {
  category: IllustrationCategory;
  title: string;
  description: string;
  variants: readonly IllustrationVariant[];
};

export type NexynthIllustrationProps = {
  category: IllustrationCategory;
  variant?: IllustrationVariant;
  tone?: IllustrationTone;
  framed?: boolean;
  className?: string;
  title?: string;
};

export type CategoryIllustrationProps = {
  variant: IllustrationVariant;
  tone: IllustrationTone;
  title?: string;
  className?: string;
};
