import type { ReactNode } from "react";
import { blogPosts } from "@/config/blog";
import { careersIntro, jobOpenings } from "@/config/careers";
import { CMS_MODULES } from "@/config/cms";
import { faqs } from "@/config/faqs";
import { testimonials } from "@/config/testimonials";
import { siteConfig } from "@/config/site";
import {
  ConfigPreview,
  EmptyModuleState,
  ModulePermissionNotice,
  ModuleStatusBanner,
  TodoList,
} from "@/components/admin/ModuleViews";
import { resolvePermission } from "@/config/cms";
import type { AdminRole, CmsModuleId } from "@/types/cms";

const MODULE_TODOS: Record<CmsModuleId, string[]> = {
  "company-profile": [
    "Add form UI with validation for company fields",
    "Persist to database and trigger static rebuild webhook",
    "Audit log for profile changes (SUPER_ADMIN only)",
  ],
  services: [
    "CRUD API for services collection",
    "Drag-and-drop ordering",
    "Draft/publish per service item",
  ],
  products: [
    "Product editor with external URL validation",
    "Feature list repeater field",
    "Keep GetPandit domain separate from corporate site",
  ],
  blogs: [
    "Rich text or MDX editor",
    "Slug uniqueness check",
    "Scheduled publishing",
  ],
  faqs: [
    "FAQ schema for public FAQ page",
    "Category grouping",
    "Reorder and draft states",
  ],
  testimonials: [
    "Approval workflow for new testimonials",
    "Optional photo upload",
    "Homepage carousel selection",
  ],
  "social-proof": [
    "Block composer for homepage and product pages",
    "Approved-only quote publishing guardrails",
    "Case study highlight picker with featured flag",
  ],
  seo: [
    "Per-route OG image upload",
    "Preview SERP snippet",
    "Robots/noindex overrides per page",
  ],
  careers: [
    "Job opening CRUD with open/closed status",
    "Application intake separate from contact leads",
    "Integration with ATS (optional)",
  ],
  portfolio: [
    "CRUD editor for case study fields and image upload",
    "Draft/publish with public /case-studies visibility",
    "Featured flag for homepage and /portfolio promotion",
    "Keep GetPandit product links external to getpandit.com",
  ],
  leads: [
    "Store enquiry API submissions in database",
    "Assign leads to SALES_ADMIN users",
    "Export CSV and status workflow (new → in progress → closed)",
  ],
};

export function getAdminModuleParams() {
  return CMS_MODULES.map((module) => ({ module: module.id }));
}

export function renderAdminModuleContent(
  moduleId: CmsModuleId,
  role: AdminRole,
) {
  const cmsModule = CMS_MODULES.find((item) => item.id === moduleId);
  if (!cmsModule) return null;

  const permission = resolvePermission(role, moduleId);
  const todos = MODULE_TODOS[moduleId];

  const shell = (content: ReactNode) => (
  <div className="space-y-6">
    <ModuleStatusBanner module={cmsModule} />
    <ModulePermissionNotice module={cmsModule} role={role} />
    {content}
    {permission.write && <TodoList items={todos} />}
  </div>
  );

  switch (moduleId) {
    case "company-profile":
      return shell(
        <ConfigPreview
          title="Current company profile"
          items={[
            { label: "Company name", value: siteConfig.companyName },
            { label: "Brand name", value: siteConfig.brandName },
            { label: "Tagline", value: siteConfig.tagline },
            { label: "Email", value: siteConfig.email },
            { label: "Phone", value: siteConfig.phoneDisplay },
            { label: "Address", value: siteConfig.address.full },
            { label: "Domain", value: siteConfig.domain },
          ]}
        />,
      );

    case "services":
      return shell(
        <ConfigPreview
          title={`Services (${siteConfig.services.length})`}
          items={siteConfig.services.flatMap((service) => [
            { label: service.title, value: service.description },
            {
              label: "Benefits",
              value: service.benefits.join(" · "),
            },
            { label: "CTA", value: service.cta.label },
          ])}
        />,
      );

    case "products":
      return shell(
        <ConfigPreview
          title={`Products (${siteConfig.products.length})`}
          items={siteConfig.products.flatMap((product) => [
            { label: product.name, value: product.positioning },
            { label: "Status", value: product.status },
            { label: "External URL", value: product.href },
            { label: "CTAs", value: product.ctas.map((c) => c.label).join(", ") },
          ])}
        />,
      );

    case "blogs":
      return shell(
        <ConfigPreview
          title={`Blog posts (${blogPosts.length})`}
          items={blogPosts.map((post) => ({
            label: post.title,
            value: `${post.excerpt} · ${post.publishedAt}`,
          }))}
        />,
      );

    case "faqs":
      return shell(
        faqs.length > 0 ? (
          <ConfigPreview
            title={`FAQs (${faqs.length})`}
            items={faqs.map((item) => ({
              label: item.question,
              value: `${item.category} · ${item.published ? "published" : "draft"}`,
            }))}
          />
        ) : (
          <EmptyModuleState
            title="No FAQs yet"
            description="FAQ content will be managed here. Public visitors will see published items only — no login required."
          />
        ),
      );

    case "testimonials":
      return shell(
        testimonials.length > 0 ? (
          <ConfigPreview
            title={`Testimonials (${testimonials.length})`}
            items={testimonials.map((item) => ({
              label: item.name,
              value: `${item.status} · ${item.category}`,
            }))}
          />
        ) : (
          <EmptyModuleState
            title="No testimonials yet"
            description="Add approved testimonials for marketing pages. Draft items stay hidden from the public site."
          />
        ),
      );

    case "social-proof":
      return shell(
        <EmptyModuleState
          title="Social proof blocks"
          description="Compose trust indicators, case study highlights, technology badges, and product readiness blocks from src/config/social-proof-content.ts. Only approved quotes publish publicly."
        />,
      );

    case "seo":
      return shell(
        <>
          <ConfigPreview
            title="SEO defaults"
            items={[
              { label: "Default title", value: siteConfig.seo.defaultTitle },
              {
                label: "Default description",
                value: siteConfig.seo.defaultDescription,
              },
              {
                label: "Keywords",
                value: siteConfig.seo.keywords.join(", "),
              },
            ]}
          />
          <ConfigPreview
            title={`Per-page SEO (${Object.keys(siteConfig.seo.pages).length} routes)`}
            items={Object.entries(siteConfig.seo.pages).map(([key, page]) => ({
              label: key,
              value: `${page.title} — ${page.description}`,
            }))}
          />
        </>,
      );

    case "careers":
      return shell(
        <>
          <ConfigPreview
            title="Careers intro"
            items={[
              { label: "Title", value: careersIntro.title },
              { label: "Description", value: careersIntro.description },
            ]}
          />
          <ConfigPreview
            title={`Open roles (${jobOpenings.length})`}
            items={jobOpenings.map((job) => ({
              label: job.title,
              value: `${job.department} · ${job.location} · ${job.type}`,
            }))}
          />
        </>,
      );

    case "portfolio":
      return null;

    case "leads":
      return null;

    default:
      return null;
  }
}
