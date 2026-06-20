# Nexynth Labs Corporate Website

Production-ready corporate website for **Nexynth Labs Private Limited** — built with Next.js, TypeScript, and Tailwind CSS.

- **Domain:** [NexynthLabs.com](https://nexynthlabs.com)
- **Product:** [GetPandit](https://getpandit.com)
- **Scope:** Public marketing site only (no public login)

## Master rules (every prompt)

| Rule | Requirement |
| --- | --- |
| Scope | Standalone corporate site — do not change GetPandit app/code/routes |
| Mobile | Mobile-first, responsive layouts and touch targets |
| Content | Config-driven (`src/config/*`) where possible |
| Auth | No public login; admin/CMS is staff-only / future-ready |
| Honesty | No fake claims — use readiness labels and disclaimers |
| Docs | Update `docs/nexynth-labs/`, README, and specs after each feature |
| QA | Run `npm run lint` and `npm run build` before finishing |

Cursor rule: `.cursor/rules/nexynth-master-rules.mdc` (always applied).

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Rendering | Static-first pages |
| SEO | Metadata API, `sitemap.ts`, `robots.ts`, JSON-LD |

## Prerequisites

- Node.js 20+
- npm 10+

## Setup

```bash
# Clone or open the project
cd nexynthlabs-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Public pages

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/about` | Company story and values |
| `/services` | Service offerings |
| `/technology` | Technology excellence — AI, web, mobile, cloud, DevOps, integrations, security |
| `/ai-showcase` | AI automation, agents, and product ideas |
| `/innovation-lab` | R&D catalog — AI experiments, automation, product ideas, agentic research, GetPandit evolution, prototypes (Concept / Prototype / Planned / Live) |
| `/events` | Events & webinars — upcoming, webinars, launches, AI sessions, past (Upcoming / Planned / Completed) |
| `/products` | Product overview |
| `/products/ecosystem` | Full product line with Live / In Progress / Planned / Coming Soon labels |
| `/portfolio` | Portfolio overview & featured work |
| `/case-studies` | Published case studies index |
| `/case-studies/[slug]` | Individual case study (e.g. GetPandit) |
| `/client-success` | Anonymized client success stories (no fake metrics) |
| `/testimonials` | Placeholder testimonials — clearly labeled until approved |
| `/faq` | FAQ center — search, categories, FAQPage schema |
| `/getpandit` | GetPandit product page (links to getpandit.com) |
| `/company/founder` | Founder story |
| `/company/leadership` | Leadership team (placeholder profiles) |
| `/company/vision` | Company vision and principles |
| `/careers` | Open roles |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog articles |
| `/contact` | Enquiry form + contact details |
| `/request-proposal` | RFP / proposal request form |
| `/partners` | Investors & partners + enquiry form |
| `/privacy-policy` | Privacy policy |
| `/terms` | Terms & Conditions |
| `/cookie-policy` | Cookie policy |
| `/disclaimer` | Disclaimer |

## Documentation

**Complete documentation:** [docs/nexynth-labs/](docs/nexynth-labs/README.md)

| Document | Description |
| --- | --- |
| [Functional Specification](docs/nexynth-labs/01-functional-specification.md) | Requirements and user roles |
| [Technical Specification](docs/nexynth-labs/02-technical-specification.md) | APIs, data models, stack |
| [Architecture](docs/nexynth-labs/03-architecture.md) | System design and flows |
| [Admin User Guide](docs/nexynth-labs/04-admin-user-guide.md) | CMS login and modules |
| [Deployment Guide](docs/nexynth-labs/05-deployment-guide.md) | Hosting and release |
| [Environment Variables](docs/nexynth-labs/06-environment-variables.md) | Env var reference |
| [SEO Guide](docs/nexynth-labs/07-seo-guide.md) | Metadata, schema, sitemap |
| [Future Roadmap](docs/nexynth-labs/08-future-roadmap.md) | Phase timeline & CMS backend |
| [Product Ecosystem Guide](docs/nexynth-labs/16-product-ecosystem-guide.md) | Ecosystem page config & status labels |
| [Technology Excellence Guide](docs/nexynth-labs/18-technology-excellence-guide.md) | /technology sections & stack cards |
| [Innovation Lab Guide](docs/nexynth-labs/26-innovation-lab-guide.md) | /innovation-lab sections & status labels |
| [Portfolio & Case Studies Guide](docs/nexynth-labs/31-portfolio-case-studies-guide.md) | /portfolio, /case-studies config & cards |
| [Client Success Guide](docs/nexynth-labs/32-client-success-guide.md) | /client-success anonymous stories & deck slice |
| [Request Proposal Guide](docs/nexynth-labs/33-request-proposal-guide.md) | /request-proposal RFP form & TODOs |
| [Resource Downloads Guide](docs/nexynth-labs/34-resource-downloads-guide.md) | /resources brochure & deck cards |
| [Events & Webinars Guide](docs/nexynth-labs/35-events-webinars-guide.md) | /events sections & status labels |
| [Newsletter Guide](docs/nexynth-labs/36-newsletter-guide.md) | Signup component & ESP TODOs |
| [Testimonials Guide](docs/nexynth-labs/37-testimonials-guide.md) | /testimonials placeholders & cards |
| [FAQ Center Guide](docs/nexynth-labs/38-faq-center-guide.md) | /faq search, categories, schema |
| [Phase 3 Feature Roadmap](docs/nexynth-labs/29-phase-3-feature-roadmap.md) | All feature areas, checklist, safe build order |
| [Mobile QA Checklist](docs/nexynth-labs/09-mobile-qa-checklist.md) | Pre-release mobile testing |
| [Architecture Diagrams](docs/nexynth-labs/10-architecture-diagrams.md) | Mermaid system & flow diagrams |
| [Final QA Report](docs/nexynth-labs/11-final-qa-report.md) | QA sign-off, risks, deploy & rollback |
| [Integrations Guide](docs/nexynth-labs/12-integrations-guide.md) | Analytics, CRM, messaging, payments placeholders |

### Supplementary

- [Brand guidelines & assets](branding/GUIDELINES.md)
- [Legal content & counsel review](docs/legal.md)
- [Leads & contact form](docs/leads.md)
- [CMS phase-2 backlog](docs/cms-todo.md)

## Admin CMS (internal)

- `/admin/login` — staff only (no public signup)
- `/admin` — role-based dashboard
- `/admin/[module]` — module previews (read-only in phase 1)

**Roles:** `SUPER_ADMIN`, `ADMIN`, `MARKETING_ADMIN`, `SALES_ADMIN`

**Modules:** Company Profile, Services, Products, Blogs, Portfolio, FAQs, Testimonials, SEO, Careers, Leads

See [Admin User Guide](docs/nexynth-labs/04-admin-user-guide.md) and [CMS phase-2 backlog](docs/cms-todo.md).

Copy `.env.example` to `.env.local`:

```
ADMIN_PASSWORD=changeme
ADMIN_SESSION_SECRET=...
```

Dev logins (password from env): `super@nexynthlabs.com`, `admin@nexynthlabs.com`, `marketing@nexynthlabs.com`, `sales@nexynthlabs.com`

## Project structure

```
nexynthlabs-website/
├── docs/
│   └── nexynth-labs/        # Complete documentation set
├── src/
│   ├── app/
│   │   ├── (site)/          # Public pages with header/footer
│   │   ├── admin/           # Internal CMS entry (login required)
│   │   └── api/             # Enquiry + admin auth APIs
│   ├── components/
│   │   ├── cards/           # Blog, job, product, service cards
│   │   ├── contact/
│   │   ├── forms/           # Enquiry form
│   │   ├── layout/          # Header & footer
│   │   ├── legal/
│   │   └── ui/              # Button, Card, Container, PageHero, etc.
│   ├── config/              # Company, services, blog, careers, legal
│   └── lib/                 # SEO, auth helpers
└── README.md
```

## Updating company content

**Single source of truth:** `src/config/site.ts`

```ts
siteConfig.companyName   // Nexynth Labs Private Limited
siteConfig.tagline
siteConfig.email
siteConfig.phone
siteConfig.address
siteConfig.domain
siteConfig.socialLinks
siteConfig.services
siteConfig.products
siteConfig.seo           // defaults + per-page metadata
```

Supporting content files (`about.ts`, `blog.ts`, `careers.ts`, `legal.ts`) derive copy from `siteConfig` — do not duplicate company values there.

Legacy re-exports remain in `src/config/company.ts` for compatibility.

## Deployment

The site is designed for static-friendly hosting (Vercel, Netlify, Cloudflare Pages, etc.).

```bash
npm run build
npm run start
```

See [docs/nexynth-labs/05-deployment-guide.md](docs/nexynth-labs/05-deployment-guide.md) for environment notes and domain setup.

## License

Proprietary — Nexynth Labs Private Limited.
