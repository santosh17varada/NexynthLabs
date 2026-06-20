# Careers & Culture — Nexynth Labs Website

**Routes:** `/careers`, `/careers/culture`  
**Config:** `src/config/careers.ts`  
**Last updated:** June 2026

---

## Purpose

Careers listings and culture content — static, config-driven, mobile-responsive. **No applicant tracking system**; applications use email (`mailto`) only.

---

## Routes

| Route | Content |
| --- | --- |
| `/careers` | Culture teaser, open roles (listings or placeholder) |
| `/careers/culture` | Full culture sections |

---

## Culture sections (`/careers/culture`)

| Section ID | Title |
| --- | --- |
| `life-at-nexynth` | Life at Nexynth |
| `engineering-culture` | Engineering culture |
| `innovation-mindset` | Innovation mindset |
| `learning` | Learning |
| `remote-hybrid-readiness` | Remote / hybrid readiness |
| `open-roles` | Open roles (email-only hiring model) |

---

## Open roles

| Mode | Config | Behaviour |
| --- | --- | --- |
| **Listings** | `careersOpenRolesMode: "listings"` | Renders `jobOpenings` cards with Apply mailto |
| **Placeholder** | `careersOpenRolesMode: "placeholder"` | Shows `openRolesPlaceholder` card |
| **Empty array** | `jobOpenings: []` | Placeholder shown automatically |

### Adding a role

1. Add entry to `jobOpenings` in `src/config/careers.ts`
2. Set `careersOpenRolesMode` to `"listings"`
3. Run `npm run build`

---

## Applications (no backend)

- Per-role: `getApplicationMailtoLink(jobTitle)`
- General: `getCareersMailtoLink()`
- No login, no file upload API, no ATS integration

### Future TODO

| Item | Notes |
| --- | --- |
| ATS integration | Greenhouse, Lever, or custom API |
| Structured application form | Optional enquiry source `careers` |
| Benefits & policy PDFs | Legal-reviewed documents |

---

## SEO

| Key | Path |
| --- | --- |
| `careers` | `/careers` |
| `careersCulture` | `/careers/culture` |

Both routes are in `sitemap.xml`.

---

## Editing

1. Culture copy: `cultureSections`, `careersCulturePageCopy`
2. Careers page: `careersPageCopy`, `careersIntro`, `jobOpenings`
3. Components: `src/components/careers/`

---

## Related

- [About](/about) — company overview
- [Innovation Lab](/innovation-lab) — R&D culture alignment
- [Careers config](../../src/config/careers.ts)
