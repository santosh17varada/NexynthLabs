export type EcosystemProductStatus =
  | "live"
  | "in_progress"
  | "planned"
  | "coming_soon";

export type EcosystemProductCategory =
  | "flagship"
  | "platform"
  | "marketplace"
  | "suite"
  | "coming_soon";

export type EcosystemProductLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type EcosystemProduct = {
  id: string;
  name: string;
  status: EcosystemProductStatus;
  category: EcosystemProductCategory;
  tagline: string;
  description: string;
  highlights: readonly string[];
  links?: readonly EcosystemProductLink[];
};
