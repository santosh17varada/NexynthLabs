# Technology Excellence — Nexynth Labs Website

**Route:** `/technology`  
**Config:** `src/config/technology-excellence.ts`  
**Last updated:** June 2026

---

## Purpose

The Technology Excellence page summarises **engineering capabilities** Nexynth Labs uses for products and client delivery — organised in seven sections, not as unverified certification claims.

---

## Sections & technologies

| Section | Technologies / capabilities |
| --- | --- |
| **AI** | AI Agents |
| **Web** | Next.js, NestJS |
| **Mobile** | React Native |
| **Cloud** | AWS, MongoDB |
| **DevOps** | CI/CD, observability, release discipline |
| **Integrations** | WhatsApp APIs, SMS gateways, Payment gateways |
| **Security** | Auth, sessions, least privilege |

Edit cards in `technologyExcellenceSections` inside `src/config/technology-excellence.ts`.

---

## Components

| File | Role |
| --- | --- |
| `TechnologyCapabilityCard.tsx` | Mobile-first capability card |
| `TechnologyExcellenceSections.tsx` | Seven section grids with alternating background |
| `TechnologySectionNav.tsx` | Jump links (AI, Web, Mobile, …) |

---

## Navigation & SEO

- Main nav: **Technology** → `/technology`
- Footer: included via `navigation.main`
- Sitemap: `src/app/sitemap.ts`
- SEO key: `technologyExcellence`

---

## Related documents

- [Services](../src/config/services.ts)
- [Integrations Guide](./12-integrations-guide.md)
- [AI Showcase](/ai-showcase)
- [Security Center](/security)
