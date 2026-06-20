# Founder Story — Nexynth Labs Website

**Route:** `/company/founder`  
**Config:** `src/config/founder-story.ts`  
**Last updated:** June 2026

---

## Purpose

The Founder Story page shares **company-level** direction — why Nexynth Labs was started, why GetPandit was built, vision for AI and spiritual technology, and a directional long-term roadmap. It is not a personal biography page.

---

## Content rules

| Rule | Detail |
| --- | --- |
| **No overclaiming** | Do not add unverified credentials, awards, user counts, or revenue figures |
| **Company voice** | Write as Nexynth Labs leadership / company vision |
| **Founder note** | `founderNote.isPlaceholder: true` until approved copy replaces placeholder text |
| **Honest products** | Only describe GetPandit as live where accurate; link to ecosystem for other statuses |
| **Roadmap** | Directional phases — not dated guarantees or investment promises |

---

## Sections (config keys)

| Section | Config path | Component |
| --- | --- | --- |
| Hero | `hero` | `PageHero` |
| Founder note | `founderNote` | `FounderNoteSection` |
| Why Nexynth Labs | `whyNexynth` | `WhyNexynthSection` |
| Why GetPandit | `whyGetPandit` | `WhyGetPanditSection` |
| Vision | `vision.pillars` | `VisionSection` |
| Long-term roadmap | `roadmap.phases` | `RoadmapSection` |
| CTA | `closingCta` | `CtaBanner` — Partner / Contact |

---

## Editing the founder note

1. Open `src/config/founder-story.ts`
2. Replace `founderNote.paragraphs` with approved copy
3. Update `founderNote.attribution` (e.g. role + name if approved)
4. Set `founderNote.isPlaceholder` to `false`
5. Re-run `npm run build` and legal review if personal claims are added

---

## Navigation & SEO

- Main nav: **Founder** → `/company/founder`
- About page: link “Read the founder story”
- Sitemap: `src/app/sitemap.ts`
- SEO key: `founderStory` in `siteConfig.seo.pages`

---

## Related documents

- [About page](../src/app/(site)/about/page.tsx)
- [Product Ecosystem Guide](./16-product-ecosystem-guide.md)
- [Functional Specification](./01-functional-specification.md)
