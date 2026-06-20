export type KnowledgeCategory =
  | "ai"
  | "product-engineering"
  | "devops"
  | "mobile-apps"
  | "digital-transformation"
  | "spiritual-technology";

export type KnowledgeListingType = "resource" | "guide";

export type KnowledgeSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type KnowledgeArticle = {
  id: string;
  slug: string;
  listingType: KnowledgeListingType;
  category: KnowledgeCategory;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTimeMinutes: number;
  sections: readonly KnowledgeSection[];
};
