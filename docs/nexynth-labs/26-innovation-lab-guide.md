# Innovation Lab — Nexynth Labs Website

**Route:** `/innovation-lab`  
**Config:** `src/config/innovation-lab.ts`  
**Last updated:** June 2026

---

## Purpose

Public R&D and prototype catalog with honest readiness labels. **Not a product catalog** — concepts and prototypes must not be marketed as shipped offerings.

---

## Status labels

| Status | Meaning |
| --- | --- |
| **Concept** | Ideation or whiteboard — no committed build |
| **Prototype** | Demo, mock, or staging-only — not production SLA |
| **Planned** | Scoped work with prerequisites — not in active public release |
| **Live** | Publicly available on stated domain or corporate route |

Every card displays exactly one status badge. Definitions are also shown in the page status legend (`InnovationLabStatusLegend`).

---

## Sections

| Section ID | Title |
| --- | --- |
| `ai-experiments` | AI Experiments |
| `automation-concepts` | Automation Concepts |
| `future-product-ideas` | Future Product Ideas |
| `agentic-ai-research` | Agentic AI Research |
| `getpandit-evolution` | GetPandit Evolution |
| `prototype-showcase` | Prototype Showcase |

---

## Mobile layout

- Section jump nav (`InnovationLabSectionNav`) — wrapped pill links, 44px min touch targets
- Item cards — single column on mobile, 2 columns `sm+`, 3 columns `lg+`
- Status legend — stacked definitions on mobile, 2-column grid `sm+`
- Alternating section backgrounds for scanability

---

## Components

| File | Role |
| --- | --- |
| `InnovationLabItemCard.tsx` | Item card with status badge and optional CTA |
| `InnovationLabSections.tsx` | Six section grids |
| `InnovationLabSectionNav.tsx` | Jump links to each section |
| `InnovationLabStatusBadge.tsx` | Concept / Prototype / Planned / Live badge |
| `InnovationLabStatusLegend.tsx` | Badge row + honesty definitions |

---

## Honesty rules

1. Do **not** mark Concept or Prototype as Live.
2. **Live** on corporate site ≠ live product SKU — e.g. Lead CRM lite is live for staff admin only.
3. **GetPandit** live items must reference getpandit.com, not nexynthlabs.com hosting.
4. No false compliance, user count, or revenue claims in highlights.
5. Page disclaimer states no live experiment APIs on the marketing site.

---

## Editing

1. Edit `innovationLabSections` in `src/config/innovation-lab.ts`
2. Each item requires `id`, `title`, `status`, `description`, `highlights`
3. Optional `cta` with `label`, `href`, `external`
4. Run `npm run build`

---

## Navigation & SEO

- Main nav: **Innovation Lab** → `/innovation-lab`
- Footer knowledge column: **Innovation Lab**
- SEO key: `innovationLab` (mentions Concept, Prototype, Planned, Live in description)
- Sitemap: `src/app/sitemap.ts`

---

## Related

- [AI Showcase](/ai-showcase) — service-oriented AI capabilities
- [Public Roadmap](/roadmap) — delivery timeline groups
- [Product Ecosystem](/products/ecosystem) — product readiness labels
