export type VisionHighlight = {
  id: string;
  title: string;
  description: string;
};

export type VisionTheme = {
  id: string;
  title: string;
  description: string;
};

export type VisionPhase = {
  id: string;
  period: string;
  title: string;
  items: readonly string[];
};

export type VisionNavItem = {
  id: string;
  label: string;
};
