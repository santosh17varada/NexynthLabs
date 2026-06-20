# Resource Downloads — Nexynth Labs Website

**Route:** `/resources` (downloads section + knowledge articles)  
**Config:** `src/config/resource-downloads.ts`  
**Assets:** `public/downloads/` (when published)  
**Last updated:** June 2026

---

## Purpose

Brochure and deck downloads on the Resources page, alongside existing knowledge articles. PDFs are **placeholders** until brand files are added — cards show “Coming soon” and link to contact until `available: true`.

---

## Download cards

| ID | Title | Placeholder path |
| --- | --- | --- |
| `company-brochure` | Company Brochure | `/downloads/nexynth-company-brochure.pdf` |
| `services-brochure` | Services Brochure | `/downloads/nexynth-services-brochure.pdf` |
| `product-deck` | Product Deck | `/downloads/nexynth-product-deck.pdf` |
| `getpandit-overview` | GetPandit Overview | `/downloads/getpandit-overview.pdf` |
| `architecture-overview` | Architecture Overview | `/downloads/nexynth-architecture-overview.pdf` |

Edit `resourceDownloads` in `src/config/resource-downloads.ts`.

---

## Publishing a file

1. Add PDF to `public/downloads/` matching `downloadPath`
2. Set `available: true` on the card
3. Card switches from “Request access” to direct `Download` with `download` attribute
4. Run `npm run build`

---

## Lead capture before download (planned — not built)

**Goal:** Gate downloads behind a short form so sales receives name, email, and company before the file URL is revealed.

| Step | Planned implementation |
| --- | --- |
| 1 | User clicks **Download** on an available asset |
| 2 | Modal or inline form: name, email, company (optional phone) |
| 3 | `POST /api/resource-download` → lead with `source: resource_download` and `interestType: Download: {asset title}` |
| 4 | Return signed URL or redirect to static file; fire `resource_download_click` analytics event |
| 5 | Rate limit + honeypot on API |

**Until then:** `available: false` cards use **Request access** → `/contact?intent=resource-download&asset={id}`.

### TODO checklist

- [ ] Lead source `resource_download` in `src/types/lead.ts`
- [ ] `POST /api/resource-download` route
- [ ] `ResourceDownloadGateForm` client component
- [ ] Optional: email asset link via SMTP after capture
- [ ] Admin filter by download asset in CRM lite
- [ ] Cookie/session token to skip re-gate for same asset in 24h (optional)

---

## Components

| File | Role |
| --- | --- |
| `ResourceDownloadCard.tsx` | Mobile-first card with placeholder badge or download link |
| `ResourceDownloadsSection.tsx` | Grid of five cards on `/resources` |

---

## Mobile layout

- Cards: 1 column default, 2 columns `sm+`, 3 columns `lg+`
- Touch-friendly “Request access” / “Download” links (min 44px height)
- Downloads section above article grid on all breakpoints

---

## Navigation & SEO

- Footer knowledge: **Resources** → `/resources`
- SEO key: `knowledgeResources` (description mentions downloadable decks)
- Sitemap: `/resources` (already listed)

---

## Related

- [Knowledge Center Guide](./22-knowledge-center-guide.md) — article grid below downloads
- [Lead CRM Lite Guide](./14-lead-crm-lite-guide.md)
- [Media Kit](./39-media-kit-guide.md) — press assets and boilerplate
