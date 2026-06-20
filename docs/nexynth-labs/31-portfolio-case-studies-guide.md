# Portfolio & Case Studies — Nexynth Labs Website

**Routes:** `/portfolio`, `/case-studies`, `/case-studies/[slug]`  
**Config:** `src/config/portfolio.ts`  
**Last updated:** June 2026

---

## Purpose

- **`/portfolio`** — Work overview, delivery pillars, featured case study cards
- **`/case-studies`** — Published success stories index
- **`/case-studies/getpandit`** — First case study (GetPandit flagship product)

Legacy URLs `/portfolio/:slug` redirect permanently to `/case-studies/:slug` (`next.config.ts`).

---

## Config fields (per case study)

| Field | Config key | Shown on |
| --- | --- | --- |
| **Project** | `projectName` | Card, detail meta grid |
| **Industry** | `industry` | Card eyebrow, detail |
| **Problem** | `problemStatement` | Detail section |
| **Solution** | `solution` | Detail section |
| **Technology** | `technologies[]` | Card chips (first 3), detail tags |
| **Business value** | `businessValue[]` | Card preview (first item), detail list |
| **Status** | `status` + optional `statusLabel` | Card badge, detail (e.g. Live) |
| **CTA** | `cta.primary` / `cta.secondary` | Detail buttons |

Additional fields: `slug`, `title`, `summary`, `images`, `featured`, `publishedAt`, `customerName`.

---

## GetPandit (first case study)

- **Slug:** `getpandit` → `/case-studies/getpandit`
- **Status:** `published` (CMS) · **statusLabel:** `Live` (public)
- **CTA:** Visit getpandit.com (external) + Discuss a similar project → `/contact`
- **Images:** `public/portfolio/getpandit-hero.svg`, `getpandit-flow.svg`
- **Embedded metrics:** `GetPanditSuccessMetrics` on detail page only

---

## Components

| File | Role |
| --- | --- |
| `CaseStudyCard.tsx` | Mobile-first card — industry, status, project, summary, tech chips, business value preview |
| `CaseStudyDetail.tsx` | Full case study layout with all config sections and CTAs |

---

## Mobile layout

- Cards: single column default, 2 columns `md+`, 3 columns `xl+` on index
- Detail meta grid: 1 column → 2 `sm` → 4 `lg`
- CTA buttons: full-width stack on mobile (`mobile-cta-stack`)
- Hero images: responsive `aspect-[16/9]` with `sizes` hints

---

## Navigation & SEO

- Main nav: **Portfolio**, **Case Studies**
- SEO keys: `portfolio`, `caseStudies`; per-slug metadata from `study.title` + `study.summary`
- JSON-LD article schema on detail pages (`buildCaseStudyJsonLd`)
- Sitemap: `/portfolio`, `/case-studies`, each published slug

---

## Analytics

| Event | Page |
| --- | --- |
| `portfolio_view` | `/portfolio` |
| `case_study_view` | `/case-studies/[slug]` |

---

## Editing

1. Add or edit entries in `caseStudies` inside `src/config/portfolio.ts`
2. Set `status: "published"` to appear on index and sitemap
3. Set `featured: true` for portfolio hero section
4. Add SVG/PNG assets under `public/portfolio/`
5. Run `npm run build` — `generateStaticParams` picks up new slugs

---

## Related

- [GetPandit product page](/getpandit)
- [Product Ecosystem](/products/ecosystem)
- [Functional spec § 5.4.13](./01-functional-specification.md)
