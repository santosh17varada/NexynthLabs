# Architecture Diagrams — Nexynth Labs Website

**Version:** 2.0  
**Last updated:** June 2026  
**Format:** [Mermaid](https://mermaid.js.org/) — renders on GitHub, GitLab, and most Markdown viewers

These diagrams describe the **Nexynth Labs corporate website** (`nexynthlabs.com`). The **GetPandit product** (`getpandit.com`) is a separate application — linked externally, not embedded.

| # | Diagram | Section |
| --- | --- | --- |
| 1 | [Website architecture](#1-website-architecture) | System boundaries and layers |
| 2 | [Page and navigation flow](#2-page-and-navigation-flow) | Public visitor paths |
| 3 | [Lead and RFP flow](#3-lead-and-rfp-flow) | All lead capture APIs |
| 4 | [Analytics flow](#4-analytics-flow) | Env-gated events and providers |
| 5 | [Future CMS flow](#5-future-cms-flow) | Database-backed editing target |
| 6 | [Future WhatsApp, SMS, and Payment flow](#6-future-whatsapp-sms-and-payment-flow) | GetPandit product integrations |
| 7 | [GetPandit product ecosystem flow](#7-getpandit-product-ecosystem-flow) | Corporate marketing to product domain |

**Related:** [Architecture Document](./03-architecture.md) · [Technical Specification](./02-technical-specification.md) · [Phase 3 Feature Deck](./43-phase-3-feature-deck.md)

---

## 1. Website architecture

End-to-end view of visitors, staff, the Next.js app, config data, lead storage, and external GetPandit.

```mermaid
flowchart TB
  subgraph users["Users"]
    visitor["Public visitor"]
    staff["Internal staff"]
  end

  subgraph hosting["Hosting — Vercel or Node plus CDN"]
    subgraph nextapp["nexynthlabs.com — Next.js 16 App Router"]
      site["Public pages\nsrc/app/site"]
      admin["Admin CMS\nsrc/app/admin"]
      middleware["Middleware\nadmin route guard"]
      api["API routes\nlead and admin APIs"]
      seo["SEO routes\nsitemap robots OG image"]
      layout["Site layout\nHeader Footer i18n AI widget"]
    end
  end

  subgraph content["Config-driven content"]
    config["src/config/*"]
    messages["src/messages en te hi"]
  end

  subgraph storage["Phase 3 data"]
    leads["data/leads.json"]
  end

  subgraph crosscut["Cross-cutting client libs"]
    analytics["trackPlannedEvent\nenv-gated"]
    i18n["LocaleProvider\nLanguageSwitcher"]
    aiwidget["AiAssistantWidget\nplaceholder only"]
  end

  subgraph external["External — separate deploy"]
    gp["getpandit.com\nGetPandit product"]
  end

  visitor --> site
  visitor --> api
  staff --> admin
  admin --> middleware
  middleware --> admin
  admin --> api
  site --> layout
  layout --> config
  layout --> messages
  layout --> analytics
  layout --> i18n
  layout --> aiwidget
  site --> config
  api --> leads
  site -->|"external links only"| gp
  seo --> site
```

**Key boundaries**

- Corporate site: marketing pages, lead intake, trust surfaces — no product transactions.
- GetPandit booking, payments, and messaging run on `getpandit.com`.
- Admin is session-protected; excluded from `sitemap.xml` and search indexing.
- Analytics scripts load only when public env IDs are set and consent policy allows.

---

## 2. Page and navigation flow

Primary paths from home through Phase 3 routes. Header nav is defined in `src/config/header-navigation.ts` (grouped IA with dropdowns); `siteConfig.navigation.main` is a flattened derivative for legacy consumers. Footer adds knowledge, legal, and lead-tool links.

```mermaid
flowchart TD
  entry(["Visitor arrives"])

  entry --> home["/ Home"]
  entry --> deep["Direct URL\nblog legal contact faq"]

  home --> companyHub["Company hub"]
  home --> services["/services"]
  home --> tech["/technology"]
  home --> ai["/ai-showcase"]
  home --> innov["/innovation-lab"]
  home --> products["/products"]
  home --> proofHub["Proof hub"]
  home --> knowledgeHub["Knowledge hub"]
  home --> leadsHub["Lead tools hub"]
  home --> trustHub["Trust hub"]
  home --> contact["/contact"]

  companyHub --> about

  subgraph companyRoutes["Company routes"]
    about["/about"]
    founder["/company/founder"]
    leadership["/company/leadership"]
    vision["/company/vision"]
    careers["/careers"]
    culture["/careers/culture"]
    roadmap["/roadmap"]
  end

  products --> ecosystem["/products/ecosystem"]
  products --> getpandit["/getpandit"]
  getpandit --> extgp["getpandit.com\nexternal"]

  subgraph proofRoutes["Portfolio and social proof"]
    portfolio["/portfolio"]
    casestudies["/case-studies"]
    clientsuccess["/client-success"]
    testimonials["/testimonials"]
  end

  portfolio --> casestudies
  casestudies --> csdetail["/case-studies/slug"]

  subgraph knowledgeRoutes["Knowledge center"]
    resources["/resources"]
    guides["/guides"]
    blog["/blog"]
    faq["/faq"]
    mediakit["/media-kit"]
    developers["/developers"]
  end

  blog --> article["/blog/slug"]
  resources --> resslug["/resources/slug"]

  subgraph leadRoutes["Conversion routes"]
    rfp["/request-proposal"]
    consult["/book-consultation"]
    aiready["/ai-readiness-score"]
    partners["/partners"]
    portal["/partners/portal"]
    events["/events"]
  end

  subgraph trustRoutes["Trust and status"]
    security["/security"]
    trustctr["/trust"]
    status["/status"]
  end

  services --> contact
  getpandit --> contact
  rfp --> apirfp["POST /api/request-proposal"]
  consult --> apiconsult["POST /api/book-consultation"]
  aiready --> apiai["POST /api/ai-readiness-score"]
  contact --> apienq["POST /api/enquiry"]
  partners --> apienq
  portal --> apienq

  proofHub --> portfolio
  knowledgeHub --> resources
  leadsHub --> rfp
  trustHub --> security

  home --> legalHub
  deep --> legalHub
  subgraph legalRoutes["Legal pages"]
    privacy["/privacy-policy"]
    terms["/terms"]
    cookie["/cookie-policy"]
    disclaimer["/disclaimer"]
  end
```

**Redirects:** `/rfp` to `/request-proposal` · `/press` to `/media-kit` · `/portfolio/slug` to `/case-studies/slug`

**Global widgets:** Language switcher and AI assistant on every public page via site layout.

---

## 3. Lead and RFP flow

All public lead APIs write to `data/leads.json` and appear in `/admin/leads`. SMTP notification remains a stub until `SMTP_*` env vars are configured.

```mermaid
sequenceDiagram
  participant V as Visitor
  participant P as Public page
  participant F as Form component
  participant API as Lead API route
  participant S as leads/store.ts
  participant E as leads/email.ts
  participant A as Admin leads UI

  V->>P: Open page with form
  V->>F: Submit data
  F->>API: POST JSON body

  alt Contact or partner
    Note over API: /api/enquiry
    Note over API: source contact-form or partner-form
  else RFP
    Note over API: /api/request-proposal
    Note over API: source request_proposal
  else Consultation
    Note over API: /api/book-consultation
    Note over API: source book_consultation
  else AI readiness
    Note over API: /api/ai-readiness-score
    Note over API: source ai_readiness_score
  else Newsletter
    Note over API: /api/newsletter
    Note over API: source newsletter
  else WhatsApp CTA
    Note over API: /api/whatsapp-cta
    Note over API: source whatsapp_cta
  end

  API->>API: Validate fields
  alt Validation fails
    API-->>F: 400 error
    F-->>V: Show error
  else Success
    API->>S: createLead
    S->>S: Write data/leads.json
    API->>E: sendLeadNotificationEmail stub
    API-->>F: 201 success
    F-->>V: Thank you or tier result
    F->>F: trackPlannedEvent optional
  end

  A->>API: GET /api/admin/leads
  API->>S: listLeads
  S-->>API: Lead array
  API-->>A: JSON response
  A->>API: PATCH /api/admin/leads/id
  API->>S: updateLeadStatus
```

| Route | Page | Lead source |
| --- | --- | --- |
| `POST /api/enquiry` | `/contact`, `/partners`, `/partners/portal` | `contact-form`, `partner-form` |
| `POST /api/request-proposal` | `/request-proposal` | `request_proposal` |
| `POST /api/book-consultation` | `/book-consultation` | `book_consultation` |
| `POST /api/ai-readiness-score` | `/ai-readiness-score` | `ai_readiness_score` |
| `POST /api/newsletter` | Home, Blog, Resources, Footer | `newsletter` |
| `POST /api/whatsapp-cta` | WhatsApp CTAs site-wide | `whatsapp_cta` |

**Phase 4:** PostgreSQL via `DATABASE_URL`; SMTP alerts; optional CRM sync — see [Lead CRM Lite Guide](./14-lead-crm-lite-guide.md).

---

## 4. Analytics flow

Event plumbing ships today; third-party scripts are **env-gated** and should not load until cookie consent and production IDs are approved.

```mermaid
flowchart TD
  subgraph pages["Public pages and forms"]
    contact["/contact"]
    rfp["/request-proposal"]
    partners["/partners"]
    consult["/book-consultation"]
    resources["/resources"]
    gpcta["GetPandit CTAs"]
    wa["WhatsApp CTAs"]
  end

  subgraph client["Browser client"]
    track["trackPlannedEvent\nsrc/lib/analytics/track-client.ts"]
    debug["NEXT_PUBLIC_ANALYTICS_DEBUG\nconsole log only"]
  end

  subgraph envcheck["Env gate"]
    ids{"Any NEXT_PUBLIC\nanalytics ID set?"}
    consent{"Cookie consent\napproved?"}
  end

  subgraph providers["Third-party providers — future go-live"]
    gtm["Google Tag Manager"]
    ga4["GA4"]
    meta["Meta Pixel"]
    linkedin["LinkedIn Insight Tag"]
  end

  subgraph events["Planned events"]
    e1["contact_form_submit"]
    e2["rfp_submit"]
    e3["partner_submit"]
    e4["consultation_submit"]
    e5["getpandit_cta_click"]
    e6["whatsapp_cta_click"]
    e7["resource_download_click"]
    e8["newsletter_submit"]
  end

  contact --> track
  rfp --> track
  partners --> track
  consult --> track
  resources --> track
  gpcta --> track
  wa --> track

  track --> e1
  track --> e2
  track --> e3
  track --> e4
  track --> e5
  track --> e6
  track --> e7
  track --> e8

  track --> ids
  ids -->|No| debug
  ids -->|Yes| consent
  consent -->|No| debug
  consent -->|Yes| gtm
  gtm --> ga4
  gtm --> meta
  gtm --> linkedin
```

**Config:** `src/config/analytics.ts` · **Guide:** [Analytics Dashboard Guide](./15-analytics-dashboard-guide.md)

**Default behavior:** No network requests to GTM, GA, Meta, or LinkedIn without configured IDs.

---

## 5. Future CMS flow

Target state for database-backed content editing. **Today:** admin modules are read-only previews except the leads inbox (`data/leads.json`).

```mermaid
flowchart TD
  subgraph today["Today — Phase 3"]
    gitconfig["src/config/*\nGit version control"]
    fileleads["data/leads.json"]
    adminpreview["/admin/*\nread-only previews"]
    leadsinbox["/admin/leads\nstatus updates"]
  end

  subgraph future["Future — Phase 4 plus"]
    staff["Staff browser"]
    adminui["Admin CMS UI"]
    cmsapi["/api/admin/cms/*"]
    auth["requireModuleAccess\nrole matrix"]
    db[("PostgreSQL")]
    published["Published content"]
    publicsite["Public pages"]
    webhook["Rebuild webhook\nor revalidateTag"]
  end

  staff --> adminui
  adminui --> auth
  auth --> cmsapi
  cmsapi --> db

  adminui -->|"draft save"| cmsapi
  cmsapi -->|"status draft"| db
  adminui -->|"publish"| cmsapi
  cmsapi -->|"status published"| db
  cmsapi --> webhook
  webhook --> publicsite

  publicsite --> published
  published --> db
  publicsite -.->|"dev fallback"| gitconfig

  fileleads -.->|"migrate"| db
  leadsinbox --> db
```

**Modules (priority):** Leads, company profile, blog, SEO, services, products, FAQs, testimonials, careers — see [Admin and CMS Future Guide](./44-admin-cms-future-guide.md).

---

## 6. Future WhatsApp, SMS, and Payment flow

Planned integrations for **GetPandit** on `getpandit.com`. The corporate site describes readiness in marketing copy and logs WhatsApp CTA clicks only.

```mermaid
flowchart TB
  subgraph corporate["nexynthlabs.com — corporate scope"]
    corpsite["Marketing site\nleads and trust pages"]
    wacta["WhatsApp click-to-chat CTA"]
    leadapi["POST /api/whatsapp-cta\nlog click only"]
    smtp["SMTP lead alerts\nplanned"]
    pgleads["PostgreSQL leads\nplanned"]
  end

  subgraph gpproduct["getpandit.com — product scope"]
    gpapp["GetPandit web app"]
    gpbackend["GetPandit API"]
    booking["Booking service"]
    notify["Notification service"]

    gpapp --> gpbackend
    gpbackend --> booking
    gpbackend --> notify

    paygw["Payment gateway\nRazorpay Stripe etc"]
    sms["SMS provider\nMSG91 Twilio etc"]
    waba["WhatsApp Business API"]

    booking --> paygw
    notify --> sms
    notify --> waba
    paygw --> confirm["Booking confirmed"]
    sms --> confirm
    waba --> confirm
    confirm --> family["Family notifications"]
  end

  corpsite -->|"links only"| gpapp
  wacta --> leadapi
  corpsite --> pgleads
  pgleads -.-> smtp

  style paygw fill:#e8f4fc,stroke:#1e3a5f
  style sms fill:#e8f4fc,stroke:#1e3a5f
  style waba fill:#e8f4fc,stroke:#1e3a5f
  style smtp fill:#fef9e8,stroke:#b8891f
  style pgleads fill:#fef9e8,stroke:#b8891f
```

| Node style | Meaning |
| --- | --- |
| Blue | GetPandit product integrations — not built in corporate repo |
| Gold | Corporate Phase 4 ops — SMTP and database leads |
| Solid arrows | Implemented or direct dependency |
| Dashed arrows | Planned migration path |

**Registry:** `src/config/integrations.ts` · **Guide:** [Integrations Guide](./12-integrations-guide.md)

---

## 7. GetPandit product ecosystem flow

How corporate pages present the product line and route visitors to `getpandit.com` without embedding the product app.

```mermaid
flowchart LR
  subgraph corporate["nexynthlabs.com"]
    header["Header GetPandit CTA"]
    home["/ Home"]
    prodindex["/products"]
    ecosystem["/products/ecosystem"]
    gpmarketing["/getpandit"]
    portfolio["/portfolio"]
    casestudy["/case-studies/getpandit"]
    innovlab["/innovation-lab"]
    footer["Footer product links"]
  end

  subgraph catalog["Config sources"]
    products_ts["products.ts"]
    ecosystem_ts["product-ecosystem.ts"]
    portfolio_ts["portfolio.ts"]
  end

  subgraph status["Honest status labels"]
    live["Live"]
    progress["In Progress"]
    planned["Planned"]
    coming["Coming Soon"]
  end

  subgraph product["getpandit.com — external"]
    apphome["App home"]
    bookflow["Booking flow"]
    accounts["User accounts"]
  end

  prodindex --> products_ts
  ecosystem --> ecosystem_ts
  gpmarketing --> products_ts
  portfolio --> portfolio_ts
  casestudy --> portfolio_ts

  products_ts --> status
  ecosystem_ts --> status

  header --> gpmarketing
  home --> gpmarketing
  prodindex --> gpmarketing
  ecosystem --> gpmarketing
  footer --> apphome

  gpmarketing -->|"Visit GetPandit"| apphome
  gpmarketing -->|"Book a Pandit"| bookflow
  prodindex -->|"external CTA"| apphome
  casestudy -->|"case study CTA"| apphome

  innovlab -.->|"GetPandit evolution\nconcept labels"| gpmarketing

  bookflow --> accounts
```

**Architectural rules**

- No iframe embed, API proxy, or shared auth between domains.
- `href` and `bookingHref` in `src/config/products.ts` point to `getpandit.com`.
- Corporate `/getpandit` is marketing-only; transactions stay on the product domain.
- Capability flags in config are for display — not live integration on the corporate site.

---

## GitHub Mermaid rendering notes

These diagrams follow [GitHub-supported Mermaid syntax](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/):

| Rule | Why |
| --- | --- |
| Simple node IDs (`visitor`, `api`, `db`) | Avoids parse errors from special characters |
| Labels with slashes or spaces in double quotes inside brackets | Safe display text |
| `\n` for line breaks inside labels | GitHub renders multi-line nodes |
| `flowchart` and `sequenceDiagram` only | Broadest viewer support |
| Subgraph titles in double quotes when they contain punctuation | Prevents tokenization issues |
| No HTML tags in labels | GitHub sanitizer may strip them |

**If a diagram fails to render:** paste the fenced block into [Mermaid Live Editor](https://mermaid.live) to debug.

**Validate locally:** View this file on GitHub or use a Markdown preview extension with Mermaid enabled.

---

## Related documents

- [Architecture Document](./03-architecture.md)
- [Functional Specification](./01-functional-specification.md)
- [Integrations Guide](./12-integrations-guide.md)
- [Analytics Dashboard Guide](./15-analytics-dashboard-guide.md)
- [Admin and CMS Future Guide](./44-admin-cms-future-guide.md)
- [Phase 3 Feature Deck](./43-phase-3-feature-deck.md)
