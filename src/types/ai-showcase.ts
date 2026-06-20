export type AiShowcaseCta = {
  label: string;
  href: string;
};

export type AiShowcaseItem = {
  id: string;
  title: string;
  description: string;
  highlights: readonly string[];
  cta?: AiShowcaseCta;
};

export type AiShowcaseSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: readonly AiShowcaseItem[];
};

export type AiShowcaseMetric = {
  label: string;
  value: string;
};
