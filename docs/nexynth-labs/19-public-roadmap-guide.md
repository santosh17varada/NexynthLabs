# Public Roadmap — Nexynth Labs Website

**Route:** `/roadmap`  
**Config:** `src/config/roadmap.ts`  
**Last updated:** June 2026

---

## Purpose

The public roadmap shows **honest milestone status** for corporate and product work — grouped as Completed, In Progress, Planned, and Future. It is not a commitment schedule.

---

## Status groups

| Status | Meaning |
| --- | --- |
| **Completed** | Shipped and publicly available (or fully delivered on corporate site) |
| **In Progress** | Active work — not marketed as finished |
| **Planned** | Defined scope — not yet in active build |
| **Future** | Directional — may change |

---

## Example items (default config)

| Item | Default status |
| --- | --- |
| GetPandit MVP | Completed |
| Corporate SEO foundation | Completed |
| Admin platform | In Progress |
| Payment gateway | In Progress |
| WhatsApp booking | In Progress |
| AI assistant | In Progress |
| Vendor portal | Planned |
| Mobile apps | Planned |

Additional items (Lead CRM, analytics, database CMS, etc.) are included for corporate transparency.

---

## Dates

Optional per item: `targetDate?: string` in `roadmapItems`. **Omit by default** — only set when leadership approves a public date.

---

## Editing

1. Open `src/config/roadmap.ts`
2. Update `status`, `summary`, or add items with unique `id`
3. Set `targetDate` only when approved
4. Run `npm run build`

---

## Components

| File | Role |
| --- | --- |
| `RoadmapTimeline.tsx` | Mobile-first vertical timeline by group |
| `RoadmapStatusBadge.tsx` | Status pill |

---

## Navigation & SEO

- Main nav: **Roadmap** → `/roadmap`
- Footer: via `navigation.main`
- SEO key: `publicRoadmap`

---

## Related documents

- [Future Roadmap (internal phases)](./08-future-roadmap.md)
- [Product Ecosystem Guide](./16-product-ecosystem-guide.md)
- [Founder Story Guide](./17-founder-story-guide.md)
