# Final Regression QA Report — Nexynth Labs Website

**Report date:** 16 June 2026  
**Prompt:** 26 — Final Regression QA  
**Application:** `nexynthlabs-website`  
**Environment:** Local production build (`npm run build` + `PORT=3001 npm run start`)  
**Automation:** `regression-qa-check.mjs`, `phase3-qa-check.mjs`, `mobile-viewport-qa.mjs`, `internal-links-qa.mjs`  
**Verdict:** **Pass** — ready for staging/production; backend integrations and legal sign-off remain pending

---

## Executive summary

| Area | Result |
| --- | --- |
| Build & lint | ✅ Pass — 83 static/SSG pages |
| All public routes (48+ probed) | ✅ Pass — HTTP 200 |
| Redirects (`/rfp`, `/press`, `/portfolio/:slug`) | ✅ Pass — 308 |
| SEO metadata | ✅ Pass — canonical, OG, Twitter on sample pages |
| FAQ JSON-LD | ✅ Pass |
| Sitemap | ✅ Pass — 54 URLs |
| robots.txt | ✅ Pass — Allow `/`, Disallow `/admin`, `/api` |
| Header & footer | ✅ Pass — present on home; nav/footer links verified |
| Forms (5 lead surfaces) | ✅ Pass — form fields present |
| Internal links (home crawl) | ✅ Pass — 47 links, 0 broken |
| Mobile viewports 360–1280 | ✅ Pass — no user-visible horizontal scroll |
| Analytics default | ✅ Pass — no third-party scripts without env |
| No public login | ✅ Pass — `/login`, `/register`, `/signup` → 404 |
| Admin protection | ✅ Pass — `/admin` redirects; API 401 |
| No fake claims | ✅ Pass — status/trust/config scan |
| GetPandit isolation | ✅ Pass — external links only; no product code changes |

---

## 1. Build & lint

| Check | Command | Result |
| --- | --- | --- |
| ESLint | `npm run lint` | ✅ No errors |
| Production build | `npm run build` | ✅ 83 pages compiled |
| TypeScript | (part of build) | ✅ Pass |

**Notable build output:** 39 static marketing routes, SSG blog (2), case studies (1), knowledge articles (12), API/admin dynamic routes, `sitemap.xml`, `robots.txt`, OG/Twitter images.

---

## 2. Route verification

### 2.1 Core public routes (HTTP 200)

All routes in `scripts/regression-qa-check.mjs` returned **200**, including:

| Category | Routes |
| --- | --- |
| Company | `/about`, `/company/*`, `/careers`, `/careers/culture`, `/roadmap` |
| Services & tech | `/services`, `/technology`, `/ai-showcase`, `/innovation-lab` |
| Products | `/products`, `/products/ecosystem`, `/getpandit` |
| Proof | `/portfolio`, `/case-studies`, `/case-studies/getpandit`, `/client-success`, `/testimonials` |
| Knowledge | `/blog`, `/blog/[slug]`, `/resources`, `/guides`, `/faq`, `/media-kit`, `/developers` |
| Lead tools | `/contact`, `/request-proposal`, `/book-consultation`, `/ai-readiness-score`, `/partners`, `/partners/portal` |
| Trust | `/status`, `/security`, `/trust`, `/events` |
| Legal | `/privacy-policy`, `/terms`, `/cookie-policy`, `/disclaimer` |
| System | `/robots.txt`, `/sitemap.xml` |

### 2.2 Redirects

| From | To | Status |
| --- | --- | --- |
| `/rfp` | `/request-proposal` | ✅ 308 |
| `/press` | `/media-kit` | ✅ 308 |
| `/portfolio/getpandit` | `/case-studies/getpandit` | ✅ 308 |

### 2.3 Access control

| Route | Expected | Result |
| --- | --- | --- |
| `/login`, `/register`, `/signup` | No public auth UI | ✅ 404 |
| `/admin` | Redirect unauthenticated | ✅ 307 |
| `/admin/login` | Staff login only | ✅ 200 |
| `GET /api/admin/leads` | Protected | ✅ 401 |

---

## 3. SEO & discoverability

| Check | Result |
| --- | --- |
| `sitemap.xml` URL count | ✅ 54 URLs |
| All Phase 3 routes in sitemap source | ✅ `phase3-qa-check.mjs` static pass |
| `robots.txt` allow/disallow/sitemap | ✅ Pass |
| Per-page canonical + OG + Twitter (7-page sample) | ✅ Pass |
| FAQPage JSON-LD on `/faq` | ✅ Pass |
| Admin excluded from sitemap | ✅ Pass |

---

## 4. Header, footer, and navigation

| Check | Result |
| --- | --- |
| `<header>` on home | ✅ Pass |
| `<footer>` on home | ✅ Pass |
| Main nav links (8 sampled) | ✅ Pass |
| Footer knowledge/lead/trust links (6 sampled) | ✅ Pass |
| Language switcher in header | ✅ Present (en / te / hi) |
| AI assistant widget | ✅ Present (placeholder) |
| Viewport meta tag | ✅ Pass |

---

## 5. Forms

| Page | API | Result |
| --- | --- | --- |
| `/contact` | `POST /api/enquiry` | ✅ Form fields present |
| `/request-proposal` | `POST /api/request-proposal` | ✅ Pass |
| `/book-consultation` | `POST /api/book-consultation` | ✅ Pass |
| `/ai-readiness-score` | `POST /api/ai-readiness-score` | ✅ Pass |
| `/partners` | `POST /api/enquiry` | ✅ Pass |

**Note:** End-to-end form submission with lead persistence was not re-tested in this regression run (covered in prior phase QA). Re-verify after PostgreSQL migration.

---

## 6. Mobile & responsive (360 / 390 / 430 / 768 / 1024 / 1280)

**Tool:** `scripts/mobile-viewport-qa.mjs` (Playwright Chromium)

| Width | Pages tested | Horizontal scroll | Header | Footer |
| --- | --- | --- | --- | --- |
| 360px | 8 | ✅ None | ✅ | ✅ |
| 390px | 8 | ✅ None | ✅ | ✅ |
| 430px | 8 | ✅ None | ✅ | ✅ |
| 768px | 8 | ✅ None | ✅ | ✅ |
| 1024px | 8 | ✅ None | ✅ | ✅ |
| 1280px | 8 | ✅ None | ✅ | ✅ |

**Pages:** `/`, `/contact`, `/faq`, `/getpandit`, `/request-proposal`, `/partners/portal`, `/media-kit`, `/developers`

**Advisory:** At 1024–1280px, `documentElement.scrollWidth` can exceed viewport due to wide desktop nav DOM, but `body { overflow-x: clip }` prevents user horizontal scrolling. No action required for launch; optional follow-up to audit nav density at `xl` breakpoint.

**Manual still recommended:** iOS Safari + Android Chrome on real devices before production cutover — see [Mobile QA Checklist](./09-mobile-qa-checklist.md).

---

## 7. Analytics, honesty, GetPandit boundary

| Check | Result |
| --- | --- |
| No GTM / GA / Meta / LinkedIn scripts on home (default env) | ✅ Pass |
| No SOC 2 / ISO certified / fake uptime patterns in key configs | ✅ Pass |
| `/status` — no “100% uptime” or “live monitoring enabled” | ✅ Pass |
| `/getpandit` links to `getpandit.com` externally | ✅ Pass |
| No GetPandit product repo changes | ✅ N/A — corporate site only |
| Testimonials labeled placeholder | ✅ Visible on home |

---

## 8. Broken links

| Scope | Links checked | Broken |
| --- | --- | --- |
| Internal hrefs on home page | 47 | 0 |

---

## 9. Pending items (not blocking staging)

| Item | Priority | Doc |
| --- | --- | --- |
| PostgreSQL leads (`DATABASE_URL`) | P0 before multi-instance prod | [14](./14-lead-crm-lite-guide.md) |
| SMTP lead notifications | P0 ops | [12](./12-integrations-guide.md) |
| Cookie consent + analytics go-live | P1 | [15](./15-analytics-dashboard-guide.md) |
| ESP newsletter sync | P1 | [36](./36-newsletter-guide.md) |
| Calendly / calendar booking | P2 | [24](./24-book-consultation-guide.md) |
| Live status monitoring | P2 | [20](./20-status-page-guide.md) |
| Database CMS editors | P2 | [44](./44-admin-cms-future-guide.md) |
| Full Telugu / Hindi content | P3 | [41](./41-multilingual-readiness-guide.md) |
| AI assistant API | P3 | [42](./42-ai-assistant-placeholder-guide.md) |
| Legal counsel sign-off | P0 launch gate | [legal.md](../legal.md) |

---

## 10. Risks

| Risk | Severity | Mitigation |
| --- | --- | --- |
| `data/leads.json` on serverless multi-instance | **High** | Migrate to PostgreSQL before scale |
| Analytics enabled without cookie consent | **High** | Keep env IDs unset until legal approval |
| Placeholder testimonials misread as real | **Medium** | Labels present; replace before PR use |
| Status page read as live SLA | **Medium** | Disclaimers on page; upgrade to real probes in Phase 4 |
| Wide desktop nav at 1024px DOM width | **Low** | No user scroll; optional CSS audit |
| Middleware deprecation warning (Next.js 16) | **Low** | Track Next.js `proxy` migration |

---

## 11. Next roadmap (post-regression)

| Phase | Focus | Target |
| --- | --- | --- |
| **4a — Ops** | PostgreSQL leads, SMTP, auth hardening | Q3 2026 |
| **4b — Compliance** | Cookie consent, analytics production | Q3 2026 |
| **4c — CMS** | Blog + SEO editors, publish pipeline | Q3–Q4 2026 |
| **4d — Content** | Full i18n translations, real testimonials | Q4 2026 |
| **5 — Product** | AI assistant API, developer portal sandbox | 2027 |

See [Future Roadmap](./08-future-roadmap.md) and [Phase 3 Feature Deck](./43-phase-3-feature-deck.md).

---

## 12. Automation commands

```bash
cd nexynthlabs-website
npm run lint
npm run build
PORT=3001 npm run start   # separate terminal

# Full regression (HTTP)
QA_BASE_URL=http://localhost:3001 npm run qa:regression
QA_BASE_URL=http://localhost:3001 npm run qa:phase3

# Mobile viewports (requires: npx playwright install chromium)
QA_BASE_URL=http://localhost:3001 npm run qa:viewport

# Internal links from home
QA_BASE_URL=http://localhost:3001 node scripts/internal-links-qa.mjs

# Static-only (no server)
QA_SKIP_HTTP=1 npm run qa:phase3
```

---

## 13. Sign-off

| Role | Name | Date | Status |
| --- | --- | --- | --- |
| Engineering (automated) | Regression scripts | 16 Jun 2026 | ✅ Pass |
| QA (manual devices) | | | ☐ Pending |
| Legal | | | ☐ Pending |
| DevOps (production env) | | | ☐ Pending |

---

## Related documents

- [Phase 3 Final QA Report](./28-phase-3-final-qa-report.md) — feature-level Phase 3 sign-off
- [Phase 2 Final QA Report](./11-final-qa-report.md)
- [Mobile QA Checklist](./09-mobile-qa-checklist.md)
- [Deployment Guide](./05-deployment-guide.md)
- [Future Roadmap](./08-future-roadmap.md)
