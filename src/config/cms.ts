import type {
  AdminRole,
  CmsAccessLevel,
  CmsModuleDefinition,
  CmsModuleId,
  CmsPermission,
  CmsUser,
} from "@/types/cms";

export const CMS_MODULES: readonly CmsModuleDefinition[] = [
  {
    id: "company-profile",
    label: "Company Profile",
    description: "Legal name, contact details, address, domain, and social links.",
    href: "/admin/company-profile",
    configPath: "src/config/site.ts",
    phase: 1,
    status: "ready",
  },
  {
    id: "services",
    label: "Services",
    description: "Service offerings shown on the Services page and home preview.",
    href: "/admin/services",
    configPath: "src/config/services.ts",
    phase: 1,
    status: "ready",
  },
  {
    id: "products",
    label: "Products",
    description: "Product catalog including GetPandit overview, CTAs, and capabilities.",
    href: "/admin/products",
    configPath: "src/config/products.ts",
    phase: 1,
    status: "ready",
  },
  {
    id: "blogs",
    label: "Blogs",
    description: "Blog posts, excerpts, and article sections.",
    href: "/admin/blogs",
    configPath: "src/config/blog.ts",
    phase: 1,
    status: "ready",
  },
  {
    id: "faqs",
    label: "FAQs",
    description: "Frequently asked questions for public pages.",
    href: "/admin/faqs",
    configPath: "src/config/faqs.ts",
    phase: 1,
    status: "stub",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    description: "Approved customer and partner quotes for social proof.",
    href: "/admin/testimonials",
    configPath: "src/config/testimonials.ts",
    phase: 1,
    status: "stub",
  },
  {
    id: "social-proof",
    label: "Social Proof",
    description: "Trust indicators, case study highlights, technology badges, and product readiness blocks.",
    href: "/admin/social-proof",
    configPath: "src/config/social-proof-content.ts",
    phase: 1,
    status: "stub",
  },
  {
    id: "seo",
    label: "SEO",
    description: "Default metadata, keywords, and per-page SEO entries.",
    href: "/admin/seo",
    configPath: "src/config/site.ts → seo",
    phase: 1,
    status: "ready",
  },
  {
    id: "careers",
    label: "Careers",
    description: "Job openings and careers page copy.",
    href: "/admin/careers",
    configPath: "src/config/careers.ts",
    phase: 1,
    status: "ready",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    description:
      "Case studies — project name, industry, problem, solution, technologies, business value, status, CTA, and images.",
    href: "/admin/portfolio",
    configPath: "src/config/portfolio.ts",
    phase: 1,
    status: "ready",
  },
  {
    id: "leads",
    label: "Leads",
    description: "Enquiries submitted via the public contact form.",
    href: "/admin/leads",
    configPath: "data/leads.json",
    phase: 1,
    status: "ready",
  },
] as const;

/**
 * Role → module access matrix.
 * write implies read.
 */
export const CMS_ROLE_PERMISSIONS: Record<
  AdminRole,
  Record<CmsModuleId, CmsAccessLevel>
> = {
  SUPER_ADMIN: {
    "company-profile": "write",
    services: "write",
    products: "write",
    blogs: "write",
    faqs: "write",
    testimonials: "write",
    "social-proof": "write",
    seo: "write",
    careers: "write",
    portfolio: "write",
    leads: "write",
  },
  ADMIN: {
    "company-profile": "write",
    services: "write",
    products: "write",
    blogs: "write",
    faqs: "write",
    testimonials: "write",
    "social-proof": "write",
    seo: "write",
    careers: "write",
    portfolio: "write",
    leads: "read",
  },
  MARKETING_ADMIN: {
    "company-profile": "read",
    services: "write",
    products: "write",
    blogs: "write",
    faqs: "write",
    testimonials: "write",
    "social-proof": "write",
    seo: "write",
    careers: "write",
    portfolio: "write",
    leads: "read",
  },
  SALES_ADMIN: {
    "company-profile": "read",
    services: "read",
    products: "read",
    blogs: "read",
    faqs: "read",
    testimonials: "read",
    "social-proof": "read",
    seo: "none",
    careers: "read",
    portfolio: "read",
    leads: "write",
  },
};

/**
 * Phase 1 dev users — replace with database / IdP in phase 2.
 * Passwords are never stored here; use env or secrets manager.
 */
export const CMS_DEV_USERS: readonly CmsUser[] = [
  {
    id: "usr_super",
    email: "super@nexynthlabs.com",
    name: "Super Admin",
    role: "SUPER_ADMIN",
    active: true,
  },
  {
    id: "usr_admin",
    email: "admin@nexynthlabs.com",
    name: "Admin",
    role: "ADMIN",
    active: true,
  },
  {
    id: "usr_marketing",
    email: "marketing@nexynthlabs.com",
    name: "Marketing Admin",
    role: "MARKETING_ADMIN",
    active: true,
  },
  {
    id: "usr_sales",
    email: "sales@nexynthlabs.com",
    name: "Sales Admin",
    role: "SALES_ADMIN",
    active: true,
  },
];

export function getCmsModule(id: CmsModuleId): CmsModuleDefinition | undefined {
  return CMS_MODULES.find((module) => module.id === id);
}

export function getRoleLabel(role: AdminRole): string {
  return role
    .split("_")
    .map((part) => part.charAt(0) + part.slice(1).toLowerCase())
    .join(" ");
}

export function resolvePermission(
  role: AdminRole,
  moduleId: CmsModuleId,
): CmsPermission {
  const level = CMS_ROLE_PERMISSIONS[role][moduleId];
  return {
    read: level === "read" || level === "write",
    write: level === "write",
  };
}

export function listModulesForRole(role: AdminRole): CmsModuleDefinition[] {
  return CMS_MODULES.filter((module) => resolvePermission(role, module.id).read);
}

export function findDevUserByEmail(email: string): CmsUser | undefined {
  const normalized = email.trim().toLowerCase();
  return CMS_DEV_USERS.find(
    (user) => user.active && user.email.toLowerCase() === normalized,
  );
}
