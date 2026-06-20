# Testimonials — Nexynth Labs Website

**Route:** `/testimonials`  
**Config:** `src/config/testimonials.ts`  
**Last updated:** June 2026

---

## Purpose

Social proof layout with **placeholder quotes only** until real client approvals exist. Reusable `TestimonialCard` on `/testimonials` and the home page featured section.

---

## Fields (per testimonial)

| Field | Config key | Notes |
| --- | --- | --- |
| Name | `name` | Use "Placeholder — …" until approved |
| Role | `role` | Job title |
| Company | `company` | Illustrative company name |
| Quote | `quote` | Full testimonial text |
| Category | `category` | services · product · partnership · ai · engineering |
| Status | `status` | placeholder · approved · draft |

Optional: `featured: true` for home page grid (max 3 recommended).

---

## Status rules

| Status | Public site |
| --- | --- |
| **Placeholder** | Shown with amber badge — not verified endorsement |
| **Approved** | Shown with accent badge — use only with written permission |
| **Draft** | Hidden from `/testimonials` and home |

---

## Components

| File | Role |
| --- | --- |
| `TestimonialCard.tsx` | Reusable quote card |
| `TestimonialsGrid.tsx` | Category filter + responsive grid |
| `TestimonialsSection.tsx` | Home featured row |

---

## Mobile layout

- Cards: 1 column → 2 `sm` → 3 `lg`
- Category chips: wrapped pills, 44px min height
- Quote text readable at 16px+ on mobile

---

## Navigation & SEO

- Main nav: **Testimonials**
- SEO key: `testimonials`
- Sitemap: `/testimonials`
- Admin preview: `/admin/testimonials`

---

## Editing

1. Add or edit items in `testimonials` array inside `src/config/testimonials.ts`
2. Set `status: "approved"` only with documented client permission
3. Set `featured: true` for home spotlight (optional)
4. Run `npm run build`

---

## Related

- [Client Success Guide](./32-client-success-guide.md) — anonymized outcomes (not quotes)
- [Functional spec § 5.4.18](./01-functional-specification.md)
