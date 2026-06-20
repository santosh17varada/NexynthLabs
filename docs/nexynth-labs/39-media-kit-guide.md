# Media Kit — Nexynth Labs Website

**Route:** `/media-kit` (redirect from `/press`)  
**Config:** `src/config/media-kit.ts`  
**Last updated:** June 2026

---

## Purpose

Press and partner enablement page — company facts, on-screen logo previews, brand palette, typography samples, copy-paste boilerplate, contact details, and downloadable asset placeholders.

---

## Sections

| ID | Section |
| --- | --- |
| `company-profile` | Legal name, HQ, flagship product, summary paragraphs |
| `logos` | Light, dark, and mark previews from `public/branding/logo/` |
| `brand-colors` | Palette synced with `globals.css` and `branding/colors/palette.json` |
| `typography` | Geist Sans / Geist Mono samples |
| `boilerplate` | Short, standard, and extended press copy with copy button |
| `contact-details` | Email, phone, address, press mailto |
| `downloadable-assets` | ZIP/PDF/image placeholders with request CTAs |

---

## Placeholder assets

Files target `public/press/` when published:

| Asset | Target path |
| --- | --- |
| Logo pack | `/press/nexynth-logo-pack.zip` |
| Brand guidelines PDF | `/press/nexynth-brand-guidelines.pdf` |
| Fact sheet PDF | `/press/nexynth-fact-sheet.pdf` |
| Executive photo | `/press/nexynth-leadership-photo.jpg` |

Until `available: true` in config, cards show **Coming soon** and link to `/contact?intent=press&asset=…`.

---

## SEO

- Metadata key: `mediaKit`
- `WebPage` JSON-LD via `buildWebPageJsonLd()` on `/media-kit`
- Sitemap: `/media-kit`
- Redirect: `/press` → `/media-kit` (permanent)

---

## Components

| File | Role |
| --- | --- |
| `MediaKitSectionNav.tsx` | Sticky anchor nav |
| `MediaKitSections.tsx` | All section content |
| `MediaKitCopyButton.tsx` | Clipboard copy for boilerplate |

---

## Editing

1. Update copy and assets in `src/config/media-kit.ts`
2. Place files under `public/press/` when ready
3. Set `available: true` on logos or download items
4. Run `npm run build`

Full brand rules: `branding/GUIDELINES.md`

---

## Related

- [Resources](/resources) — brochures and decks
- [About](/about) — company narrative
- [Contact](/contact) — press enquiries (`?intent=press`)
