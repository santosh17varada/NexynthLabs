# FAQ Center — Nexynth Labs Website

**Route:** `/faq`  
**Config:** `src/config/faqs.ts`  
**Last updated:** June 2026

---

## Purpose

Searchable help center for corporate visitors — config-driven Q&A with FAQPage JSON-LD for SEO.

---

## Categories

| ID | Label |
| --- | --- |
| `services` | Services |
| `products` | Products |
| `getpandit` | GetPandit |
| `partnerships` | Partnerships |
| `careers` | Careers |
| `security` | Security |
| `contact` | Contact |

---

## FAQ item fields

| Field | Config key |
| --- | --- |
| Question | `question` |
| Answer | `answer` |
| Category | `category` |
| Published | `published` (false hides from public + schema) |

---

## Search & filter

Client component `FaqCenter`:

- **Search** — matches question, answer, and category label
- **Category chips** — filter one category or All
- **Accordion** — native `<details>` for mobile-friendly expand/collapse

---

## SEO — FAQ schema

Published items are injected as `FAQPage` JSON-LD via `buildFaqPageJsonLd()` in `src/lib/seo.ts` on `/faq`.

- SEO metadata key: `faq`
- Sitemap: `/faq`

---

## Components

| File | Role |
| --- | --- |
| `FaqCenter.tsx` | Search, filter, list |
| `FaqAccordionItem.tsx` | Single Q&A accordion row |

---

## Editing

1. Add entries to `faqs` in `src/config/faqs.ts`
2. Set `published: true` for public visibility
3. Run `npm run build`

---

## Related

- [Contact](/contact)
- [Security](/security)
- [Admin FAQs module](/admin/faqs)
