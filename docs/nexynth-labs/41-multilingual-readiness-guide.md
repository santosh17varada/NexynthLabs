# Multilingual Readiness — Nexynth Labs Website

**Status:** i18n structure + language switcher (shell only)  
**Config:** `src/config/i18n.ts`  
**Last updated:** June 2026

---

## Purpose

Prepare English, Telugu, and Hindi without translating the full marketing site. Visitors can select a language; **page content remains English** until localized message catalogs and route strategy ship.

---

## Planned languages

| ID | Language | Status | `html lang` |
| --- | --- | --- | --- |
| `en` | English | **Active** — all public copy today | `en-IN` |
| `te` | Telugu (తెలుగు) | **Planned** — switcher + banner only | `te-IN` |
| `hi` | Hindi (हिन्दी) | **Planned** — switcher + banner only | `hi-IN` |

---

## Source layout

```
src/
├── config/i18n.ts              # Locale definitions + storage key
├── types/i18n.ts                 # LocaleId, LocaleMessages
├── messages/
│   ├── en.ts                     # Shell UI strings
│   ├── te.ts                     # Shell UI strings (partial)
│   ├── hi.ts                     # Shell UI strings (partial)
│   └── index.ts                  # getMessages(locale)
├── lib/i18n/
│   ├── storage.ts                # localStorage read/write
│   └── index.ts
└── components/i18n/
    ├── LocaleProvider.tsx        # Context + document.lang
    ├── LanguageSwitcher.tsx      # Header select (mobile-safe)
    └── LocaleReadinessBanner.tsx # Shown for te/hi until content ships
```

Site layout wraps public pages in `LocaleProvider`.

---

## What is translated today

| Area | English | Telugu / Hindi |
| --- | --- | --- |
| Marketing page copy (`src/config/*`) | ✅ | ❌ stays English |
| Language switcher labels | ✅ | ✅ native script |
| Readiness banner | ✅ | ✅ localized banner text |
| Legal / SEO defaults | English (`en_IN`) | Future per-locale metadata |

---

## Visitor behaviour

1. **Language switcher** in header (desktop + compact mobile select, `min-h-11`, `max-w` capped to avoid layout break).
2. Preference stored in `localStorage` key `nexynth-labs-locale`.
3. `document.documentElement.lang` updates client-side.
4. Selecting Telugu or Hindi shows a **dismissible readiness banner** (session dismiss per locale).
5. All routes remain unprefixed (`/about`, not `/te/about`) — migration path documented below.

---

## Mobile layout notes

- Switcher uses native `<select>` with truncated width on narrow headers (`max-w-[5.5rem]`).
- Readiness banner stacks vertically on small screens; dismiss button meets 44px tap target.
- Indic script fallbacks in `globals.css` (`Noto Sans Telugu`, `Noto Sans Devanagari`, system-ui).

---

## Future full i18n (not built)

| Step | Work |
| --- | --- |
| 1 | Move marketing copy into `messages/{locale}/` or CMS locale fields |
| 2 | Adopt `app/[locale]/(site)/` routing or middleware locale prefix |
| 3 | `hreflang` alternates + per-locale sitemap entries |
| 4 | Optional `next-intl` or similar — evaluate at migration |
| 5 | Load Noto webfonts if Geist + system fallbacks insufficient |
| 6 | Translate legal pages with counsel review per language |

---

## Adding shell strings

1. Extend `LocaleMessages` in `src/types/i18n.ts`
2. Add keys to `en.ts`, `te.ts`, `hi.ts`
3. Consume via `useLocale().messages` in client components

Do **not** duplicate full page copy in message files until translation workflow is approved.

---

## Related

- [Functional Specification §5.4.23](./01-functional-specification.md)
- [Future Roadmap](./08-future-roadmap.md)
- [SEO Guide](./07-seo-guide.md) — `hreflang` TODO when locales go live
