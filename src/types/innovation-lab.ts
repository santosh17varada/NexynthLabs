export type InnovationLabStatus = "concept" | "prototype" | "planned" | "live";

export type InnovationLabItem = {
  id: string;
  title: string;
  status: InnovationLabStatus;
  description: string;
  highlights: readonly string[];
  cta?: {
    label: string;
    href: string;
    external?: boolean;
  };
};

export type InnovationLabSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: readonly InnovationLabItem[];
};
