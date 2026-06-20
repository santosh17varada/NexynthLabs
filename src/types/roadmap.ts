export type RoadmapCategory = "now" | "next" | "future";

export type RoadmapItemReadiness = "live" | "in_progress" | "planned" | "exploratory";

export type RoadmapItemScope = "product" | "corporate" | "platform" | "integration";

export type RoadmapItemLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type RoadmapItem = {
  id: string;
  title: string;
  category: RoadmapCategory;
  readiness: RoadmapItemReadiness;
  product: string;
  scope: RoadmapItemScope;
  summary: string;
  /** Omit unless a real date is approved for public display */
  targetDate?: string;
  links?: readonly RoadmapItemLink[];
};

export type RoadmapCategoryGroup = {
  category: RoadmapCategory;
  label: string;
  description: string;
};

/** @deprecated Use RoadmapItemReadiness */
export type RoadmapItemStatus = RoadmapItemReadiness;

/** @deprecated Use RoadmapCategoryGroup */
export type RoadmapGroup = RoadmapCategoryGroup & { status: RoadmapCategory };
