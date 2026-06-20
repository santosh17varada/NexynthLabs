# Nexynth Labs — Brand Guidelines

**Version:** 1.0  
**Legal entity:** Nexynth Labs Private Limited  
**Brand:** Nexynth Labs  
**Tagline:** Building thoughtful technology for modern India

---

## 1. Brand essence

Nexynth Labs combines **modern engineering** with **cultural respect** — premium, trustworthy, and clear. Visual language uses deep navy, warm ivory, and restrained gold accents.

**Voice:** Professional, warm, precise. Avoid hype or cluttered layouts.

**GetPandit:** Flagship product with its own domain (`getpandit.com`). Co-brand only when context is clear; never merge product logos into the Nexynth Labs mark.

---

## 2. Logo system

### Primary mark (Concept A — recommended)

| File | Use |
| --- | --- |
| `logo/logo-light.svg` | Light backgrounds (ivory, white) |
| `logo/logo-dark.svg` | Dark backgrounds (navy, presentations) |
| `logo/logo-mark.svg` | App icon, favicon source, small spaces |

**Elements:** Rounded-square container, stylised **N**, **gold synthesis node** (dot), gold baseline accent.

### Alternate mark (Concept B)

| File | Use |
| --- | --- |
| `logo/logo-concept-alt-light.svg` | Stacked hexagon — presentations, merch |
| `logo/logo-concept-alt-dark.svg` | Dark panels, event signage |

Use **one concept per touchpoint** — do not mix A and B in the same document.

### Clear space

Minimum clear space around the logo = **height of the mark** on all sides.

### Minimum sizes

| Context | Minimum width |
| --- | --- |
| Digital wordmark | 120 px |
| Print wordmark | 30 mm |
| Mark only (favicon) | 16 px |

### Don’ts

- Do not stretch, rotate, or skew
- Do not change logo colors outside the palette
- Do not add drop shadows or outlines
- Do not place on busy photography without a solid overlay
- Do not recreate the wordmark in a different typeface

---

## 3. Color

Full values: [`colors/palette.json`](./colors/palette.json)

| Token | Hex | Primary use |
| --- | --- | --- |
| Nexynth Navy | `#1e3a5f` | Brand primary, logo container |
| Deep Midnight | `#0f1b2d` | Text, dark UI |
| Synth Gold | `#b8891f` | Accent, CTAs, highlights |
| Warm Ivory | `#f8f7f4` | Backgrounds |
| Slate Muted | `#5b6472` | Secondary text |

**Website sync:** These match `src/app/globals.css` CSS variables.

---

## 4. Typography

See [`typography/recommendations.md`](./typography/recommendations.md).

- **Web:** Geist Sans + Geist Mono  
- **Email / Office:** Arial, Helvetica, system-ui fallbacks  
- **Minimum body size:** 16 px on web (accessibility)

---

## 5. Favicon & app icon

| File | Purpose |
| --- | --- |
| `favicon/favicon.svg` | Master favicon (32×32 viewBox) |
| `../public/favicon.svg` | Served at site root |
| `../src/app/icon.svg` | Next.js App Router icon |

Export PNG sizes for legacy systems: **16, 32, 48, 180, 192, 512** px from `logo-mark.svg`.

---

## 6. Email signature

Template: [`email/signature.html`](./email/signature.html)

- Use table layout for Outlook compatibility
- Gold left border accent (`#b8891f`)
- Host logo at `https://nexynthlabs.com/branding/logo/logo-mark.svg` (see `public/branding/`)

---

## 7. Business cards

| File | Side |
| --- | --- |
| `business-card/card-front.svg` | Contact details |
| `business-card/card-back.svg` | Tagline + gradient |

Print specs: [`business-card/print-specs.md`](./business-card/print-specs.md)

---

## 8. Social media

Assets and dimensions: [`social/README.md`](./social/README.md)

Update `siteConfig.socialLinks` in `src/config/site.ts` when profiles go live (feeds SEO `sameAs`).

---

## 9. File inventory

```
branding/
├── GUIDELINES.md          ← This document
├── README.md
├── colors/palette.json
├── typography/recommendations.md
├── logo/
│   ├── logo-light.svg
│   ├── logo-dark.svg
│   ├── logo-mark.svg
│   ├── logo-concept-alt-light.svg
│   └── logo-concept-alt-dark.svg
├── favicon/favicon.svg
├── email/signature.html
├── business-card/
│   ├── card-front.svg
│   ├── card-back.svg
│   └── print-specs.md
└── social/
    ├── profile-avatar.svg
    ├── linkedin-banner.svg
    ├── twitter-header.svg
    ├── facebook-cover.svg
    └── README.md
```

---

## 10. Approval & updates

- Marketing and leadership approve customer-facing materials
- Engineering owns `public/branding/` sync with this folder
- Version bumps: update `palette.json` `version` and this document’s date

---

## Related

- Website: [docs/nexynth-labs/README.md](../docs/nexynth-labs/README.md)
- SEO OG image: `src/app/opengraph-image.tsx`
