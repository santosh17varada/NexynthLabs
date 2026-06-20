# Homepage Case Studies & Success Stories Guide

**Audience:** Product, marketing, sales, engineers  
**Config:** `src/config/home-case-studies.ts`  
**Component:** `src/components/home/HomeCaseStudiesSection.tsx`  
**Placement:** Home story flow §7 (`#case-studies`)

## Structure

1. **Featured case study** — GetPandit (`slug: getpandit`) with hero image, Flagship + Live badges, and Problem / Solution / Outcome pillars
2. **Success story highlights** — Two anonymized client-success patterns (config ids)
3. **Honesty disclaimer** — no revenue, user totals, or unverified KPIs
4. **CTAs** — View all case studies (`/case-studies`), Client success stories (`/client-success`)

### GetPandit visual (home + social proof)

- **Component:** `CaseStudyHighlightCard` / `FeaturedCaseStudyCard` → `CaseStudyHeroMedia` → `CaseStudyDeliveryStoryVisual` (`compact`) → `CaseStudyMockupShowcase` (`layout="card"`)
- **Layout:** Flex row on desktop; visual column `lg:w-[42%] lg:max-w-[26rem]`
- **Mockup:** `CaseStudyGetPanditCardVisual` — 12-column grid inside a fixed frame (max 420px): browser ~67% top-left, phone ~33% bottom-right, chips in a 2-row grid below the frame
- **Home social proof:** “All case studies” CTA sits directly below the delivery story card (`HomeSocialProofSection`)

## Logo (header)

- **Mark:** `nexynth-logo-mark-transparent.png` — no white container; icon-only PNG with transparent background
- **Wordmark:** HTML text in `Logo.tsx` with descriptor beneath on `sm+`
- **Alignment:** `items-center`, compact `h-9` / `lg:h-10` mark sizing; edit `site-values.ts` + `Logo.tsx`

## Honesty rules

| Do | Don't |
| --- | --- |
| Use qualitative outcomes from `portfolio.ts` / `client-success.ts` | Fabricate percentages, revenue, or user counts |
| Mark client stories as anonymized | Imply audited KPIs |
| Link to full case study for detail | Over-truncate flagship GetPandit copy on the detail page |

Homepage GetPandit copy uses shorter excerpts in `homeCaseStudyExcerpts.getpandit` — full narrative remains on `/case-studies/getpandit`.

## Editing

| Change | File |
| --- | --- |
| Section titles, CTAs, featured ids | `homeCaseStudiesCopy` |
| GetPandit homepage excerpts | `homeCaseStudyExcerpts` |
| Full case study content | `src/config/portfolio.ts` |
| Success story content | `src/config/client-success.ts` |

## Related

- [31-portfolio-case-studies-guide.md](./31-portfolio-case-studies-guide.md)
- [32-client-success-guide.md](./32-client-success-guide.md)
- [49-homepage-story-flow-guide.md](./49-homepage-story-flow-guide.md)
