# Typography — Nexynth Labs

**Version:** 1.0  
**Aligned with:** `nexynthlabs.com` (Next.js + Geist)

---

## Primary typeface — Geist Sans

| Use | Weight | Size (web) |
| --- | --- | --- |
| H1 / page titles | Semibold (600) | 1.75rem – 3rem |
| H2 / section titles | Semibold (600) | 1.5rem – 2.25rem |
| H3 / card titles | Semibold (600) | 1.125rem – 1.25rem |
| Body | Regular (400) | 1rem (16px min on mobile) |
| Captions / labels | Medium (500) | 0.75rem – 0.875rem |
| Eyebrows | Semibold (600) | 0.75rem, uppercase, tracking widened |

**Source:** [Vercel Geist](https://vercel.com/font) — loaded via `next/font` in `src/app/layout.tsx`.

**CSS stack (fallback):**

```css
font-family: var(--font-geist-sans), system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
```

---

## Monospace — Geist Mono

Use for code snippets, technical documentation, and admin IDs.

```css
font-family: var(--font-geist-mono), ui-monospace, "Cascadia Code", monospace;
```

---

## Print & offline fallback

When Geist is unavailable (Word, PowerPoint, email without web fonts):

| Priority | Font |
| --- | --- |
| 1 | **Segoe UI** (Windows) |
| 2 | **SF Pro** / system-ui (macOS/iOS) |
| 3 | **Roboto** (Android / Google) |
| 4 | **Helvetica Neue** / Arial (legacy) |

**Do not substitute** decorative or serif fonts for the wordmark in marketing materials.

---

## Hierarchy examples

```
NEXYNTH LABS          ← 11px, semibold, gold, letter-spacing 0.12em (eyebrow)
Building thoughtful…  ← 26px, semibold, navy/ivory (headline)
Body paragraph…       ← 16px, regular, muted slate
```

---

## Logo wordmark typography

In SVG logos, the wordmark uses **system-ui at 600 weight** for maximum cross-platform rendering without embedding fonts.

For print PDFs, export from design tools with **Geist Sans SemiBold** outlined.

---

## Email

Use **Arial, Helvetica, sans-serif** in HTML signatures (see `email/signature.html`). Geist web fonts are not reliable in Outlook.

---

## Licensing

- **Geist:** Open Font License — suitable for web and commercial use.
- Verify license before embedding in mobile apps or desktop software installers.

---

## Related

- [Brand Guidelines](./GUIDELINES.md)
- [colors/palette.json](./colors/palette.json)
