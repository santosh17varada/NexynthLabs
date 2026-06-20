# SEO Guide — Nexynth Labs Website

**Version:** 2.0  
**Last updated:** June 2026  
**Domain:** https://nexynthlabs.com  
**Locale:** `en_IN`  
**Product SEO:** GetPandit maintains separate SEO on `getpandit.com`

---

## 1. SEO goals

1. Rank for branded queries (Nexynth Labs, Nexynth Labs Private Limited)
2. Support discovery for Hyderabad / India technology services
3. Surface GetPandit as a flagship product without merging product SEO into corporate domain
4. Provide clean technical SEO for crawlers and social sharing

---

## 2. Implemented features

| Feature | Location | Status |
| --- | --- | --- |
| Default metadata | `src/lib/seo.ts` → `siteMetadata` | Done |
| Per-page title & description | `createPageMetadataFromKey()` | Done |
| Blog dynamic metadata | `blog/[slug]/page.tsx` → `generateMetadata` | Done |
| Title template | `%s \| Nexynth Labs` | Done |
| Canonical URLs | `alternates.canonical` per page | Done |
| Open Graph | type, locale, url, siteName, title, description, images | Done |
| Twitter cards | `summary_large_image` | Done |
| OG / Twitter images | `opengraph-image.tsx`, `twitter-image.tsx` — copy from `og-share.ts` | Done |
| `robots.txt` | `src/app/robots.ts` | Done |
| `sitemap.xml` | `src/app/sitemap.ts` | Done |
| Organization JSON-LD | Site layout `@graph` | Done |
| WebSite JSON-LD | Site layout `@graph` | Done |
| Homepage WebPage + Product JSON-LD | `/` page script | Done |
| WebPage JSON-LD | Legal pages | Done |
| Article JSON-LD | Blog posts | Done |
| FAQPage JSON-LD | `/faq` | Done |
| Admin noindex | Admin route metadata | Done |

---

## 3. Configuration

**Single source of truth:** `src/config/site.ts` → `siteConfig.seo`

| Field | Purpose |
| --- | --- |
| `defaultTitle` | Home / fallback title |
| `titleTemplate` | `%s \| Nexynth Labs` |
| `defaultDescription` | Site-wide meta description |
| `keywords` | Meta keywords array |
| `locale` | `en_IN` |
| `ogImagePath` | `/opengraph-image` |
| `ogImageWidth` / `ogImageHeight` | 1200 × 630 |
| `logoPath` | Used in Organization schema |
| `pages` | Per-route `title` + `description` |

Core domain literal: `src/config/site-values.ts` → `domain`

---

## 4. Page metadata map

| Page key | Route | Title (template applied) |
| --- | --- | --- |
| `home` | `/` | Nexynth Labs \| AI-First Product Engineering & GetPandit (absolute title) |
| `about` | `/about` | About |
| `founderStory` | `/company/founder` | Founder Story |
| `companyLeadership` | `/leadership` | Leadership |
| `leadership` | `/leadership` | Leadership |
| `companyVision` | `/company/vision` | Vision |
| `services` | `/services` | Services |
| `technologyExcellence` | `/technology` | Technology Excellence |
| `publicRoadmap` | `/roadmap` | Public Roadmap |
| `statusPage` | `/status` | System Status |
| `securityCenter` | `/security` | Security |
| `trustCenter` | `/trust` | Trust Center |
| `knowledgeResources` | `/resources` | Resources |
| `knowledgeGuides` | `/guides` | Guides |
| `aiShowcase` | `/ai-showcase` | AI Showcase |
| `innovationLab` | `/innovation-lab` | Innovation Lab |
| `events` | `/events` | Events & Webinars |
| `testimonials` | `/testimonials` | Testimonials |
| `faq` | `/faq` | FAQ |
| `mediaKit` | `/media-kit` | Media Kit |
| `developers` | `/developers` | Developers |
| `portfolio` | `/portfolio` | Portfolio |
| `caseStudies` | `/case-studies` | Case Studies |
| `clientSuccess` | `/client-success` | Client Success Stories |
| `aiReadinessScore` | `/ai-readiness-score` | AI Readiness Score |
| `bookConsultation` | `/book-consultation` | Book Free Consultation |
| `requestProposal` | `/request-proposal` | Request Proposal |
| `partners` | `/partners` | Investors & Partners |
| `partnerPortal` | `/partners/portal` | Partner Portal Readiness |
| `careersCulture` | `/careers/culture` | Culture |
| `products` | `/products` | Products |
| `productEcosystem` | `/products/ecosystem` | Product Ecosystem |
| `getpandit` | `/getpandit` | GetPandit |
| `careers` | `/careers` | Careers |
| `blog` | `/blog` | Blog |
| `contact` | `/contact` | Contact |
| `privacyPolicy` | `/privacy-policy` | Privacy Policy |
| `terms` | `/terms` | Terms & Conditions |
| `cookiePolicy` | `/cookie-policy` | Cookie Policy |
| `disclaimer` | `/disclaimer` | Disclaimer |

Blog posts use post title + excerpt from `src/config/blog.ts`.

---

## 5. Structured data (schema.org)

### 5.1 Site-wide (every public page)

Injected in `src/app/(site)/layout.tsx`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", ... },
    { "@type": "WebSite", ... }
  ]
}
```

**Organization includes:** legal name, brand, URL, logo, email, phone, Hyderabad address, contact point.

**`sameAs`:** Populated when `siteConfig.socialLinks` entries are filled (LinkedIn, Twitter, Instagram).

### 5.2 Legal pages

`WebPage` JSON-LD via `LegalPageContent`.

### 5.3 Blog articles

`Article` JSON-LD with headline, description, datePublished, author, publisher, image.

### 5.4 FAQ page

`FAQPage` JSON-LD on `/faq` — built from `src/config/faqs.ts` categories.

### 5.5 URL redirects (SEO-preserving)

| From | To |
| --- | --- |
| `/rfp` | `/request-proposal` |
| `/press` | `/media-kit` |
| `/portfolio/[slug]` | `/case-studies/[slug]` |

Implemented in `next.config` or route handlers — verify 308/301 on production.

---

### 5.6 Multilingual (future)

Current locale metadata remains `en_IN`. When `app/[locale]/` ships, add `hreflang` alternates per locale — see [Multilingual Readiness Guide](./41-multilingual-readiness-guide.md).

### 5.8 Homepage (post-redesign)

`WebPage` + `Product` (GetPandit) JSON-LD on `/` via `buildHomePageJsonLd()` in `src/lib/seo.ts`. OG/Twitter images use hero-aligned copy from `src/config/og-share.ts`.

---

## 6. Crawl files

### 6.1 robots.txt

Generated by `src/app/robots.ts`:

- **Allow:** `/`
- **Disallow:** `/admin/`, `/api/`
- **Sitemap:** `https://nexynthlabs.com/sitemap.xml`
- **Host:** `https://nexynthlabs.com`

### 6.2 sitemap.xml

Generated by `src/app/sitemap.ts`:

| URL type | Priority | changeFrequency |
| --- | --- | --- |
| Home `/` | 1.0 | monthly |
| Main pages | 0.8 | monthly |
| Legal pages | 0.4 | monthly |
| Blog posts | 0.6 | monthly |

Admin routes are **not** included.

---

## 7. Social sharing

### Open Graph image

- **URL:** `/opengraph-image` (dynamic PNG, 1200×630)
- **Content:** Brand name, tagline, company + city
- Referenced in metadata via `siteConfig.seo.ogImagePath`

### Validation tools

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) (or X developer tools)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## 8. Adding a new public page

1. Create route under `src/app/(site)/`
2. Add entry to `siteConfig.seo.pages`
3. Add path to `PAGE_PATHS` in `src/lib/seo.ts`
4. Export `export const metadata = createPageMetadataFromKey("yourKey")`
5. Add URL to `staticRoutes` in `src/app/sitemap.ts`
6. Add to `siteConfig.navigation` if linked in header/footer
7. Rebuild and verify canonical URL in page source

---

## 9. Pre-launch checklist

- [ ] `domain` in `site-values.ts` = production URL (`https://nexynthlabs.com`)
- [ ] HTTPS enabled; HTTP redirects to HTTPS
- [ ] Single canonical host (apex vs www — pick one, redirect other)
- [ ] Submit sitemap in [Google Search Console](https://search.google.com/search-console)
- [ ] Verify JSON-LD with [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test OG tags on home, `/getpandit`, and one blog post
- [ ] Confirm `/robots.txt` and `/sitemap.xml` on production
- [ ] Populate `socialLinks` when profiles go live
- [ ] Add analytics via env if required — see [Analytics Dashboard Guide](./15-analytics-dashboard-guide.md) (no-op without IDs)
- [ ] Legal pages approved by counsel ([legal.md](../legal.md))

---

## 10. Keywords strategy

Current seed keywords in config:

- Nexynth Labs
- Nexynth Labs Private Limited
- GetPandit
- Hyderabad technology company
- spiritual technology
- product engineering India
- Hyderabad software company

**Guidance:** Expand keywords in `siteConfig.seo.keywords` as marketing defines target queries. Avoid keyword stuffing in page copy.

---

## 11. GetPandit SEO boundary

| Corporate site (`nexynthlabs.com`) | Product site (`getpandit.com`) |
| --- | --- |
| Company + product overview | Booking, pandit profiles, transactions |
| Links to product with `rel="noopener"` | Own sitemap, schema, policies |
| Article: "Why GetPandit Lives on Its Own Domain" | Independent indexing |

Do not duplicate product landing pages on corporate domain for SEO cannibalization.

---

## 12. Static export note

If `output: 'export'` is enabled in `next.config.ts`:

- `sitemap.ts`, `robots.ts`, and OG image routes generate at build time
- Confirm host serves them at correct paths
- API routes and dynamic lead capture will not work without adaptation

---

## 13. Related documents

- [Legal content](../legal.md)
- [Functional Specification](./01-functional-specification.md)
- [Deployment Guide](./05-deployment-guide.md)
