import type { ContentStatus } from "@/types/content";

export const ADMIN_ROLES = [
  "SUPER_ADMIN",
  "ADMIN",
  "MARKETING_ADMIN",
  "SALES_ADMIN",
] as const;

export type AdminRole = (typeof ADMIN_ROLES)[number];

export type CmsModuleId =
  | "company-profile"
  | "services"
  | "products"
  | "blogs"
  | "faqs"
  | "testimonials"
  | "social-proof"
  | "seo"
  | "careers"
  | "portfolio"
  | "leads";

export type CmsAccessLevel = "none" | "read" | "write";

export type CmsPermission = {
  read: boolean;
  write: boolean;
};

export type CmsModuleDefinition = {
  id: CmsModuleId;
  label: string;
  description: string;
  href: `/admin/${CmsModuleId}`;
  configPath?: string;
  phase: 1 | 2;
  status: "ready" | "stub" | "planned";
};

export type CmsUser = {
  id: string;
  email: string;
  name: string;
  role: AdminRole;
  active: boolean;
};

export type { Lead, LeadInput, LeadSource, LeadStatus } from "@/types/lead";
export type { Lead as CmsLead } from "@/types/lead";

export type AdminSessionPayload = {
  email: string;
  role: AdminRole;
  name: string;
  exp: number;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  status: ContentStatus;
  order: number;
  updatedAt: string;
};

export type Testimonial = {
  id: string;
  author: string;
  role?: string;
  quote: string;
  status: ContentStatus;
  order: number;
  updatedAt: string;
};
