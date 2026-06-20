# Leadership & Founder Guide — Nexynth Labs Website

**Config:** `src/config/leadership.ts`  
**Types:** `src/types/leadership.ts`  
**Components:** `src/components/leadership/`  
**Last updated:** June 2026

---

## 1. Overview

Premium executive profiles for Nexynth Labs founders — config-driven, SEO-ready, with Person + Organization JSON-LD. Supports adding future leaders via `leadershipProfiles[]`.

| Route | Purpose |
| --- | --- |
| `/leadership` | Executive team index |
| `/leadership/santosh-kumar-varada` | Founder & CEO profile |
| `/leadership/swathi-varada` | Co-Founder & Director profile |
| `/company/leadership` | 308 redirect → `/leadership` |

---

## 2. Embedded sections

| Location | Component | Config |
| --- | --- | --- |
| Home | `HomeFounderVisionSection` | `homeFounderVisionCopy` in `home-founder.ts` |
| About | `AboutLeadershipSection` | `aboutLeadershipSection` |
| Media kit | `MediaKitFounderProfileSection` | `mediaKitFounderProfile` |
| Partners | `PartnerFounderVisionSection` | `partnerFounderVision` |

---

## 3. Adding a leader

1. Add portrait to `public/images/leadership/{slug}-founder.jpg` (optional)
2. Append profile object to `leadershipProfiles` in `src/config/leadership.ts`
3. Set `slug`, `featured`, `order`, `excerpt`, `biography`, `expertise`
4. Rebuild — `generateStaticParams` picks up new slug automatically
5. Add sitemap entry if not using dynamic sitemap generation from config (currently manual in `sitemap.ts`)

---

## 4. SEO & schema

- Index: `createPageMetadataFromKey("leadership")` + `buildLeadershipIndexJsonLd()`
- Profiles: `generateMetadata` + `buildPersonJsonLd(profile)`
- Site-wide Organization JSON-LD includes `founder` reference to primary founder Person `@id`

---

## 5. Assets

| File | Usage |
| --- | --- |
| `public/images/leadership/santosh-kumar-varada-founder.jpg` | Founder headshot — Next.js `Image` optimized, lazy-loaded |

Profiles without `imagePath` render initials avatar.

---

## Related

- [Company Pages Guide](./30-company-pages-guide.md)
- [Media Kit Guide](./39-media-kit-guide.md)
- [SEO Guide](./07-seo-guide.md)
