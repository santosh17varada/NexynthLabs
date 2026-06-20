# Homepage Innovation Lab Guide

**Audience:** Product, marketing, engineers  
**Config:** `src/config/home-innovation-lab.ts`  
**Component:** `src/components/home/HomeInnovationLabSection.tsx`  
**Placement:** Home story flow §8 (`#innovation-lab`)

## Tracks shown (5)

| Section id | Title |
| --- | --- |
| `ai-experiments` | AI Experiments |
| `automation-concepts` | Automation Concepts |
| `agentic-ai-research` | Agentic AI Research |
| `future-product-ideas` | Future Product Ideas |
| `getpandit-evolution` | GetPandit Evolution |

Content is sourced from `innovationLabSections` in `src/config/innovation-lab.ts` — the homepage does not duplicate item copy.

## Status labels

Each track card shows per-status counts and up to three featured items with badges:

- **Concept** — ideation, no committed build
- **Prototype** — demo/staging only
- **Planned** — scoped, not in active public release
- **Live** — publicly available on stated domain

A status legend panel explains all four labels using `innovationLabStatusDescriptions`.

## Layout

- Mobile: stacked category cards
- `md+`: two-column grid; GetPandit Evolution spans full width
- GetPandit track uses accent gradient styling + “Flagship track” chip
- CTA: **Explore Innovation Lab** → `/innovation-lab`
- Disclaimer from full Innovation Lab page copy

## Editing

| Change | File |
| --- | --- |
| Homepage section copy, track order | `homeInnovationLabCopy` |
| R&D items and statuses | `src/config/innovation-lab.ts` |
| Featured item count on home | `homeInnovationLabCopy.featuredItemLimit` |

## Related

- [26-innovation-lab-guide.md](./26-innovation-lab-guide.md)
- [49-homepage-story-flow-guide.md](./49-homepage-story-flow-guide.md)
