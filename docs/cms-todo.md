# CMS — Phase 3 TODO

> **Consolidated guide:** [nexynth-labs/44-admin-cms-future-guide.md](./nexynth-labs/44-admin-cms-future-guide.md) — architecture, schema, migration plan, and module backlog.

Phase 1 delivered structure; Phase 2 delivered marketing pages, CRM lite, and analytics readiness. This backlog covers **database persistence and in-browser editing**.

## Priority 1 — Persistence

- [ ] Add `DATABASE_URL` (PostgreSQL recommended)
- [ ] Prisma/Drizzle schema for:
  - `cms_users` (email, role, password hash, active)
  - `cms_revisions` (module, document JSON, status, author)
  - `cms_leads` (enquiry form fields, status, assigned_to)
- [ ] Migrate `POST /api/enquiry` to insert into `cms_leads`
- [ ] Replace `CMS_DEV_USERS` with database seed

## Priority 2 — Module editors

- [ ] **Company Profile** — form for `siteConfig` fields with validation
- [ ] **Services** — CRUD + reorder
- [ ] **Products** — CRUD; validate external URLs
- [ ] **Blogs** — MDX/rich text editor, draft/publish
- [ ] **FAQs** — CRUD + public `/faqs` page
- [ ] **Testimonials** — CRUD + homepage section
- [ ] **SEO** — per-page editor + OG image upload
- [ ] **Careers** — job opening CRUD
- [ ] **Leads** — inbox, assign to SALES_ADMIN, status workflow

## Priority 3 — Auth hardening

- [ ] Bcrypt/argon2 password hashes (never plain `ADMIN_PASSWORD` in prod)
- [ ] SUPER_ADMIN user management UI (`/admin/users`)
- [ ] Optional SSO (Google Workspace for `@nexynthlabs.com`)
- [ ] Rate limiting on `/api/admin/login`
- [ ] Rotate `ADMIN_SESSION_SECRET`; shorter TTL + refresh tokens

## Priority 4 — Publish pipeline

- [ ] Draft vs published content (`ContentStatus` in `src/types/content.ts`)
- [ ] Preview URLs for draft content (admin-only token)
- [ ] Webhook to rebuild static site on publish (`CMS_WEBHOOK_REBUILD_URL`)
- [ ] Or ISR `revalidateTag` per module

## Priority 5 — Public integration

- [ ] Replace static config imports with `getPublishedContent()` data layer
- [ ] FAQ page consuming `faqs` collection
- [ ] Testimonials section on home page
- [ ] Keep fallbacks in `src/config/site.ts` for local dev without DB

## Role checks to enforce in phase 2 APIs

Every `PATCH/POST/DELETE` under `/api/admin/cms/*` must call:

```ts
requireModuleAccess(moduleId, "write");
```

SALES_ADMIN must not receive SEO write endpoints. MARKETING_ADMIN must not delete leads.

## Security reminders

- Never expose admin routes in `sitemap.xml` (already excluded)
- `robots: noindex` on all `/admin` pages (done)
- No public signup endpoint
- Audit log for SUPER_ADMIN actions

## Estimated order of work

1. Database + leads module (unblocks sales team)
2. Blog + SEO editors (unblocks marketing)
3. Company profile + services + products
4. FAQs + testimonials + careers
5. User management + SSO
