# Homepage Capabilities Guide

**Audience:** Product, marketing, engineers  
**Config:** `src/config/home-capabilities.ts`  
**Component:** `src/components/home/HomeCapabilitiesSection.tsx`  
**Placement:** Home story flow §4 (`#capabilities`)

## Capability groups

| Group | Service source | Default CTA |
| --- | --- | --- |
| AI & Automation | `ai-solutions` | `/ai-showcase` |
| Product Engineering | `product-engineering` | `/contact?service=product-engineering` |
| Cloud & DevOps | `cloud-devops` | `/contact?service=cloud-devops` |
| Enterprise Integrations | `enterprise-integrations` | `/contact?service=enterprise-integrations` |

Each card includes:

- Icon badge (AI, PE, Cloud, API)
- Short headline
- Three bullets — pulled from matching `serviceCatalog` benefits when available
- Text link CTA

## Visual design

- 2×2 responsive grid (`sm+`), single column on mobile
- Premium surface cards with subtle hover lift, border accent, and top gradient line
- Section footer: **View all services** + **Book Consultation**

## Editing

1. Section title/description → `homeCapabilitiesCopy`
2. Group headlines, CTAs, or fallback bullets → `homeCapabilityGroups`
3. Bullet text at scale → update `src/config/services.ts` (benefits sync automatically)

## Related

- Full catalog: `/services` (`ServicesCatalog`)
- Header nav Services dropdown: [47-header-navigation-guide.md](./47-header-navigation-guide.md)
- Story flow: [49-homepage-story-flow-guide.md](./49-homepage-story-flow-guide.md)
