# Homepage Founder Vision Guide

**Audience:** Leadership, marketing, engineers  
**Config:** `src/config/home-founder.ts`  
**Component:** `src/components/home/HomeFounderVisionSection.tsx`  
**Placement:** Home story flow §6 (`#founder-vision`)

## Content

| Field | Value |
| --- | --- |
| Name | Santosh Kumar Varada |
| Title | Founder, CEO & Managing Director |
| Image | `/images/leadership/santosh-kumar-varada-founder.jpg` (via `founderProfileImage` + `LeadershipProfileImage`) |
| CTA | Read Founder Story → `/company/founder` |

The vision message is config-driven in `homeFounderVisionCopy.message` — edit there for homepage updates without changing the legacy `founderMessageSection` used elsewhere.

## Layout

- Mobile: founder portrait and name stack above quoted message
- `lg+`: two-column grid — image + attribution left, blockquote + CTA right
- Gradient shell with subtle radial accents matching other premium home sections

## Related components

| Component | Use |
| --- | --- |
| `HomeFounderVisionSection` | Homepage story flow |
| `FounderMessageSection` | Legacy embed config (`founderMessageSection`) — not on home after Prompt 8 |

## Related docs

- [46-leadership-founder-guide.md](./46-leadership-founder-guide.md)
- [17-founder-story-guide.md](./17-founder-story-guide.md)
- [49-homepage-story-flow-guide.md](./49-homepage-story-flow-guide.md)
