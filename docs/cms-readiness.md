# CMS Readiness

> **Updated:** Phase 1 admin structure is implemented. See [Admin User Guide](./nexynth-labs/04-admin-user-guide.md) and [cms-todo.md](./cms-todo.md).

## Current state (phase 1)

- **Public site:** static config in `src/config/site.ts` — no public login
- **Admin:** `/admin` with role-based module access (read-only previews)
- **Roles:** `SUPER_ADMIN`, `ADMIN`, `MARKETING_ADMIN`, `SALES_ADMIN`
- **Modules:** Company Profile, Services, Products, Blogs, FAQs, Testimonials, SEO, Careers, Leads

## Content model

| Type | File |
| --- | --- |
| Company, services, products, SEO | `src/config/site.ts` |
| Blogs | `src/config/blog.ts` |
| Careers | `src/config/careers.ts` |
| FAQs (stub) | `src/config/faqs.ts` |
| Testimonials (stub) | `src/config/testimonials.ts` |
| CMS roles & permissions | `src/config/cms.ts` |
| Document shapes | `src/types/content.ts`, `src/types/cms.ts` |

## Phase 2 path

1. Database-backed content + leads inbox
2. In-browser editors per module
3. Draft/publish workflow
4. Webhook rebuild or ISR on publish

Full backlog: [cms-todo.md](./cms-todo.md)

## What not to build on the public site

- Public registration or login
- User accounts for visitors
- Embedding GetPandit auth on NexynthLabs.com

## Migration from config to CMS

1. Map `siteConfig` fields to CMS documents
2. Introduce `getSiteContent()` that reads published DB rows (fallback to config in dev)
3. Keep `src/config/site.ts` as seed defaults
