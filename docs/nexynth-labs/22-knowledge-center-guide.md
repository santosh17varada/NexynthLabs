# Knowledge Center — Nexynth Labs Website

**Routes:** `/resources` · `/guides` · `/resources/[slug]` · `/guides/[slug]`  
**Config:** `src/config/knowledge.ts`  
**Last updated:** June 2026

---

## Purpose

Config-driven knowledge articles until in-browser CMS editors ship. No database backend — content lives in `knowledgeArticles`.

---

## Categories

| ID | Label |
| --- | --- |
| `ai` | AI |
| `product-engineering` | Product Engineering |
| `devops` | DevOps |
| `mobile-apps` | Mobile Apps |
| `digital-transformation` | Digital Transformation |
| `spiritual-technology` | Spiritual Technology |

---

## Listing types

| Route | `listingType` | Content |
| --- | --- | --- |
| `/resources` | `resource` | **Download cards** (brochures/decks) + 6 articles — see [Resource Downloads Guide](./34-resource-downloads-guide.md) |
| `/guides` | `guide` | 6 guide articles |

Detail pages render `sections` from config (same pattern as blog posts).

---

## Search & filter

Client component `KnowledgeArticleGrid`:

- **Search** — filters title, excerpt, and category label (case-insensitive)
- **Category chips** — filter by one category or All
- No URL persistence (kept simple for phase 3)

---

## Adding an article

1. Add entry to `knowledgeArticles` in `src/config/knowledge.ts`
2. Set unique `slug`, `listingType`, and `category`
3. Provide `sections` for the detail page body
4. Run `npm run build` — `generateStaticParams` picks up new slugs

---

## Future CMS TODO

| Item | Priority |
| --- | --- |
| In-browser knowledge editor in admin | P1 (phase 3 CMS) |
| URL-synced filters (`?category=&q=`) | P3 |
| Full-text search index | P3 |
| RSS feed for resources/guides | P3 |
| Related articles block | P3 |

---

## Navigation & SEO

- Footer bar: Resources · Guides (with Security, Trust, legal)
- SEO keys: `knowledgeResources`, `knowledgeGuides`
- Article pages use `createPageMetadata` with `type: article`
- Sitemap includes index routes and all article URLs

---

## Related documents

- [Blog config](../src/config/blog.ts)
- [CMS TODO](../cms-todo.md)
- [Technical Specification](./02-technical-specification.md)
