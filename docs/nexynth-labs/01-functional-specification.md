# Functional Specification — Nexynth Labs Website

**Version:** 2.0  
**Last updated:** June 2026  
**Product:** Nexynth Labs corporate website  
**Legal entity:** Nexynth Labs Private Limited  
**Primary domain:** https://nexynthlabs.com

---

## 1. Purpose

The Nexynth Labs website is a **public marketing and information platform** for Nexynth Labs Private Limited. It introduces the company, describes services and products, publishes company news, accepts business enquiries, and links visitors to **GetPandit** on its own domain.

The site does **not** provide:

- Public user registration or login
- GetPandit booking, payments, or account management
- E-commerce or in-site transactions

---

## 2. Stakeholders

| Stakeholder | Interest |
| --- | --- |
| Prospective clients | Learn about services; submit enquiries |
| Partners | Understand offerings; contact for partnerships |
| Job seekers | View open roles; apply via email |
| Press / investors | Company story, products, blog |
| Internal marketing | Preview content structure; future CMS editing |
| Internal sales | Review and update lead status |
| Internal super admins | Full CMS and leads access |

---

## 3. User roles

### 3.1 Public visitors (unauthenticated)

- Browse all public pages
- Submit contact/enquiry form
- Follow external links to GetPandit (`getpandit.com`)
- Read legal policies
- No account creation

### 3.2 Admin users (authenticated, internal only)

| Role | Primary responsibility |
| --- | --- |
| `SUPER_ADMIN` | Full access; leads write; future user management |
| `ADMIN` | Full content preview; leads read-only |
| `MARKETING_ADMIN` | Marketing modules (services, products, blogs, SEO, careers, etc.) |
| `SALES_ADMIN` | Leads inbox (read/write); read-only on marketing content |

See [Admin User Guide](./04-admin-user-guide.md) for login and module details.

---

## 4. Public site map

| Route | Page | Primary goal |
| --- | --- | --- |
| `/` | Home | Brand introduction; featured services; GetPandit highlight; blog preview; CTA |
| `/about` | About | Company story, values, location |
| `/company/founder` | Founder Story | Company vision, GetPandit origin, directional roadmap |
| `/leadership` | Leadership | Executive team — founders & directors |
| `/leadership/santosh-kumar-varada` | Santosh Kumar Varada | Founder, CEO & MD profile |
| `/leadership/swathi-varada` | Swathi Varada | Co-Founder & Director profile |
| `/company/leadership` | (redirect) | Permanent redirect to `/leadership` |
| `/company/vision` | Vision | Mission, pillars, operating principles |
| `/services` | Services | Full service catalog grouped by category |
| `/technology` | Technology Excellence | Engineering capabilities — AI, web, mobile, cloud, DevOps, integrations, security |
| `/ai-showcase` | AI Showcase | AI automation, agentic use cases, BPA, support AI, integrations, future ideas |
| `/products` | Products | Product catalog with capabilities and CTAs |
| `/products/ecosystem` | Product Ecosystem | Full product line with Live / In Progress / Planned / Coming Soon statuses |
| `/getpandit` | GetPandit | Flagship product marketing; external product links |
| `/portfolio` | Portfolio | Work overview; featured case study; link to case studies |
| `/case-studies` | Case studies | Published success stories index |
| `/case-studies/[slug]` | Case study detail | Problem, solution, technologies, business value, CTA |
| `/client-success` | Client success | Anonymized stories — problem, approach, solution, outcome, technologies, CTA |
| `/careers` | Careers | Open roles; mailto apply links |
| `/blog` | Blog index | Article list |
| `/resources` | Knowledge — Resources | Downloadable brochures/decks + filterable articles |
| `/guides` | Knowledge — Guides | Filterable guide articles (config-driven) |
| `/blog/[slug]` | Blog article | Long-form content |
| `/contact` | Contact | Enquiry form + company contact details |
| `/request-proposal` | Request proposal (RFP) | Proposal intake form — project type, budget, timeline, requirements |
| `/partners` | Investors & Partners | Partnership models, investor CTA, partner enquiry form |
| `/roadmap` | Public Roadmap | Honest milestone status — completed, in progress, planned, future |
| `/status` | System Status | Config-maintained service health placeholders |
| `/security` | Security | Hosting, SSL, payment readiness, access control |
| `/trust` | Trust Center | Data protection, privacy, compliance roadmap |
| `/innovation-lab` | Innovation Lab | R&D concepts, prototypes, planned work, GetPandit evolution |
| `/events` | Events & Webinars | Upcoming, planned, and completed events (enquiry-led) |
| `/testimonials` | Testimonials | Placeholder-only client quotes |
| `/faq` | FAQ Center | Searchable FAQs; FAQPage schema |
| `/media-kit` | Media Kit | Press assets, boilerplate, brand colors |
| `/developers` | Developers | Future API, webhooks, SDK vision (readiness labels) |
| `/ai-readiness-score` | AI Readiness Score | 10-question self-assessment with tiered results |
| `/book-consultation` | Book Consultation | Topic-based discovery call request |
| `/partners/portal` | Partner Portal | Partner onboarding readiness (no public login) |
| `/careers/culture` | Culture | Life at Nexynth, engineering culture, open roles |
| `/privacy-policy` | Privacy Policy | Data handling disclosure |
| `/terms` | Terms & Conditions | Site usage terms |
| `/cookie-policy` | Cookie Policy | Cookie and tracking disclosure |
| `/disclaimer` | Disclaimer | Informational disclaimers |

### 4.1 System routes (non-page)

| Route | Purpose |
| --- | --- |
| `/sitemap.xml` | Search engine URL list |
| `/robots.txt` | Crawler rules |
| `/opengraph-image` | Generated social share image |
| `/rfp` | Permanent redirect → `/request-proposal` |
| `/press` | Permanent redirect → `/media-kit` |
| `/portfolio/[slug]` | Permanent redirect → `/case-studies/[slug]` |

**Global widgets (all public pages):** language switcher (en / te / hi readiness), “Ask Nexynth AI” coming-soon assistant.

---

## 5. Functional requirements by area

### 5.1 Global layout

| ID | Requirement | Status |
| --- | --- | --- |
| G-01 | Sticky header with grouped primary navigation (6 top-level items + dropdowns) | Done |
| G-02 | Mobile hamburger with accordion groups + Book Consultation CTA | Done |
| G-03 | Footer with grouped Company, Products, Services, Resources, Legal, and Contact | Done |
| G-04 | Responsive layout from 360px to desktop | Done |
| G-05 | Company contact data sourced from central config only | Done |
| G-06 | Language switcher (en / te / hi); English content today; readiness banner | Done |
| G-07 | AI assistant widget — coming soon, topic links only, no API calls | Done |
| G-08 | Message from the Founder section on home with link to executive profile | Done |

### 5.2 Home (`/`)

| ID | Requirement | Status |
| --- | --- | --- |
| H-01 | Premium hero — AI-first messaging, trust badges, innovation card, GetPandit + Book Consultation CTAs | Done |
| H-02 | Story flow §2 — What Nexynth Labs builds (four pillars) | Done |
| H-03 | Story flow §3 — GetPandit flagship showcase (mockup, ecosystem, honest readiness) | Done |
| H-04 | Story flow §4 — Capabilities grid (AI, Product Engineering, Cloud, Integrations) | Done |
| H-05 | Story flow §5 — Premium Why Nexynth Labs (7 honest differentiators) | Done |
| H-06 | Story flow §6 — Founder vision with approved message and Read Founder Story CTA | Done |
| H-07 | Story flow §7 — Premium case studies (GetPandit featured) + anonymized success highlights | Done |
| H-08 | Story flow §8 — Innovation Lab tracks with honest status labels | Done |
| H-09 | Story flow §9 — Blog & resources | Done |
| H-10 | Story flow §10 — Final CTA (Explore GetPandit + Book Consultation) | Done |

### 5.3 Services (`/services`)

| ID | Requirement | Status |
| --- | --- | --- |
| S-01 | Display all services from catalog | Done |
| S-02 | Group by category (Build / Integrate / Scale) | Done |
| S-03 | Each card shows benefits and CTA to contact with prefill | Done |

### 5.4 Products (`/products`, `/getpandit`)

| ID | Requirement | Status |
| --- | --- | --- |
| P-01 | List products with status, capabilities, and CTAs | Done |
| P-02 | GetPandit flagged as flagship | Done |
| P-03 | External CTAs: Visit GetPandit, Book a Pandit, Partner, Contact | Done |
| P-04 | No embedded GetPandit app or auth on corporate domain | Done |
| P-05 | Success metrics section with Platform Ready / Integration Ready / In Progress / Planned labels | Done |

**Success metrics** (`src/config/getpandit-metrics.ts`) appear on Home, `/getpandit`, and the GetPandit case study. They describe platform readiness only — never user totals or revenue.

### 5.4.1 Product ecosystem (`/products/ecosystem`)

| ID | Requirement | Status |
| --- | --- | --- |
| PE-01 | Config-driven product cards with Live / In Progress / Planned / Coming Soon | Done |
| PE-02 | Only GetPandit marked Live; no false live claims | Done |
| PE-03 | Coming Soon pipeline section separate from core platforms | Done |
| PE-04 | Mobile-first card grid; links to related pages (AI Showcase, Partners, Contact) | Done |
| PE-05 | Nav, footer, sitemap, SEO metadata | Done |

### 5.4.2 Founder story (`/company/founder`)

| ID | Requirement | Status |
| --- | --- | --- |
| FS-01 | Founder note placeholder (config-editable; no unverified personal claims) | Done |
| FS-02 | Why Nexynth Labs / Why GetPandit prose sections | Done |
| FS-03 | Vision pillars for AI, automation, spiritual technology | Done |
| FS-04 | Long-term roadmap (directional, not guaranteed dates) | Done |
| FS-05 | CTA: Partner with us / Contact us | Done |
| FS-06 | Mobile-responsive layout; nav, sitemap, SEO | Done |
| FS-07 | Company sub-nav; link to full vision page | Done |

### 5.4.2a Leadership (`/leadership`, `/leadership/[slug]`)

| ID | Requirement | Status |
| --- | --- | --- |
| CL-01 | Config-driven profiles — biography, expertise, social, image | Done |
| CL-02 | Executive index + Santosh & Swathi profile pages | Done |
| CL-03 | Person + Organization JSON-LD; per-profile SEO | Done |
| CL-04 | Home founder message; About, Media kit, Partners embeds | Done |
| CL-05 | `/company/leadership` redirect; sitemap | Done |

### 5.4.2b Company vision (`/company/vision`)

| ID | Requirement | Status |
| --- | --- | --- |
| CV-01 | Mission, vision pillars, operating principles | Done |
| CV-02 | Shared pillar config with founder page | Done |
| CV-03 | Disclaimer — not investment advice | Done |
| CV-04 | SEO `companyVision`; sitemap | Done |

### 5.4.3 Technology excellence (`/technology`)

| ID | Requirement | Status |
| --- | --- | --- |
| TE-01 | Seven sections: AI, Web, Mobile, Cloud, DevOps, Integrations, Security | Done |
| TE-02 | Eleven config-driven capability cards | Done |
| TE-03 | Mobile-first responsive grid | Done |
| TE-04 | CTA to contact and services | Done |
| TE-05 | Nav, footer, sitemap, SEO metadata | Done |

### 5.4.4 Public roadmap (`/roadmap`)

| ID | Requirement | Status |
| --- | --- | --- |
| PR-01 | Four groups: Completed, In Progress, Planned, Future | Done |
| PR-02 | Config-driven items with honest status labels | Done |
| PR-03 | No dates unless `targetDate` set in config | Done |
| PR-04 | Mobile-first vertical timeline layout | Done |
| PR-05 | Jump links to status sections; nav, sitemap, SEO | Done |

### 5.4.5 System status (`/status`)

| ID | Requirement | Status |
| --- | --- | --- |
| ST-01 | Eight service placeholders with Operational / Degraded / Maintenance / Planned | Done |
| ST-02 | Config-driven; no live monitoring connection | Done |
| ST-03 | Overall summary + grouped service list | Done |
| ST-04 | Optional `lastReviewedAt` in config only | Done |
| ST-05 | Nav, sitemap, SEO; monitoring TODO in docs | Done |

### 5.4.6 Security & trust center (`/security`, `/trust`)

| ID | Requirement | Status |
| --- | --- | --- |
| SC-01 | Security page: hosting, SSL, payment readiness, access control | Done |
| SC-02 | Trust page: data protection, privacy practices, compliance roadmap | Done |
| SC-03 | No false certification claims; legal/security review notice | Done |
| SC-04 | Footer links (column + legal bar) | Done |
| SC-05 | SEO, sitemap, config-driven content | Done |

### 5.4.7 Knowledge center (`/resources`, `/guides`)

| ID | Requirement | Status |
| --- | --- | --- |
| KC-01 | Six categories; config-driven article cards | Done |
| KC-02 | Resources and guides listing pages | Done |
| KC-03 | Detail pages `/resources/[slug]`, `/guides/[slug]` | Done |
| KC-04 | Client search + category filter | Done |
| KC-05 | Footer links, sitemap, SEO | Done |
| KC-06 | Download cards: Company/Services brochure, Product deck, GetPandit overview, Architecture overview | Done |
| KC-07 | Placeholder PDF paths until assets published; lead-gate documented | Done |

### 5.4.8 AI Readiness Score (`/ai-readiness-score`)

| ID | Requirement | Status |
| --- | --- | --- |
| AR-01 | 10-question form; tiers Beginner / Emerging / Ready / Advanced | Done |
| AR-02 | Lead fields: name, email, phone, company | Done |
| AR-03 | Source `ai_readiness_score`; API + graceful degradation | Done |
| AR-04 | Mobile-responsive radio layout | Done |
| AR-05 | SEO, sitemap, footer link | Done |

### 5.4.9 Book Free Consultation (`/book-consultation`)

| ID | Requirement | Status |
| --- | --- | --- |
| BC-01 | Fields: name, email, phone, company, topic, preferred date, message | Done |
| BC-02 | Topics: AI, Web App, Mobile App, GetPandit, integrations, Other | Done |
| BC-03 | Source `book_consultation`; API lead capture | Done |
| BC-04 | CTAs on Home, Services, Technology, Innovation Lab, Contact | Done |
| BC-05 | No calendar integration; future Google Calendar/Calendly documented | Done |

### 5.4.10 Partner Portal Readiness (`/partners/portal`)

| ID | Requirement | Status |
| --- | --- | --- |
| PP-01 | Partner types: Temple, Service, Technology, Vendors, Investors | Done |
| PP-02 | Benefits, process, eligibility per type; apply CTA | Done |
| PP-03 | Enquiry only — no login/portal implementation | Done |
| PP-04 | Config-driven content; SEO and sitemap | Done |
| PP-05 | Link from /partners; docs guide | Done |

### 5.4.22 Analytics readiness

| ID | Requirement | Status |
| --- | --- | --- |
| AN-01 | Env placeholders: GA4, GTM, Meta Pixel, LinkedIn Insight Tag | Done |
| AN-02 | `trackPlannedEvent()` safe no-op when env IDs missing | Done |
| AN-03 | Planned events: contact, rfp, partner, getpandit CTA, WhatsApp, consultation, resource download | Done |
| AN-04 | `AnalyticsScripts` loads only when provider IDs set | Done |
| AN-05 | `.env.example` and analytics guide updated | Done |

### 5.4.23 Multilingual readiness

| ID | Requirement | Status |
| --- | --- | --- |
| ML-01 | Locales planned: English (active), Telugu, Hindi (planned) | Done |
| ML-02 | i18n config, message catalogs, `getMessages()`, `LocaleProvider` | Done |
| ML-03 | Language switcher in header; mobile-safe layout | Done |
| ML-04 | Readiness banner for planned locales; English content unchanged | Done |
| ML-05 | Docs guide; full site translation not in scope | Done |

### 5.4.24 AI Assistant placeholder

| ID | Requirement | Status |
| --- | --- | --- |
| AA-01 | “Ask Nexynth AI” widget — coming soon, no API calls | Done |
| AA-02 | Use cases: Services, Products, Careers, GetPandit, Partnerships | Done |
| AA-03 | Disabled input/send; topic links as fallback | Done |
| AA-04 | Mobile-friendly panel; floating widget on public layout | Done |
| AA-05 | Future OpenAI/Groq docs + env placeholders | Done |

### 5.4.11 Innovation Lab (`/innovation-lab`)

| ID | Requirement | Status |
| --- | --- | --- |
| IL-01 | Sections: AI Experiments, Automation Concepts, Future Product Ideas, Agentic AI Research, GetPandit Evolution, Prototype Showcase | Done |
| IL-02 | Status labels: concept, prototype, planned, live on every item | Done |
| IL-03 | No overclaiming; disclaimer and honest copy | Done |
| IL-04 | Main nav item Innovation Lab; SEO and sitemap | Done |
| IL-05 | Config-driven; docs guide | Done |

### 5.4.12 Careers & Culture (`/careers`, `/careers/culture`)

| ID | Requirement | Status |
| --- | --- | --- |
| CC-01 | Culture sections: life, engineering, innovation, learning, remote/hybrid, open roles | Done |
| CC-02 | Open roles listings or placeholder; email apply only | Done |
| CC-03 | Static config-driven; no applicant backend | Done |
| CC-04 | Mobile-responsive layout | Done |
| CC-05 | SEO and sitemap for both routes | Done |

### 5.4.13 Portfolio & Case Studies (`/portfolio`, `/case-studies`, `/case-studies/[slug]`)

| ID | Requirement | Status |
| --- | --- | --- |
| CS-01 | Config fields: project, industry, problem, solution, technology, business value, status, CTA | Done |
| CS-02 | GetPandit as first published case study at `/case-studies/getpandit` | Done |
| CS-03 | Mobile-first cards on portfolio and index | Done |
| CS-04 | Main nav, SEO keys, sitemap entries | Done |
| CS-05 | Legacy `/portfolio/:slug` redirect to `/case-studies/:slug` | Done |
| CS-06 | Docs guide | Done |

### 5.4.14 Client Success Stories (`/client-success`)

| ID | Requirement | Status |
| --- | --- | --- |
| CSS-01 | Anonymous layout: problem, approach, solution, outcome, technologies, CTA | Done |
| CSS-02 | Config-driven stories in `client-success.ts` | Done |
| CSS-03 | No fake metrics; anonymization disclaimer | Done |
| CSS-04 | Main nav, SEO key `clientSuccess`, sitemap | Done |
| CSS-05 | Mobile-responsive cards and section nav | Done |
| CSS-06 | Docs guide with sales deck slice | Done |

### 5.4.15 Request Proposal (`/request-proposal`)

| ID | Requirement | Status |
| --- | --- | --- |
| RFP-01 | Form: name, email, phone, company, project type, budget, timeline, requirements | Done |
| RFP-02 | Project types: AI, Web App, Mobile App, Cloud, Integration, GetPandit Partnership, Other | Done |
| RFP-03 | API → lead store when available; mailto fallback on error | Done |
| RFP-04 | Mobile-responsive layout; SEO and sitemap | Done |
| RFP-05 | `/rfp` redirect; docs with TODO backlog | Done |

### 5.4.16 Events & Webinars (`/events`)

| ID | Requirement | Status |
| --- | --- | --- |
| EV-01 | Sections: Upcoming Events, Webinars, Product Launches, AI Sessions, Past Events | Done |
| EV-02 | Status labels: Upcoming, Planned, Completed on every item | Done |
| EV-03 | Config-driven; no false attendance or ticketing claims | Done |
| EV-04 | Main nav, SEO key `events`, sitemap | Done |
| EV-05 | Mobile-responsive cards and section nav | Done |
| EV-06 | Docs guide | Done |

### 5.4.17 Newsletter signup (embedded)

| ID | Requirement | Status |
| --- | --- | --- |
| NL-01 | Fields: email (required), name (optional) | Done |
| NL-02 | Placements: Home, Blog, Resources, Footer | Done |
| NL-03 | API → lead store when available; mailto fallback | Done |
| NL-04 | Mobile-friendly validation; privacy policy link | Done |
| NL-05 | ESP integration documented as TODO | Done |

### 5.4.18 Testimonials (`/testimonials`)

| ID | Requirement | Status |
| --- | --- | --- |
| TM-01 | Fields: name, role, company, quote, category, status | Done |
| TM-02 | Placeholder-only public content until approved | Done |
| TM-03 | Reusable `TestimonialCard`; home featured section | Done |
| TM-04 | Category filter on index; mobile-responsive grid | Done |
| TM-05 | Main nav, SEO `testimonials`, sitemap | Done |
| TM-06 | Docs guide | Done |

### 5.4.19 FAQ Center (`/faq`)

| ID | Requirement | Status |
| --- | --- | --- |
| FAQ-01 | Categories: Services, Products, GetPandit, Partnerships, Careers, Security, Contact | Done |
| FAQ-02 | Search and category filter | Done |
| FAQ-03 | Config-driven; unpublished items hidden | Done |
| FAQ-04 | FAQPage JSON-LD; SEO key `faq`; sitemap | Done |
| FAQ-05 | Mobile-responsive accordion layout | Done |
| FAQ-06 | Docs guide | Done |

### 5.4.20 Media Kit (`/media-kit`)

| ID | Requirement | Status |
| --- | --- | --- |
| MK-01 | Sections: profile, logos, colors, typography, boilerplate, contact, downloads | Done |
| MK-02 | Config-driven; Nexynth Labs company details from site-values | Done |
| MK-03 | Logo/color previews; downloadable placeholders with request CTAs | Done |
| MK-04 | WebPage JSON-LD; SEO key `mediaKit`; sitemap; `/press` redirect | Done |
| MK-05 | Mobile-responsive layout; sticky section nav | Done |
| MK-06 | Docs guide | Done |

### 5.4.21 Developers / API Vision (`/developers`)

| ID | Requirement | Status |
| --- | --- | --- |
| DV-01 | Sections: API vision, coming-soon APIs, GetPandit integrations, webhooks, documentation | Done |
| DV-02 | Config-driven readiness labels; no live API implementation | Done |
| DV-03 | Honesty disclaimer — no API keys or sandbox on marketing site | Done |
| DV-04 | WebPage JSON-LD; SEO key `developers`; sitemap | Done |
| DV-05 | Mobile-responsive layout; sticky section nav | Done |
| DV-06 | Docs guide | Done |

### 5.5 Investors & partners (`/partners`)

| ID | Requirement | Status |
| --- | --- | --- |
| PT-01 | Why partner, product, GetPandit, temple/vendor, and technology sections | Done |
| PT-02 | Investor enquiry CTA (anchor + mailto) | Done |
| PT-03 | Partner enquiry form via `POST /api/enquiry` with `source: partner-form` | Done |
| PT-04 | Partnership interest types in config (`partnerEnquiryOptions`) | Done |
| PT-05 | URL prefill: `?interest=` on `/partners#partner-form` | Done |
| PT-06 | No public login | Done |
| PT-07 | WhatsApp click-to-chat CTA with `whatsapp_cta` lead tracking | Done |

### 5.6 Contact & leads (`/contact`)

| ID | Requirement | Status |
| --- | --- | --- |
| C-01 | Display email, phone, full address from config | Done |
| C-02 | Enquiry form: Name*, Email*, Phone, Company, Service interest, Message* | Done |
| C-03 | Service interest dropdown from config | Done |
| C-04 | URL prefill: `?service=`, `?intent=partner`, and partner `?interest=` on `/partners` | Done |
| C-05 | Partner enquiry types: investor, product, GetPandit, temple/vendor, technology | Done |
| C-06 | Persist submissions to `data/leads.json` | Done |
| C-07 | Email notification on new lead | Planned (SMTP) |
| C-08 | iOS-friendly form inputs (16px font, 44px tap targets) | Done |
| C-09 | WhatsApp click-to-chat CTA on `/contact` with `whatsapp_cta` lead source | Done |

### 5.7 Careers (`/careers`)

| ID | Requirement | Status |
| --- | --- | --- |
| CR-01 | List job openings from config | Done |
| CR-02 | Apply via mailto with job title in subject | Done |

### 5.8 Blog (`/blog`, `/blog/[slug]`)

| ID | Requirement | Status |
| --- | --- | --- |
| B-01 | Static blog posts from config | Done |
| B-02 | Article metadata and JSON-LD for SEO | Done |
| B-03 | CMS authoring in admin (read-only preview phase 1) | Phase 2 |

### 5.9 Legal

| ID | Requirement | Status |
| --- | --- | --- |
| L-01 | Privacy, Terms, Cookie, Disclaimer pages | Done |
| L-02 | Nexynth Labs company details in legal copy | Done |
| L-03 | GetPandit separation called out in policies | Done |
| L-04 | Legal review notice on every legal page | Done |
| L-05 | Final counsel review before production reliance | **Required** |

### 5.10 SEO & discoverability

| ID | Requirement | Status |
| --- | --- | --- |
| SEO-01 | Per-page title and description | Done |
| SEO-02 | Canonical URLs, Open Graph, Twitter cards | Done |
| SEO-03 | sitemap.xml and robots.txt | Done |
| SEO-04 | Organization + WebSite schema.org on all public pages | Done |
| SEO-05 | Admin routes excluded from index | Done |

See [SEO Guide](./07-seo-guide.md).

### 5.11 Admin CMS

| ID | Requirement | Status |
| --- | --- | --- |
| A-01 | Login at `/admin/login` (no public signup) | Done |
| A-02 | Role-based module visibility | Done |
| A-03 | Read-only module previews (phase 1) | Done |
| A-04 | Leads table with status updates (SUPER_ADMIN, SALES_ADMIN) | Done |
| A-05 | In-browser content editing | Phase 2 |
| A-06 | Database-backed users and content | Phase 2 |

See [Admin User Guide](./04-admin-user-guide.md), [Admin/CMS Future Guide](./44-admin-cms-future-guide.md), and [Future Roadmap](./08-future-roadmap.md).

---

## 6. Business rules

1. **GetPandit isolation** — Product booking and accounts live only on `getpandit.com`. The corporate site links externally; it does not proxy product APIs.
2. **Single source of truth** — Company name, contact, address, domain, navigation, and SEO defaults live in `src/config/site.ts` (values in `site-values.ts`).
3. **No public authentication** — Only internal staff access `/admin`.
4. **Lead data** — Enquiry data is stored server-side; not displayed on the public site.
5. **Legal content** — Draft templates require qualified legal review before production use.

---

## 7. Non-functional requirements

| Area | Target |
| --- | --- |
| Performance | Static-first pages; minimal client JavaScript on marketing routes |
| Accessibility | Semantic HTML; form labels; ARIA on mobile menu |
| Mobile | Usable at 360px–430px; 44px minimum tap targets |
| Security | Admin routes protected by middleware; signed session cookies |
| Maintainability | TypeScript; config-driven content; documented env vars |

---

## 8. Out of scope (current phase)

- GetPandit product features (booking, payments, notifications)
- Public customer accounts on nexynthlabs.com
- Full multi-language content (readiness shell only — see [Multilingual Readiness Guide](./41-multilingual-readiness-guide.md))
- Live AI chat (placeholder widget only — see [AI Assistant Guide](./42-ai-assistant-placeholder-guide.md))
- Payment processing on corporate site

### 8.1 Planned (not yet built)

See [Phase 3 Feature Roadmap](./29-phase-3-feature-roadmap.md) for definitions, checklist, and safe build order.

| Feature | Target route | Wave |
| --- | --- | --- |
| Analytics production | env-gated GA/GTM/Meta/LinkedIn + consent | 4 |
| Status live monitoring | `/status` real probes | 4 |
| PostgreSQL leads + SMTP | Admin inbox | 4 |
| ESP newsletter sync | Mailchimp / SendGrid | 4 |
| Calendar booking | Calendly / Google Calendar | 4 |
| Full Telugu / Hindi content | `app/[locale]/` | 4 |
| AI assistant API | `POST /api/ai-assistant` | 4 |
| Partner portal login | Self-service onboarding | 4+ |
| Database CMS editors | `/admin/*` write | 4 |
| Developer portal (live API) | Sandbox + OpenAPI | 5 |

---

## 9. Acceptance criteria (release readiness)

- [ ] All public routes render without errors on mobile and desktop
- [ ] Contact form creates leads visible in `/admin/leads`
- [ ] GetPandit links open correct external URLs
- [ ] `npm run lint` and `npm run build` pass
- [ ] `sitemap.xml` and `robots.txt` accessible on production
- [ ] Legal pages reviewed by counsel
- [ ] Production env vars set (`ADMIN_SESSION_SECRET`, strong `ADMIN_PASSWORD`)
- [ ] Domain `nexynthlabs.com` configured with HTTPS

---

## 10. Related documents

- [Phase 3 Feature Roadmap](./29-phase-3-feature-roadmap.md) — master feature catalog & implementation sequence
- [Phase 3 Feature Deck](./43-phase-3-feature-deck.md) — stakeholder summary

- [Technical Specification](./02-technical-specification.md)
- [Admin User Guide](./04-admin-user-guide.md)
- [Admin & CMS Future Guide](./44-admin-cms-future-guide.md)
- [Mobile QA Checklist](./09-mobile-qa-checklist.md)
- [Legal content notes](../legal.md)
