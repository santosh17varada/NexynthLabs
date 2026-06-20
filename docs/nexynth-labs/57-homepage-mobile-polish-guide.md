# Homepage Mobile Polish Guide

**Audience:** QA, designers, engineers  
**Prompt:** 12 — Mobile polish (homepage + navigation)  
**Breakpoints tested:** 360, 390, 430, 768, 1024, desktop

## Global utilities

| Utility | Location | Purpose |
| --- | --- | --- |
| `.mobile-cta-stack` | `src/app/globals.css` | Full-width CTAs below **768px** |
| `.mobile-bleed-guard` | `src/app/globals.css` | `overflow: hidden` + `isolation` for decorative blurs |
| `--site-header-offset` | `src/app/globals.css` | Sticky header height + safe-area; used for scroll padding and mobile nav position |

## Header (mobile)

- Hamburger **44×44px** tap target; opens fixed overlay panel below header
- **Backdrop** tap and **Escape** close menu
- Menu closes on **route change** and link tap
- **Body scroll locked** while open
- Accordion groups expand/collapse with **min-h-11** sub-links
- Book Consultation CTA full-width at bottom of panel

## Homepage sections

| Section | Mobile adjustments |
| --- | --- |
| Hero | Tighter vertical rhythm; fluid H1; innovation card stacks highlight rows; blurs contained |
| GetPandit showcase | Shorter badge copy on narrow screens; truncated mockup URL bar; responsive title scale |
| Capabilities / Why / Case studies | `mobile-cta-stack` on section CTAs; reduced card padding |
| Founder vision | Centered image (240–280px); full-width CTA; smaller blockquote on mobile |
| Final CTA | Stacked buttons until 768px |
| Footer | 2-column link grid; Legal spans full width on phones; contact links ≥ 44px |

## QA automation

```bash
QA_BASE_URL=http://localhost:3000 node scripts/mobile-viewport-qa.mjs
```

Checks horizontal overflow, header, and footer at 360–1280px on key routes including `/`.

## Related

- [09-mobile-qa-checklist.md](./09-mobile-qa-checklist.md)
- [47-header-navigation-guide.md](./47-header-navigation-guide.md)
- [48-home-hero-guide.md](./48-home-hero-guide.md)
- [56-footer-cta-guide.md](./56-footer-cta-guide.md)
