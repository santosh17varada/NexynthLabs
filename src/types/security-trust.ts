export type SecurityTrustPage = "security" | "trust";

export type SecurityTrustSection = {
  id: string;
  page: SecurityTrustPage;
  title: string;
  summary: string;
  points: readonly string[];
  links?: readonly { label: string; href: string }[];
};

export type ComplianceRoadmapItem = {
  id: string;
  title: string;
  status: "in_review" | "planned" | "future";
  description: string;
};
