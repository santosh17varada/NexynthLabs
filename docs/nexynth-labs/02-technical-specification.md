# Technical Specification — Nexynth Labs Website

**Version:** 2.0  
**Last updated:** June 2026  
**Stack:** Next.js 16.2 · React 19 · TypeScript 5 · Tailwind CSS v4

---

## 1. System overview

| Property | Value |
| --- | --- |
| Application type | Server-rendered / static-first web app |
| Runtime | Node.js 20+ |
| Package manager | npm |
| Rendering | App Router; SSG for public pages; dynamic API routes |
| Data store (phase 3) | File-based `data/leads.json`; PostgreSQL planned phase 4 |
| Auth | HMAC-signed HTTP-only session cookie for admin |

---

## 2. Repository structure

```
nexynthlabs-website/
├── data/                    # Runtime data (gitignored)
│   └── leads.json           # Contact form submissions
├── docs/
│   └── nexynth-labs/        # This documentation set
├── public/                  # Static assets
├── src/
│   ├── app/
│   │   ├── (site)/          # Public route group (Header + Footer)
│   │   ├── admin/           # CMS (protected)
│   │   ├── api/             # REST handlers
│   │   ├── layout.tsx       # Root layout, fonts, viewport
│   │   ├── globals.css      # Tailwind v4 theme
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── opengraph-image.tsx
│   │   └── twitter-image.tsx
│   ├── components/
│   │   ├── admin/           # CMS shell, leads table, login
│   │   ├── cards/           # Blog, job, product, service cards
│   │   ├── contact/
│   │   ├── forms/           # LeadCaptureForm
│   │   ├── layout/          # Header, Footer
│   │   ├── i18n/            # LocaleProvider, LanguageSwitcher
│   │   ├── ai-assistant/    # AiAssistantWidget
│   │   ├── media-kit/       # Press assets sections
│   │   ├── developers/      # API vision sections
│   │   ├── legal/
│   │   ├── products/
│   │   ├── services/
│   │   └── ui/              # Button, Card, Container, PageHero, etc.
│   ├── config/              # Content & CMS configuration
│   ├── lib/                 # SEO, auth, leads, CMS helpers
│   ├── types/               # TypeScript contracts
│   └── middleware.ts        # Admin route protection
├── .env.example
├── package.json
└── README.md
```

---

## 3. Configuration files

| File | Purpose |
| --- | --- |
| `src/config/site-values.ts` | Core literals (company name, domain, email, phone, address) |
| `src/config/header-navigation.ts` | Grouped header IA — top-level items, dropdowns, CTA |
| `src/config/home-capabilities.ts` | Homepage capabilities groups (4 pillars, bullets from services) |
| `src/config/og-share.ts` | Open Graph / Twitter card copy (aligned with homepage hero) |
| `src/config/footer-navigation.ts` | Footer link groups and homepage final CTA copy |
| `src/config/home-innovation-lab.ts` | Homepage Innovation Lab tracks and status legend |
| `src/config/home-case-studies.ts` | Homepage case study + success story section |
| `src/config/home-founder.ts` | Homepage founder vision copy and CTA |
| `src/config/home-why.ts` | Homepage Why Nexynth Labs reasons and honest copy |
| `src/config/home.ts` | Homepage hero copy, story-flow sections, trust badges |
| `src/config/site.ts` | `siteConfig` — navigation (flat derivative), SEO, services/products imports |
| `src/config/services.ts` | Service catalog (10 services, categories, CTAs) |
| `src/config/products.ts` | Product catalog (GetPandit + capabilities, CTAs) |
| `src/config/founder-story.ts` | Founder story page — vision, roadmap, placeholder note |
| `src/config/technology-excellence.ts` | Technology excellence — capability sections and cards |
| `src/config/roadmap.ts` | Public roadmap — milestone items and status groups |
| `src/config/status-page.ts` | System status — service health placeholders |
| `src/config/security-trust.ts` | Security & trust center sections and compliance roadmap |
| `src/config/knowledge.ts` | Knowledge center articles (resources & guides) |
| `src/config/resource-downloads.ts` | Brochure/deck download cards on `/resources` |
| `src/config/events.ts` | Events & webinars page sections and cards |
| `src/config/newsletter.ts` | Newsletter signup copy and mailto helper |
| `src/config/contact.ts` | Service interest options, URL prefill helpers |
| `src/config/legal.ts` | Privacy, Terms, Cookie, Disclaimer content |
| `src/config/blog.ts` | Blog posts |
| `src/config/careers.ts` | Job openings |
| `src/config/about.ts` | About page copy |
| `src/config/cms.ts` | CMS modules, roles, permissions, dev users |
| `src/config/faqs.ts` | FAQ center — categories and Q&A |
| `src/config/testimonials.ts` | Testimonials — quotes, categories, status labels |
| `src/config/portfolio.ts` | Portfolio overview copy + case study data |
| `src/config/client-success.ts` | Anonymous client success stories |
| `src/config/request-proposal.ts` | RFP / request proposal form config |
| `src/config/ai-showcase.ts` | AI Showcase page sections, cards, and CTAs |
| `src/config/getpandit-metrics.ts` | GetPandit honest platform readiness metrics |
| `src/config/getpandit-showcase.ts` | Homepage flagship showcase copy, ecosystem, readiness ids |
| `src/config/partners.ts` | Investors & partners page content and opportunity cards |
| `src/config/partner-portal.ts` | Partner portal readiness page |
| `src/config/book-consultation.ts` | Consultation topics and form config |
| `src/config/ai-readiness-score.ts` | Assessment questions, tiers, scoring |
| `src/config/innovation-lab.ts` | Innovation Lab sections and status labels |
| `src/config/media-kit.ts` | Press kit assets, boilerplate, brand colors |
| `src/config/developers.ts` | Developers / API vision sections |
| `src/config/leadership.ts` | Executive profiles, founder message, embed copy |
| `src/config/company-leadership.ts` | Deprecated re-export of `leadership.ts` |
| `src/config/company-vision.ts` | Vision pillars and principles |
| `src/config/careers-culture.ts` | Culture page sections |
| `src/config/product-ecosystem.ts` | Product ecosystem status cards |
| `src/config/leads-crm.ts` | Lead CRM Lite statuses, fields, storage mode |
| `src/config/analytics.ts` | Planned analytics events and env key catalog |
| `src/config/i18n.ts` | Locale definitions (en, te, hi) and readiness metadata |
| `src/messages/` | Shell UI message catalogs per locale |
| `src/config/whatsapp.ts` | WhatsApp Business env keys, CTA copy, click-to-chat readiness |
| `src/config/integrations.ts` | Third-party integration registry (placeholders) |

### Integration libraries (stubs)

| Path | Purpose |
| --- | --- |
| `src/types/integrations.ts` | Integration types and lifecycle |
| `src/lib/integrations/index.ts` | `getIntegration()`, `getIntegrationsRuntime()` |
| `src/lib/integrations/env.ts` | Env resolution |
| `src/lib/integrations/crm.ts` | CRM sync placeholder |
| `src/lib/integrations/messaging.ts` | WhatsApp / SMS placeholders |
| `src/lib/whatsapp/index.ts` | Click-to-chat URL builder and CTA visibility |
| `src/lib/analytics/` | `trackPlannedEvent()`, env-gated script readiness |
| `src/lib/i18n/` | Locale storage helpers; `getMessages()` via `src/messages/` |
| `src/components/i18n/` | `LocaleProvider`, `LanguageSwitcher`, readiness banner |
| `src/config/ai-assistant.ts` | AI assistant placeholder copy, use cases, env keys |
| `src/components/ai-assistant/` | `AiAssistantWidget`, `AiAssistantSection` |
| `src/lib/integrations/payments.ts` | Payment session placeholder |

See [Integrations Guide](./12-integrations-guide.md).

---

## 4. API specification

### 4.1 Public

#### `POST /api/enquiry`

Creates a lead from the contact form.

**Request body (JSON):**

```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (optional)",
  "company": "string (optional)",
  "serviceInterest": "string (optional, slug — stored as interestType)",
  "sourcePage": "string (optional, e.g. /contact)",
  "message": "string (required)"
}
```

**Responses:**

| Status | Body |
| --- | --- |
| `201` | `{ "message": "Enquiry received." }` |
| `400` | `{ "message": "<validation error>" }` |
| `500` | `{ "message": "Unable to save enquiry." }` |

**Side effects:** Writes to `data/leads.json`; calls `sendLeadNotificationEmail()` (stub).

#### `POST /api/request-proposal`

RFP intake — `source: request_proposal`. See [Request Proposal Guide](./33-request-proposal-guide.md).

#### `POST /api/book-consultation`

Consultation request — `source: book_consultation`. See [Book Consultation Guide](./24-book-consultation-guide.md).

#### `POST /api/ai-readiness-score`

Assessment submission with tier — `source: ai_readiness_score`. See [AI Readiness Score Guide](./23-ai-readiness-score-guide.md).

#### `POST /api/newsletter`

Newsletter signup — `source: newsletter`. See [Newsletter Guide](./36-newsletter-guide.md).

#### `POST /api/whatsapp-cta`

Logs WhatsApp CTA clicks — `source: whatsapp_cta`. See [WhatsApp Business Guide](./13-whatsapp-business-guide.md).

---

### 4.2 Admin (session required)

#### `POST /api/admin/login`

**Body:** `{ "email": string, "password": string }`

**Success:** Sets `nexynth_admin_session` cookie; returns `{ user, role }`.

**Failure:** `401` invalid credentials.

#### `POST /api/admin/logout`

Clears session cookie.

#### `GET /api/admin/session`

Returns current session payload or `401`.

#### `GET /api/admin/leads`

Returns `{ leads: Lead[] }`. Requires leads module read permission.

#### `PATCH /api/admin/leads/[id]`

**Body:** `{ "status": "new" | "in_progress" | "closed" }`

Requires leads write permission (`SUPER_ADMIN`, `SALES_ADMIN`).

---

## 5. Authentication

| Component | File |
| --- | --- |
| Session signing (Node) | `src/lib/auth.ts` |
| Edge cookie validation | `src/lib/auth-edge.ts` |
| Cookie name constant | `src/lib/auth-constants.ts` |
| Route guard | `src/middleware.ts` |

**Cookie:** `nexynth_admin_session` — HMAC-SHA256 signed JSON containing `email`, `name`, `role`, `exp`.

**Phase 1 password:** Single shared `ADMIN_PASSWORD` env var validated for all `CMS_DEV_USERS` emails.

**Protected paths:** `/admin/*` except `/admin/login`.

---

## 6. Data models

### 6.1 Lead (`src/types/lead.ts`)

```typescript
type LeadStatus = "new" | "contacted" | "qualified" | "not_fit" | "closed";
type LeadSource =
  | "contact-form"
  | "partner-form"
  | "whatsapp_cta"
  | "ai_readiness_score"
  | "book_consultation"
  | "request_proposal"
  | "newsletter"
  | "careers"
  | "other";

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  interestType: string;
  sourcePage: string;
  message: string;
  source: LeadSource;
  status: LeadStatus;
  notes: string;
  createdAt: string;
};
```

**Storage:** `src/lib/leads/store.ts` — `data/leads.json` (file backend). PostgreSQL TODO — see [Lead CRM Lite Guide](./14-lead-crm-lite-guide.md).

### 6.2 CMS types (`src/types/cms.ts`)

- `AdminRole`: `SUPER_ADMIN` | `ADMIN` | `MARKETING_ADMIN` | `SALES_ADMIN`
- `CmsModuleId`: module identifiers matching `/admin/[module]` routes
- `CmsPermission`: `{ read: boolean; write: boolean }`

### 6.3 Content types (`src/types/content.ts`)

Draft/publish shapes for future CMS (`ContentStatus`, etc.).

---

## 7. SEO implementation

| Feature | Implementation |
| --- | --- |
| Default metadata | `siteMetadata` in `src/lib/seo.ts` |
| Page metadata | `createPageMetadataFromKey()` / `createPageMetadata()` |
| Canonical URLs | `alternates.canonical` per page |
| Open Graph | Full `openGraph` object + dynamic image route |
| Twitter | `summary_large_image` |
| JSON-LD | Organization + WebSite `@graph` in site layout; WebPage on legal; Article on blog |
| Sitemap | `src/app/sitemap.ts` |
| Robots | `src/app/robots.ts` — disallows `/admin/`, `/api/` |

See [SEO Guide](./07-seo-guide.md).

---

## 8. UI & styling

| Item | Detail |
| --- | --- |
| CSS framework | Tailwind CSS v4 (`@import "tailwindcss"` in `globals.css`) |
| Fonts | Geist Sans + Geist Mono via `next/font` |
| Theme tokens | CSS variables in `:root` (background, primary, accent, etc.) |
| Components | Server components by default; `"use client"` for Header, forms, admin |
| Mobile utilities | `.mobile-cta-stack` (full-width CTAs ≤767px), `.mobile-bleed-guard`, `--site-header-offset`, safe-area padding, `min-h-11` tap targets |

---

## 9. Build & scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

**Build output:** ~35 routes including static pages, dynamic OG images, API routes, admin.

---

## 10. Dependencies

| Package | Version | Purpose |
| --- | --- | --- |
| `next` | 16.2.9 | Framework |
| `react` / `react-dom` | 19.2.4 | UI |
| `tailwindcss` | ^4 | Styling |
| `typescript` | ^5 | Type safety |
| `eslint` + `eslint-config-next` | ^9 / 16.2.9 | Linting |

No database, ORM, or external CMS SDK in phase 1.

---

## 11. Security considerations

| Risk | Mitigation |
| --- | --- |
| Admin brute force | Phase 3: rate limiting; use strong passwords now |
| Session tampering | HMAC signature with `ADMIN_SESSION_SECRET` |
| XSS | React escaping; no `dangerouslySetInnerHTML` except JSON-LD |
| Lead data exposure | Admin API requires session + role check |
| Crawler indexing admin | `robots: noindex` on admin pages; `robots.txt` disallow |
| Secrets in repo | `.env.local` gitignored; `.env.example` has placeholders only |

---

## 12. Testing (recommended)

| Type | Command / approach |
| --- | --- |
| Lint | `npm run lint` |
| Build | `npm run build` |
| Manual mobile QA | [Mobile QA Checklist](./09-mobile-qa-checklist.md) |
| SEO validation | Google Rich Results Test, Search Console |
| E2E (future) | Playwright for contact form + admin login |

---

## 13. Related documents

- [Architecture Diagrams](./10-architecture-diagrams.md) — Mermaid system and flow diagrams
- [Architecture Document](./03-architecture.md)
- [Environment Variables Guide](./06-environment-variables.md)
- [Deployment Guide](./05-deployment-guide.md)
