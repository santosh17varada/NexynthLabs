# SEO & Performance Polish Guide

**Audience:** Marketing, engineers, QA  
**Prompt:** 13 — Post-redesign SEO and performance polish  
**Config:** `src/config/site.ts` → `seo`, `src/config/og-share.ts`

## Homepage metadata

| Field | Value |
| --- | --- |
| Document title (absolute) | Nexynth Labs \| AI-First Product Engineering & GetPandit |
| Meta description | AI-powered products, cloud-native platforms, GetPandit, Hyderabad, book consultation |
| Canonical | `https://nexynthlabs.com/` |
| OG / Twitter | Generated `opengraph-image` / `twitter-image` using hero-aligned copy |

Homepage no longer uses generic `"Home | Nexynth Labs"` — `createPageMetadata()` sets `{ absolute: defaultTitle }` when `path === "/"`.

## Open Graph

Shared copy in `src/config/og-share.ts` (sourced from `homeHeroCopy`):

- **Headline:** Technology with purpose, crafted in Hyderabad.
- **Subline:** AI-first product engineering · GetPandit · Hyderabad, India

Images: 1200×630 PNG via Next.js `ImageResponse` (edge).

## Structured data

| Scope | Schema | Location |
| --- | --- | --- |
| All public pages | Organization + WebSite `@graph` | `(site)/layout.tsx` |
| Homepage | WebPage + Product (GetPandit) `@graph` | `(site)/page.tsx` |
| FAQ | FAQPage | `/faq` |
| Blog | Article | `/blog/[slug]` |
| Case studies | Article | `/case-studies/[slug]` |
| Leadership | Person | `/leadership/[slug]` |

## Images & performance

| Rule | Implementation |
| --- | --- |
| Alt text | Descriptive `alt` on content images; decorative thumbnails use `alt=""` + `aria-hidden` |
| Lazy loading | Default for `next/image`; explicit `loading="lazy"` on below-fold case-study heroes |
| LCP | No `priority` on below-fold founder portrait; hero is text-first |
| Fonts | Geist with `display: swap` |
| Unused assets | Removed default Next.js demo SVGs from `public/` |
| Layout | `overflow-x: clip` on body/main; no horizontal scroll |

Largest static asset: founder headshot (~148 KB JPEG) — optimized via `next/image`.

## Crawl & links

- **Sitemap:** `src/app/sitemap.ts` — static routes, blog, case studies, knowledge articles
- **robots.txt:** Allow `/`, disallow `/admin/`, `/api/`
- **QA scripts:**
  - `node scripts/regression-qa-check.mjs` — SEO tags, sitemap count, homepage title
  - `node scripts/internal-links-qa.mjs` — home internal hrefs

## Editing checklist

1. Update `siteConfig.seo.defaultTitle` / `pages.home.description` for homepage SEO
2. Hero copy changes auto-flow to OG via `og-share.ts` if `homeHeroCopy` changes
3. Re-run build + regression QA before release

## Related

- [07-seo-guide.md](./07-seo-guide.md)
- [48-home-hero-guide.md](./48-home-hero-guide.md)
