export type CultureSectionItem = {
  title: string;
  description: string;
};

export type CultureSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: readonly CultureSectionItem[];
};

export type CareersOpenRolesMode = "listings" | "placeholder";

export type CareersNavItem = {
  id: string;
  label: string;
};

export type CareersValueCard = {
  id: string;
  title: string;
  description: string;
};

export type CareersBenefit = {
  id: string;
  title: string;
  description: string;
};

export type CareersHiringStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};
