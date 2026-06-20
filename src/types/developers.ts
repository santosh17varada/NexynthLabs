export type DeveloperSectionId =
  | "api-vision"
  | "coming-soon-apis"
  | "getpandit-integrations"
  | "webhooks-planned"
  | "documentation-planned";

export type DeveloperReadinessStatus = "vision" | "planned" | "coming-soon" | "in-design";

export type DeveloperCapabilityItem = {
  id: string;
  title: string;
  status: DeveloperReadinessStatus;
  description: string;
  highlights: readonly string[];
  cta?: {
    label: string;
    href: string;
    external?: boolean;
  };
};

export type DeveloperVisionSection = {
  id: "api-vision";
  eyebrow: string;
  title: string;
  description: string;
  summary: string;
  principles: readonly string[];
};

export type DeveloperItemsSection = {
  id: Exclude<DeveloperSectionId, "api-vision">;
  eyebrow: string;
  title: string;
  description: string;
  items: readonly DeveloperCapabilityItem[];
};

export type DeveloperSection = DeveloperVisionSection | DeveloperItemsSection;

export type DeveloperNavSection = {
  id: DeveloperSectionId;
  title: string;
};
