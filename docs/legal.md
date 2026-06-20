# Legal

Legal content for the Nexynth Labs corporate website (`nexynthlabs.com`). This site is separate from GetPandit (`getpandit.com`), which requires its own legal documents.

## Important — legal review required

**All legal text in this repository is draft template content for engineering readiness only.**

Before relying on these documents in production, marketing, or regulatory contexts:

1. Engage qualified legal counsel familiar with Indian law (and any other applicable jurisdictions).
2. Review privacy practices against actual data flows (enquiry forms, analytics, CMS, hosting).
3. Align cookie disclosures with tools actually deployed.
4. Prepare separate product terms and privacy policies for GetPandit on its own domain.
5. Replace placeholder dates and notices only after counsel approval.

The public site displays this notice on every legal page via `LEGAL_REVIEW_NOTICE` in `src/config/legal.ts`.

## Pages

| Page | Route | Config |
| --- | --- | --- |
| Privacy Policy | `/privacy-policy` | `privacyPolicy` |
| Terms & Conditions | `/terms` | `termsOfService` |
| Cookie Policy | `/cookie-policy` | `cookiePolicy` |
| Disclaimer | `/disclaimer` | `disclaimer` |

Rendered by `src/components/legal/LegalPageContent.tsx`.

## Company details used

Sourced from `src/config/site-values.ts` and `src/config/site.ts`:

- **Legal entity:** Nexynth Labs Private Limited
- **Brand:** Nexynth Labs
- **Email:** nexynthlabs@gmail.com
- **Phone:** +91 99514 29687
- **Address:** House No. 12-34-1, Adarsh Nagar, Opposite IDPL Colony, Near Balanagar, Hyderabad, Telangana - 500037, India
- **Governing law (draft):** India; courts in Hyderabad, Telangana for corporate site disputes

## SEO integration

Each legal page exports metadata via `createPageMetadataFromKey()` and injects `WebPage` schema.org JSON-LD. All legal URLs are listed in `src/app/sitemap.ts` and linked from the footer (`siteConfig.navigation.legal`).

## Updating content

1. Edit sections in `src/config/legal.ts`
2. Update `lastUpdated` on the relevant document
3. Re-run legal review before publishing substantive changes
4. Rebuild and deploy

## Future CMS

The admin CMS includes an SEO module stub. Legal pages may later be editable via CMS; until then, keep content in `src/config/legal.ts` under version control.

## Related

- [SEO Guide](./nexynth-labs/07-seo-guide.md)
- [Leads detail](./leads.md)
