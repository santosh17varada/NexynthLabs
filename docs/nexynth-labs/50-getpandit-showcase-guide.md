# GetPandit Showcase Guide

**Audience:** Product, marketing, engineers  
**Config:** `src/config/getpandit-showcase.ts`  
**Component:** `src/components/getpandit/GetPanditShowcase.tsx`  
**Home placement:** Story flow §3 (`#flagship`)

## Purpose

Present GetPandit as **Nexynth Labs' flagship product** with a premium mockup-style layout — without user counts, revenue figures, or unverified live claims.

## Section structure

1. **Flagship product badge** + live domain chip (`getpandit.com`)
2. **Product summary** — tagline and description from `productCatalog`
3. **Browser mockup** — `/portfolio/getpandit-hero.svg` inside a URL-bar frame
4. **Ecosystem highlights** — Web, Mobile, Admin (statuses from `getpandit-metrics.ts`)
5. **Readiness grid** — Booking, pandit onboarding, admin operations, integrations
6. **CTAs** — Explore GetPandit (`/getpandit`), Partner With Us (`/contact?intent=partner`)
7. **Disclaimer** — readiness-only labels

## Honesty rules

| Do | Don't |
| --- | --- |
| Use `platform-ready`, `integration-ready`, `in-progress`, `planned` | Publish customer or booking totals |
| Pull statuses from `getPanditSuccessMetrics` | Mark admin or onboarding as "Live" when `in-progress` |
| Note separate product domain | Imply corporate site hosts booking or payments |

## Config keys

| Key | Purpose |
| --- | --- |
| `getPanditShowcaseCopy` | Badge, CTAs, mockup asset, disclaimer |
| `getPanditEcosystemSurfaces` | Web / mobile / admin cards + linked metric ids |
| `getPanditShowcaseReadinessIds` | Which metrics appear in the readiness grid |
| `getShowcaseReadinessMetrics()` | Resolves metric objects for the grid |

## Related surfaces

| Surface | Component |
| --- | --- |
| Home story flow §3 | `GetPanditShowcase` |
| `/getpandit` product page | `ProductDetailSection` + `GetPanditSuccessMetrics` (full detail) |
| Case study | `/case-studies/getpandit` |

## Related docs

- [49-homepage-story-flow-guide.md](./49-homepage-story-flow-guide.md)
- [31-portfolio-case-studies-guide.md](./31-portfolio-case-studies-guide.md)
