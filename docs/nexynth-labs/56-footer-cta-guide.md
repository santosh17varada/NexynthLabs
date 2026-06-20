# Footer & Final CTA Guide

**Audience:** Product, marketing, engineers  
**Footer config:** `src/config/footer-navigation.ts`  
**Footer UI:** `src/components/layout/Footer.tsx`  
**Home CTA:** `src/components/home/HomeFinalCta.tsx`

## Final CTA (homepage)

| Element | Value |
| --- | --- |
| Headline | Ready to explore GetPandit or build your next digital product with Nexynth Labs? |
| Primary | Explore GetPandit → `/getpandit` |
| Secondary | Book Consultation → `/book-consultation` |

Other pages continue to use `CtaBanner` with page-specific copy.

## Footer groups

| Column | Links |
| --- | --- |
| **Company details** | Brand, tagline, legal name, contact (email, phone, address) |
| **Company** | About, Leadership, Founder story, Careers, Partners |
| **Products** | GetPandit, Product ecosystem, Public roadmap |
| **Services** | All services, AI Showcase, Technology excellence, Book consultation |
| **Resources** | Resources, Blog, Case studies, Innovation Lab, FAQ, Security, Trust center |
| **Legal** | Privacy, Terms, Cookie, Disclaimer |

Removed from footer to reduce overload:

- Newsletter signup block
- Flat “knowledge” link strip duplicating columns
- Duplicate product external `(App)` rows
- Separate Security column (merged into Resources)

Partner Portal and other tools remain reachable via header nav and `/partners`.

## Editing

Update link groups in `footerNavigation` inside `src/config/footer-navigation.ts`.  
Update homepage CTA in `homeFinalCtaCopy` in the same file.

## Related

- [47-header-navigation-guide.md](./47-header-navigation-guide.md)
- [49-homepage-story-flow-guide.md](./49-homepage-story-flow-guide.md)
