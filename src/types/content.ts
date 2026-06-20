/**
 * CMS content document shapes.
 * Phase 1: static config. Phase 2+: persisted via API/DB.
 */

export type ContentStatus = "draft" | "published";

export type PageSection = {
  id: string;
  type: "hero" | "about" | "product" | "contact" | "custom";
  title: string;
  body: string;
  status: ContentStatus;
  updatedAt: string;
};

export type CmsPage = {
  slug: string;
  title: string;
  description: string;
  sections: PageSection[];
  status: ContentStatus;
  updatedAt: string;
};
