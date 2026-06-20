# Header Navigation Guide

**Audience:** Product, marketing, engineers  
**Source of truth:** `src/config/header-navigation.ts`  
**UI:** `src/components/layout/Header.tsx`

## Overview

The site header uses a **grouped information architecture** — six top-level items plus a primary CTA — instead of a long flat link list. All routes remain unchanged; every former main-nav destination is still reachable from a dropdown (featured or “More” section).

## Top-level structure

| Item | Type | Default link |
| --- | --- | --- |
| Home | Direct | `/` |
| Services | Dropdown | `/services` |
| Products | Dropdown | `/products` |
| Innovation Lab | Direct | `/innovation-lab` |
| Resources | Dropdown | `/resources` |
| Company | Dropdown | `/about` |

**Primary CTA:** Book Consultation → `/book-consultation`

## Dropdown contents

### Services

**Featured**

- AI Solutions → `/contact?service=ai-solutions`
- Product Engineering → `/contact?service=product-engineering`
- Cloud & DevOps → `/contact?service=cloud-devops`
- Enterprise Integrations → `/contact?service=enterprise-integrations`

**More**

- All services → `/services`
- Technology Excellence → `/technology`
- AI Showcase → `/ai-showcase`

### Products

**Featured**

- GetPandit → `/getpandit`
- Product Ecosystem → `/products/ecosystem`
- Roadmap → `/roadmap`

**More**

- Products overview → `/products`
- Portfolio → `/portfolio`

### Resources

**Featured**

- Blog → `/blog`
- Case Studies → `/case-studies`
- FAQ → `/faq`
- Downloads → `/resources`

**More**

- Guides, Client Success, Testimonials, Events, Media kit, Developers

### Company

**Featured**

- About, Leadership, Founder, Careers, Contact

**More**

- Vision, Partners, Request proposal, Status

## Legacy compatibility

`siteConfig.navigation.main` in `src/config/site.ts` is generated via `flattenHeaderNavLinks()` so scripts and docs that expect a flat list still see every href. **Do not hand-edit** `navigation.main`; change `header-navigation.ts` instead.

## Desktop vs mobile

- **Desktop (lg+):** Hover and keyboard focus open dropdown panels; group label links to the section hub.
- **Mobile:** Hamburger opens a **fixed overlay panel** below the sticky header with backdrop dimming. Accordion groups (one expanded at a time); **min-h-11** sub-links; full-width Book Consultation CTA at the bottom. Closes on link tap, backdrop tap, **Escape**, or route change; body scroll locked while open.

### Header logo lockup

- **Mark:** `nexynth-logo-mark-transparent.png` — transparent background, no white rounded container
- **Wordmark + descriptor:** HTML in `Logo.tsx` (`showDescriptor` in header)
- **Sizing:** `h-9` / `lg:h-10` mark; `items-center` alignment with wordmark stack

### Desktop mega menu styling

Defined in `Header.tsx` (`megaMenuPanelSurfaceClass`) and `globals.css` (`.site-mega-menu-panel`).

- **Container:** `rounded-ds-xl`, `shadow-floating` only — **no outer border or ring** on hover/focus.
- **Nav triggers:** Text/chevron color change only on hover — no pill `hover:bg-*`, row-wide bands, or active-state rings on the header bar.
- **Mega menu scrim:** Starts at measured header height (`ResizeObserver` syncs `--site-header-offset`) so the dim overlay does not bleed through the glass header.
- **Keyboard:** Subtle `focus-visible:ring` on the focused nav item only (not full row).
- **Internal dividers:** Section separators inside the panel keep subtle `border-border/50` lines; these are not the outer container edge.

## QA

- `scripts/phase3-qa-check.mjs` — validates config keys and critical hrefs in `header-navigation.ts`
- `scripts/regression-qa-check.mjs` — fetches home HTML and asserts header contains key hrefs (including dropdown-only links)

## Related

- Footer nav: `siteConfig.navigation.company`, `.products`, `.knowledge`, `.legal`, `.trust` (unchanged)
- Book Consultation flow: [24-book-consultation-guide.md](./24-book-consultation-guide.md)
