export type TechnologySectionId =
  | "ai"
  | "web"
  | "mobile"
  | "cloud"
  | "devops"
  | "integrations"
  | "security";

export type TechnologyCapability = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: readonly string[];
};

export type TechnologySection = {
  id: TechnologySectionId;
  eyebrow: string;
  title: string;
  description: string;
  capabilities: readonly TechnologyCapability[];
};
