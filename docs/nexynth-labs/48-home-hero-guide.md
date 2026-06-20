# Homepage Hero Guide

**Audience:** Product, marketing, engineers  
**Config:** `src/config/home.ts`  
**Component:** `src/components/home/HomeHero.tsx`

## Purpose

The homepage hero establishes a **premium, AI-first technology company** identity — distinct from the generic `PageHero` used on inner pages.

## Content (current)

| Element | Value |
| --- | --- |
| Eyebrow | AI-first product engineering |
| Headline | Technology with purpose, crafted in Hyderabad. |
| Support text | AI-powered products, cloud-native platforms, mobile apps, enterprise integrations |
| Primary CTA | Explore GetPandit → `/getpandit` |
| Secondary CTA | Book Consultation → `/book-consultation` |
| Trust badges | AI-first, Product Engineering, Cloud-ready |
| Founder badge | Founder-led company → `/leadership/santosh-kumar-varada` |

## Visual card

The right-column **Flagship & innovation** card surfaces:

- GetPandit product summary with live status and readiness highlights
- Innovation Lab teaser with link to `/innovation-lab`
- Primary product CTA within the card

Edit highlights and copy in `homeHeroCopy.innovationCard` — no route changes required.

## Layout

- **Mobile-first:** Single column; card stacks below copy; full-width CTAs via `mobile-cta-stack` until **768px**; decorative blurs contained with `mobile-bleed-guard`
- **lg+:** Two-column grid — copy left, visual card right
- **Background:** Layered primary/accent gradients + subtle grid mesh (CSS only)

## Related

- Inner pages continue to use `PageHero` (`src/components/ui/PageHero.tsx`)
- Founder imagery: `founderProfileImage` in `src/config/leadership.ts`
- Header CTA alignment: [47-header-navigation-guide.md](./47-header-navigation-guide.md)
