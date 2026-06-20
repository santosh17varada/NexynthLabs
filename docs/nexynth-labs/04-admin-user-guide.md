# Admin User Guide — Nexynth Labs CMS

**Audience:** Internal Nexynth Labs staff  
**URL:** https://nexynthlabs.com/admin (or `http://localhost:3000/admin` locally)

---

## 1. Overview

The Nexynth Labs CMS is an **internal admin area** for previewing site content, managing leads, and (in future phases) editing published content. It is **not** available to the public — there is no signup page.

**Phase 1 capabilities:**

- Log in with assigned email and password
- View dashboard and permitted modules
- Preview read-only content sourced from config files
- View and update lead status (role-dependent)

**Phase 1 limitations:**

- Content cannot be edited in the browser yet — changes require developer updates to config files and redeploy
- FAQs and Testimonials modules show stub previews only

---

## 2. Logging in

1. Open **/admin/login**
2. Enter your assigned email (see table below)
3. Enter the admin password (provided by your system administrator via secure channel — not by email)
4. Click **Sign in**

On success you are redirected to the dashboard at `/admin`.

### Dev / staging accounts

| Email | Role | Typical use |
| --- | --- | --- |
| `super@nexynthlabs.com` | Super Admin | Full access, leads management |
| `admin@nexynthlabs.com` | Admin | Full content preview; leads read-only |
| `marketing@nexynthlabs.com` | Marketing Admin | Marketing modules |
| `sales@nexynthlabs.com` | Sales Admin | Leads inbox |

> **Security:** Change `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET` before any production deployment. Never use `changeme` in production.

### Troubleshooting login

| Issue | Action |
| --- | --- |
| "Invalid credentials" | Verify email spelling; confirm password with admin |
| Redirect loop | Clear cookies for the site; try incognito |
| Page not found | Confirm you are on `/admin/login` not `/login` |

---

## 3. Dashboard

After login, the dashboard shows:

- Your name and role
- Modules you are allowed to access (sidebar on desktop; horizontal scroll on mobile)
- Quick summary of available modules

Click any module in the sidebar to open it.

---

## 4. Roles and permissions

### 4.1 Permission levels

| Level | Meaning |
| --- | --- |
| **Read** | View module preview |
| **Write** | Edit content or leads (write implies read) |
| **None** | Module hidden |

### 4.2 Role matrix

| Module | Super Admin | Admin | Marketing | Sales |
| --- | --- | --- | --- | --- |
| Company Profile | Write | Write | Read | Read |
| Services | Write | Write | Write | Read |
| Products | Write | Write | Write | Read |
| Blogs | Write | Write | Write | Read |
| FAQs | Write | Write | Write | Read |
| Testimonials | Write | Write | Write | Read |
| SEO | Write | Write | Write | **None** |
| Careers | Write | Write | Write | Read |
| Leads | Write | Read | Read | Write |

### 4.3 Practical guidance by role

**Super Admin** — Use for full leads management, future user administration, and all content modules.

**Admin** — Use to preview all content before releases; view leads but do not change status.

**Marketing Admin** — Use for services, products, blogs, SEO, and careers previews. Coordinate with developers for actual content updates in phase 1.

**Sales Admin** — Use **Leads** module daily. Update status as enquiries progress. Cannot access SEO module.

---

## 5. Module guide

### 5.1 Company Profile

**Route:** `/admin/company-profile`  
**Source:** `src/config/site.ts`

Preview of legal name, brand, tagline, email, phone, address, domain, and social links.

**Phase 1:** To change values, request a developer update to `src/config/site-values.ts` and `site.ts`.

---

### 5.2 Services

**Route:** `/admin/services`  
**Source:** `src/config/services.ts`

Preview of all service offerings with categories, benefits, and CTAs.

---

### 5.3 Products

**Route:** `/admin/products`  
**Source:** `src/config/products.ts`

Preview of product catalog including GetPandit capabilities and external CTAs.

> GetPandit product behaviour is managed on `getpandit.com` — this module only covers corporate marketing copy.

---

### 5.4 Blogs

**Route:** `/admin/blogs`  
**Source:** `src/config/blog.ts`

Preview of published blog posts and excerpts.

---

### 5.5 FAQs

**Route:** `/admin/faqs`  
**Status:** Stub — no public FAQ page yet.

---

### 5.6 Testimonials

**Route:** `/admin/testimonials`  
**Status:** Stub — not displayed on home page yet.

---

### 5.7 SEO

**Route:** `/admin/seo`  
**Source:** `src/config/site.ts → seo`

Preview of default title, description, keywords, and per-page SEO entries.

**Sales Admin:** This module is not visible to your role.

---

### 5.8 Careers

**Route:** `/admin/careers`  
**Source:** `src/config/careers.ts`

Preview of job openings shown on `/careers`.

---

### 5.9 Leads

**Route:** `/admin/leads`  
**Source:** `data/leads.json` (contact form submissions)

#### Viewing leads

The leads table shows:

- Name, email, phone, company
- Service interest
- Message (truncated)
- Status and submission date

#### Updating status

If you have **write** access:

1. Open `/admin/leads`
2. Find the lead row
3. Change status: **New** → **In progress** → **Closed**

Statuses help the sales team track follow-up without external tools (phase 1).

#### Lead sources

Leads originate from:

- `/contact` enquiry form (`POST /api/enquiry`)

Email notifications are **not** sent automatically yet — check the CMS regularly or wait for phase 2 SMTP integration.

---

## 6. Logging out

Click **Log out** in the admin header. This clears your session cookie.

Always log out on shared computers.

---

## 7. Requesting content changes (phase 1)

Until in-browser editing is available:

1. Identify the module and desired change
2. Open a ticket or message to the development team with:
   - Module name (e.g. Services, Blog)
   - Exact copy or structural change
   - Target go-live date
3. Developer updates `src/config/*.ts`
4. Site is rebuilt and deployed
5. Verify on production after deploy

---

## 8. Security reminders

- Do not share admin passwords in chat or email
- Do not expose `/admin` URLs in public marketing
- Report suspicious login attempts to Super Admin
- Leads contain personal data — handle per company privacy policy

---

## 9. Related documents

- [Functional Specification](./01-functional-specification.md) — admin requirements
- [Environment Variables Guide](./06-environment-variables.md) — `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`
- [Future Roadmap](./08-future-roadmap.md) — when editing will be available
- [Admin & CMS Future Guide](./44-admin-cms-future-guide.md) — database CMS, editors, migration plan
- [Leads detail](../leads.md) — API and storage notes
