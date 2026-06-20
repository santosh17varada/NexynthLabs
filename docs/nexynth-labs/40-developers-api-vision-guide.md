# Developers / API Vision — Nexynth Labs Website

**Route:** `/developers`  
**Config:** `src/config/developers.ts`  
**Last updated:** June 2026

---

## Purpose

Future-facing developer and API ecosystem page for technology partners — honest readiness labels only. **No live API implementation**, sandbox, or credentials on the corporate marketing site.

---

## Sections

| ID | Section |
| --- | --- |
| `api-vision` | Direction, summary, and design principles |
| `coming-soon-apis` | Illustrative API families (partner directory, leads, AI export, events) |
| `getpandit-integrations` | Product-domain booking, payments, messaging, onboarding |
| `webhooks-planned` | Planned event types (`booking.created`, `payment.completed`, etc.) |
| `documentation-planned` | OpenAPI, auth guide, webhook playbook, sandbox vision |

---

## Readiness labels

| Status | Meaning |
| --- | --- |
| `vision` | Strategic direction only |
| `planned` | Scoped on roadmap; not callable |
| `coming-soon` | Next wave after foundations |
| `in-design` | Requirements and contracts in progress |

Rendered by `DevelopersStatusBadge`.

---

## Rules (master compliance)

- No API keys, tokens, or sandbox URLs on public pages
- Product APIs described for **getpandit.com** — separate from nexynthlabs.com
- Webhook and OpenAPI content is **planned** until published with support policy
- Partner access via enquiry — no self-serve developer signup

---

## SEO

- Metadata key: `developers`
- `WebPage` JSON-LD via `buildWebPageJsonLd()` on `/developers`
- Sitemap: `/developers`
- Footer **Knowledge** nav link

---

## Components

| File | Role |
| --- | --- |
| `DevelopersSectionNav.tsx` | Sticky anchor navigation |
| `DevelopersSections.tsx` | Vision + item grids |
| `DevelopersItemCard.tsx` | Capability / webhook / doc card |
| `DevelopersStatusBadge.tsx` | Readiness label chip |

---

## Editing

1. Update sections and items in `src/config/developers.ts`
2. Keep status labels honest — do not mark items `live` until endpoints ship on product domains
3. Run `npm run build`

When a developer portal launches, add real docs URLs and OpenAPI links here — still no secrets in config.

---

## Related

- [Technology](/technology) — engineering capabilities
- [Innovation Lab](/innovation-lab) — experiments and prototypes
- [Partners](/partners) — technology partner enquiries
- [Status](/status) — service health placeholders
