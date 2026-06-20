# Product Ecosystem — Nexynth Labs Website

**Route:** `/products/ecosystem`  
**Config:** `src/config/product-ecosystem.ts`  
**Last updated:** June 2026

---

## Purpose

The Product Ecosystem page presents the full Nexynth Labs product line — live platforms, in-progress builds, planned offerings, and coming-soon concepts — with **honest readiness labels**. Only products marked **Live** are described as publicly available.

---

## Status labels

| Status | Meaning |
| --- | --- |
| **Live** | Product is available on its stated domain |
| **In Progress** | Active engineering or services delivery; not marketed as live |
| **Planned** | Roadmap item with defined scope; not started publicly |
| **Coming Soon** | Early concept; no launch date claimed |

Edit statuses in `src/config/product-ecosystem.ts`. Do not mark a product `live` unless it is publicly available.

---

## Core platforms (config)

| Product | Default status |
| --- | --- |
| GetPandit | Live |
| AI Agents Platform | In Progress |
| Temple Management Platform | Planned |
| Vendor Marketplace | Planned |
| Enterprise Automation Suite | In Progress |

## Coming soon section

Additional pipeline items (e.g. Community Ritual Planner, Devotional Content Hub) use `coming_soon` status.

---

## Components

| File | Role |
| --- | --- |
| `src/components/product-ecosystem/EcosystemProductCard.tsx` | Mobile-first product card |
| `src/components/product-ecosystem/EcosystemProductStatusBadge.tsx` | Status pill |
| `src/components/product-ecosystem/EcosystemProductGrid.tsx` | Section grid layout |

---

## Navigation & SEO

- Main nav: **Ecosystem** → `/products/ecosystem`
- Footer (Products column): **Product Ecosystem**
- Sitemap: included in `src/app/sitemap.ts`
- SEO key: `productEcosystem` in `siteConfig.seo.pages`

---

## Related documents

- [Functional Specification](./01-functional-specification.md)
- [Technical Specification](./02-technical-specification.md)
- [Products config](../src/config/products.ts) — live catalog (`/products`)
