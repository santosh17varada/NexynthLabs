# Events & Webinars — Nexynth Labs Website

**Route:** `/events`  
**Config:** `src/config/events.ts`  
**Last updated:** June 2026

---

## Purpose

Static event and webinar catalog — meetups, launches, and AI sessions with honest status labels. **Not a ticketing platform**; registration is enquiry- or consultation-led until backends ship.

---

## Status labels

| Status | Meaning |
| --- | --- |
| **Upcoming** | Scheduled with a published date — register via enquiry |
| **Planned** | On the roadmap — date/format subject to confirmation |
| **Completed** | Session or launch concluded |

Every card displays exactly one status badge.

---

## Sections

| Section ID | Title |
| --- | --- |
| `upcoming-events` | Upcoming Events |
| `webinars` | Webinars |
| `product-launches` | Product Launches |
| `ai-sessions` | AI Sessions |
| `past-events` | Past Events |

---

## Event card fields

| Field | Config key |
| --- | --- |
| Title | `title` |
| Status | `status` |
| Schedule | `schedule` |
| Format | `format` |
| Description | `description` |
| Highlights | `highlights[]` |
| CTA | `cta` (optional) |

---

## Components

| File | Role |
| --- | --- |
| `EventItemCard.tsx` | Mobile-first event card |
| `EventsSections.tsx` | Five section grids |
| `EventSectionNav.tsx` | Jump links |
| `EventStatusBadge.tsx` | Upcoming / Planned / Completed |
| `EventStatusLegend.tsx` | Badge row + definitions |

---

## Mobile layout

- Section nav: wrapped pills, 44px touch targets
- Cards: 1 column → 2 `sm` → 3 `lg`
- Status legend: stacked on mobile, 3 columns `sm+`

---

## Navigation & SEO

- Main nav: **Events**
- Footer knowledge: **Events**
- SEO key: `events`
- Sitemap: `/events`

---

## TODO (not implemented)

- [ ] `POST /api/event-registration` lead source
- [ ] External webinar platform embed (Zoom/Meet links)
- [ ] ICS calendar download per event
- [ ] CMS CRUD for events in admin

---

## Editing

1. Edit `eventSections` in `src/config/events.ts`
2. Run `npm run build`

---

## Related

- [Book Consultation Guide](./24-book-consultation-guide.md)
- [Innovation Lab Guide](./26-innovation-lab-guide.md)
- [Partners](./partners)
