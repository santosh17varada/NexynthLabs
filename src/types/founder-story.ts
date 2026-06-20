export type FounderStoryPillar = {
  id: string;
  title: string;
  description: string;
};

export type FounderStoryRoadmapPhase = {
  id: string;
  period: string;
  title: string;
  items: readonly string[];
};

export type FounderStoryCta = {
  label: string;
  href: string;
};

export type FounderNavItem = {
  id: string;
  label: string;
};

export type FounderExperienceHighlight = {
  id: string;
  label: string;
  description: string;
};

export type FounderLesson = {
  id: string;
  title: string;
  description: string;
};
