# Phase 3 Feature Deck — Nexynth Labs Website

**Audience:** Leadership, product, marketing, engineering, sales  
**Product:** `nexynthlabs.com` corporate site (not GetPandit app)  
**Last updated:** June 2026  
**Build:** ~83 static/SSG public routes · `npm run lint` / `npm run build` passing

---

## 1. Executive summary

Nexynth Labs ships a **config-driven, mobile-first corporate website** that introduces the company, captures leads, and links to **GetPandit** on its own domain. Phase 3 extended the site from core marketing into **trust, growth, and readiness** surfaces — without public login, fake metrics, or in-site product transactions.

| Principle | What it means |
| --- | --- |
| **GetPandit separation** | Booking and accounts live on `getpandit.com` only |
| **Honest labels** | Planned, prototype, and coming-soon — never implied live |
| **Config-first** | Content in `src/config/*` until database CMS ships |
| **Lead capture** | Forms → `data/leads.json` + admin inbox (SMTP TODO) |

---

## 2. Delivered feature map

### Company & credibility

| Feature | Route(s) | Value |
| --- | --- | --- |
| Company pages | `/about`, `/company/*`, `/careers`, `/roadmap` | Story, leadership placeholders, vision, hiring |
| Public roadmap | `/roadmap` | Transparent milestone status |
| Status page | `/status` | Config health placeholders (8 services) |
| Security & trust | `/security`, `/trust` | Practices + compliance direction |
| Media kit | `/media-kit` | Press assets, boilerplate, brand colors |

### Services & engineering

| Feature | Route(s) | Value |
| --- | --- | --- |
| Services catalog | `/services` | 10 services, category groups |
| Technology excellence | `/technology` | 7 capability areas |
| AI showcase | `/ai-showcase` | Practical AI use cases |
| Innovation Lab | `/innovation-lab` | R&D with Concept / Prototype / Planned / Live |
| Developers vision | `/developers` | Future API & webhook roadmap |

### Products & proof

| Feature | Route(s) | Value |
| --- | --- | --- |
| Products | `/products`, `/products/ecosystem` | Catalog + ecosystem honesty labels |
| GetPandit marketing | `/getpandit` | Flagship CTA to product domain |
| Portfolio | `/portfolio` | Work overview |
| Case studies | `/case-studies`, `/case-studies/[slug]` | GetPandit story published |
| Client success | `/client-success` | Anonymous qualitative stories |
| Testimonials | `/testimonials` + home | Placeholder-only quotes |

### Growth & conversion

| Feature | Route(s) | Value |
| --- | --- | --- |
| Contact | `/contact` | Enquiry + WhatsApp CTA |
| Request proposal | `/request-proposal` | RFP intake |
| Book consultation | `/book-consultation` | Topic-based discovery calls |
| AI Readiness Score | `/ai-readiness-score` | 10-question self-assessment + tiers |
| Partners | `/partners`, `/partners/portal` | Investor + partner tracks |
| Newsletter | Home, Blog, Resources, Footer | Lead capture (ESP TODO) |

### Knowledge & support

| Feature | Route(s) | Value |
| --- | --- | --- |
| Blog | `/blog`, `/blog/[slug]` | Company news |
| Resources & guides | `/resources`, `/guides` | Articles + download cards |
| FAQ center | `/faq` | Search + FAQPage schema |
| Events | `/events` | Webinars & meetups (enquiry-led) |

### Platform readiness (no live backends)

| Feature | Surface | Value |
| --- | --- | --- |
| Analytics | Env-gated GA/GTM/Meta/LinkedIn + `trackPlannedEvent()` | Conversion plumbing |
| Multilingual | Language switcher (en / te / hi) | i18n structure; English content today |
| AI assistant | “Ask Nexynth AI” widget | Coming soon; topic links only |

---

## 3. Lead capture matrix

| Source | API | Use case |
| --- | --- | --- |
| `contact-form` | `POST /api/enquiry` | General contact |
| `partner-form` | `POST /api/enquiry` | Partners + portal apply |
| `request_proposal` | `POST /api/request-proposal` | RFP |
| `book_consultation` | `POST /api/book-consultation` | Consultation request |
| `ai_readiness_score` | `POST /api/ai-readiness-score` | Assessment + tier |
| `newsletter` | `POST /api/newsletter` | Newsletter signup |
| `whatsapp_cta` | `POST /api/whatsapp-cta` | Click-to-chat logging |

Admin review: `/admin/leads` (role-gated).

---

## 4. Planned / not built (honest backlog)

| Area | Target | Blocker / notes |
| --- | --- | --- |
| Cookie consent | Banner + consent log | Legal approval |
| Production analytics | Enable env IDs post-consent | [15](./15-analytics-dashboard-guide.md) |
| Live status monitoring | Real uptime probes | External provider |
| PostgreSQL leads | Replace `leads.json` | `DATABASE_URL` |
| SMTP notifications | Email on new lead | SMTP env |
| ESP newsletter | Mailchimp / SendGrid | API keys |
| Calendar booking | Calendly / Google Calendar | [24](./24-book-consultation-guide.md) |
| Resource download gate | Lead before PDF | [34](./34-resource-downloads-guide.md) |
| Full Telugu / Hindi | `app/[locale]/` + content | Translation workflow |
| AI assistant API | `POST /api/ai-assistant` | OpenAI/Groq + guardrails |
| Partner portal login | Self-service onboarding | Product decision |
| Database CMS | In-browser editing | [44](./44-admin-cms-future-guide.md) |
| Developer portal | Live OpenAPI + sandbox | Product APIs on getpandit.com |

---

## 5. Architecture snapshot

```
Visitor → Next.js (site) → static/SSG pages ← src/config/*
                      → API routes → data/leads.json
                      → External → getpandit.com
Staff   → /admin/*   → CMS shell + leads (session cookie)
```

See [Architecture Document](./03-architecture.md) and [Diagrams](./10-architecture-diagrams.md).

---

## 6. SEO & discoverability

- **~45** indexed static marketing routes + blog + case studies + knowledge articles
- `sitemap.xml`, `robots.txt`, Organization + WebSite JSON-LD
- Per-page metadata via `createPageMetadataFromKey()`
- FAQPage JSON-LD on `/faq`
- Redirects: `/rfp` → `/request-proposal`, `/press` → `/media-kit`, `/portfolio/:slug` → `/case-studies/:slug`

See [SEO Guide](./07-seo-guide.md).

---

## 7. Mobile & QA

- Mobile-first: 360–430px, 44px tap targets, 16px form inputs
- Sticky header, hamburger nav, safe-area padding
- Phase 3 QA script: `node scripts/phase3-qa-check.mjs`

See [Mobile QA Checklist](./09-mobile-qa-checklist.md).

---

## 8. Deployment

- **Recommended:** Vercel + `nexynthlabs.com` HTTPS
- Pre-deploy: lint, build, strong admin secrets, legal review
- **Do not** enable analytics IDs without cookie policy alignment

See [Deployment Guide](./05-deployment-guide.md).

---

## 9. Documentation index

| # | Document |
| --- | --- |
| 1–11 | Core specs, QA, architecture |
| 12–15 | Integrations, WhatsApp, CRM, analytics |
| 16–42 | Feature guides (company → AI assistant) |
| 29 | [Phase 3 Feature Roadmap](./29-phase-3-feature-roadmap.md) |
| 43 | This deck |
| 44 | [Admin / CMS Future Guide](./44-admin-cms-future-guide.md) |

Master index: [README](./README.md).

---

## 10. Talking points (sales & partnerships)

1. **Corporate site is not the product** — GetPandit runs independently; we link out honestly.
2. **Lead-rich journeys** — RFP, consultation, AI readiness, partners, newsletter — all feed one CRM-lite inbox.
3. **Trust stack** — Security, trust center, status, public roadmap, anonymized client success.
4. **India-ready integrations** — WhatsApp, SMS, payments documented as readiness — not overclaimed.
5. **Phase 4** — Consent, analytics go-live, database CMS, and optional AI assistant when guardrails are ready.

---

## 11. Sign-off checklist (release)

- [ ] `npm run lint` && `npm run build`
- [ ] Legal review of policies + trust copy
- [ ] Production env: `ADMIN_SESSION_SECRET`, strong `ADMIN_PASSWORD`
- [ ] Domain HTTPS on `nexynthlabs.com`
- [ ] Spot-check mobile 360px on Home, Contact, FAQ, Partners portal
- [ ] Verify GetPandit external links

See [Phase 3 Final QA Report](./28-phase-3-final-qa-report.md) and [Final Regression QA Report](./45-final-regression-qa-report.md).
