# Nexynth Labs Branding Assets

Source-of-truth brand package for **Nexynth Labs Private Limited**. SVG-first for crisp scaling; export PNG/PDF for print and social uploads.

## Quick start

| Need | Open |
| --- | --- |
| Usage rules | [GUIDELINES.md](./GUIDELINES.md) |
| Colors | [colors/palette.json](./colors/palette.json) |
| Fonts | [typography/recommendations.md](./typography/recommendations.md) |
| Logo (light bg) | [logo/logo-light.svg](./logo/logo-light.svg) |
| Logo (dark bg) | [logo/logo-dark.svg](./logo/logo-dark.svg) |
| Favicon | [favicon/favicon.svg](./favicon/favicon.svg) |
| Email signature | [email/signature.html](./email/signature.html) |
| Business card | [business-card/card-front.svg](./business-card/card-front.svg) |
| Social assets | [social/README.md](./social/README.md) |

## Website integration

Key files are copied to `public/branding/` for CDN serving and referenced by the live site favicon (`public/favicon.svg`, `src/app/icon.svg`).

After editing assets here, sync to `public/branding/`:

```bash
# From nexynthlabs-website/
cp branding/favicon/favicon.svg public/favicon.svg
cp branding/favicon/favicon.svg src/app/icon.svg
cp -r branding/logo public/branding/logo
cp branding/logo/logo-mark.svg public/branding/logo/
```

On Windows PowerShell:

```powershell
Copy-Item branding\favicon\favicon.svg public\favicon.svg
Copy-Item branding\favicon\favicon.svg src\app\icon.svg
New-Item -ItemType Directory -Force public\branding\logo
Copy-Item branding\logo\*.svg public\branding\logo\
```

## Brand colors (summary)

| Name | Hex |
| --- | --- |
| Nexynth Navy | `#1e3a5f` |
| Deep Midnight | `#0f1b2d` |
| Synth Gold | `#b8891f` |
| Warm Ivory | `#f8f7f4` |

## Tagline

**Building thoughtful technology for modern India**

## Contact

- **Web:** https://nexynthlabs.com  
- **Email:** nexynthlabs@gmail.com  
- **Phone:** +91 99514 29687  
- **HQ:** Hyderabad, Telangana, India
