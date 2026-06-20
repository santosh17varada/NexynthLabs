# Homepage Why Nexynth Labs Guide

**Audience:** Product, marketing, legal, engineers  
**Config:** `src/config/home-why.ts`  
**Component:** `src/components/home/HomeWhySection.tsx`  
**Placement:** Home story flow §5 (`#why-nexynth`)

## Purpose

Explain **why partners and clients choose Nexynth Labs** with premium layout and honest, verifiable positioning — no inflated metrics or unqualified superlatives.

## Seven reasons (current)

| Reason | Honesty note |
| --- | --- |
| 18+ years enterprise leadership | Matches approved founder/leadership biography |
| AI-assisted product development | AI as delivery aid with oversight — not “fully autonomous” claims |
| Founder-led execution | Company structure statement, not a SLA guarantee |
| Built in Hyderabad | Factual HQ from `site-values.ts` |
| Cloud-native engineering | Capability positioning — not a certification list |
| GetPandit flagship platform | Live product on separate domain; no fake user/revenue stats |
| Business + technology alignment | Process philosophy — not outcome guarantees |

Featured cards (left column on desktop): enterprise leadership, founder-led, GetPandit flagship.

## Layout

- Mobile: stacked cards, full width
- `lg+`: featured column + 2×2 grid for remaining reasons
- Hover lift, border accent, optional deep links per card
- Footnote clarifies positioning vs. engagement guarantees
- CTAs: About, Leadership

## Editing

Update titles, descriptions, links, or featured flags in `homeWhyReasons` inside `src/config/home-why.ts`. Coordinate 18+ years and founder claims with `src/config/leadership.ts` and legal review.

## Related

- [46-leadership-founder-guide.md](./46-leadership-founder-guide.md)
- [49-homepage-story-flow-guide.md](./49-homepage-story-flow-guide.md)
