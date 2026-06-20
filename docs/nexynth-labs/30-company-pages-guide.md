# Company Pages — Nexynth Labs Website

**Routes:** `/company/founder`, `/company/leadership`, `/company/vision`  
**Config:** `src/config/founder-story.ts`, `company-leadership.ts`, `company-vision.ts`, `company.ts`  
**Last updated:** June 2026

---

## Purpose

Company narrative pages — founder story, leadership overview, and vision — all config-driven with **no unverified personal or financial claims**.

---

## Routes

| Route | Page | Config |
| --- | --- | --- |
| `/company/founder` | Founder story, GetPandit origin, roadmap teaser | `founder-story.ts` |
| `/company/leadership` | Leadership roles (placeholder profiles) | `company-leadership.ts` |
| `/company/vision` | Mission, pillars, principles | `company-vision.ts` |

Shared sub-navigation: `companySectionNav` in `src/config/company.ts` → `CompanySectionNav` component.

---

## Content rules

| Rule | Detail |
| --- | --- |
| No fake bios | Leadership uses `isPlaceholder: true` until approved |
| No metrics | No user counts, revenue, or awards unless verified |
| Company voice | Not investment advice or forward guarantees |
| Vision sync | Founder page vision pillars import from `company-vision.ts` |

---

## Navigation & SEO

| Location | Links |
| --- | --- |
| Main nav | Founder, Leadership, Vision |
| Footer Company column | `navigation.company` (About, Founder, Leadership, Vision, Careers, Roadmap) |
| About page | Founder, Leadership, Vision |
| SEO keys | `founderStory`, `companyLeadership`, `companyVision` |

---

## Editing leadership profiles

1. Open `src/config/company-leadership.ts`
2. Update `leadershipMembers` with approved name, role, bio
3. Set `isPlaceholder: false` when copy is approved
4. Run `npm run build` and legal review if personal claims are added

---

## Related

- [Founder Story Guide](./17-founder-story-guide.md) — founder page detail
- [Phase 3 Feature Roadmap](./29-phase-3-feature-roadmap.md) — Company area
