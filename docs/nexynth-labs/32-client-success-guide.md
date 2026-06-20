# Client Success Stories — Nexynth Labs Website

**Route:** `/client-success`  
**Config:** `src/config/client-success.ts`  
**Last updated:** June 2026

---

## Purpose

Anonymous client success narratives for prospects and partners — distinct from **named** case studies (`/case-studies`). Use when you need outcome storytelling without client logos, names, or unverifiable KPIs.

---

## Story fields

| Field | Config key | Notes |
| --- | --- | --- |
| **Problem** | `problem` | Client challenge (anonymized) |
| **Approach** | `approach` | How Nexynth scoped and phased work |
| **Solution** | `solution` | What was delivered |
| **Outcome** | `outcomes[]` | Qualitative bullets only — **no fake metrics** |
| **Technologies** | `technologies[]` | Stack and patterns used |
| **CTA** | `cta` | Optional per-story link |

Also: `title`, `segment` (anonymous industry label), `published`.

---

## Honesty rules

1. **No client names, logos, or identifiable locations** unless explicit permission exists (use `/case-studies` instead).
2. **No fabricated metrics** — avoid percentages, revenue, user counts, or “X% faster” unless audited and approved.
3. Mark composites in disclaimer copy — page states anonymized / scrubbed summaries.
4. Link to **Case Studies** for named flagship work (GetPandit).

---

## Components

| File | Role |
| --- | --- |
| `ClientSuccessStoryCard.tsx` | Full anonymous story layout |
| `ClientSuccessStories.tsx` | Alternating section list |
| `ClientSuccessSectionNav.tsx` | Jump links (mobile-friendly pills) |

---

## Mobile layout

- Story cards: full-width padding, readable line length
- Section nav: wrapped pills, 44px min touch targets
- Outcome lists and tech tags wrap on narrow viewports

---

## Navigation & SEO

- Main nav: **Client Success** → `/client-success`
- SEO key: `clientSuccess`
- Sitemap: `src/app/sitemap.ts`

---

## Sales deck slice

Use these talking points when presenting Nexynth delivery (no slide-deck fiction):

| Slide / beat | Source on site |
| --- | --- |
| **We publish honest outcomes** | `/client-success` hero + disclaimer |
| **Partner & temple intake** | Story `partner-onboarding` |
| **Unified lead ops for marketing** | Story `corporate-lead-ops` |
| **AI discovery without hype** | Story `ai-readiness-discovery` |
| **Named flagship product proof** | `/case-studies/getpandit` (not anonymous) |
| **CTA — scoped consultation** | Page closing banner → `/book-consultation` |

Deck guardrail line: *“Anonymous stories describe delivery patterns; named case studies and product pages carry public readiness labels — we do not quote unaudited KPIs.”*

---

## Editing

1. Edit `clientSuccessStories` in `src/config/client-success.ts`
2. Set `published: true` to show on the page
3. Keep outcomes qualitative
4. Run `npm run build`

---

## Related

- [Portfolio & Case Studies Guide](./31-portfolio-case-studies-guide.md)
- [Book Consultation Guide](./24-book-consultation-guide.md)
- [Partner Portal Guide](./25-partner-portal-readiness-guide.md)
