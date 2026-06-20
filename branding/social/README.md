# Social Media Assets — Nexynth Labs

| Asset | File | Dimensions | Platform |
| --- | --- | --- | --- |
| Profile avatar | `profile-avatar.svg` | 400 × 400 | LinkedIn, X, Facebook, Instagram |
| LinkedIn banner | `linkedin-banner.svg` | 1584 × 396 | LinkedIn company page |
| X / Twitter header | `twitter-header.svg` | 1500 × 500 | X (Twitter) profile |
| Facebook cover | `facebook-cover.svg` | 820 × 312 | Facebook page |

## Safe zones

- **LinkedIn banner:** Keep logo and text within left 60% — right side may be cropped on mobile.
- **X header:** Avoid critical text in bottom-left (avatar overlap) and bottom-right.
- **Profile avatar:** Keep mark centered; platforms apply circular crop.

## Export

1. Open SVG in browser or Figma
2. Export **PNG** at exact pixel dimensions above
3. Upload to each platform’s profile settings

## GetPandit

Product social accounts (`getpandit.com`) use **separate branding** — do not reuse Nexynth Labs banners for GetPandit product pages without co-branding approval.

## Web OG image

The website generates a dynamic OG image at `/opengraph-image` (see `src/app/opengraph-image.tsx`). Social banners above are for **profile** pages, not link previews.
