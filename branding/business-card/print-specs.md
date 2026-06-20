# Business Card — Print Specifications

**Size:** 85 mm × 55 mm (standard ISO / Indian business card)  
**Files:** `card-front.svg`, `card-back.svg`  
**ViewBox:** 850 × 550 px (10 px/mm)

## Export for print

1. Open SVG in **Figma**, **Illustrator**, or **Inkscape**
2. Replace `[Full Name]` and `[Job Title]` placeholders
3. Convert text to outlines (curves) before print
4. Export PDF:
   - **CMYK** if printer requires it (use palette CMYK values in `colors/palette.json`)
   - **3 mm bleed** on all sides if full-bleed back gradient is used
5. **300 DPI** minimum for any embedded raster images

## Paper recommendations

| Finish | Notes |
| --- | --- |
| **Matte ivory** 350gsm | Matches brand `#f8f7f4` front |
| **Soft-touch laminate** | Premium feel; test gold contrast |
| **Rounded corners** | 3 mm radius optional — matches logo `rx` language |

## Do not

- Stretch or skew the logo mark
- Use low-contrast gold text on ivory for contact details
- Print front and back with misaligned registration on gradient back

## Vendor handoff

Provide printer:

- `card-front.pdf` + `card-back.pdf`
- `colors/palette.json` for spot color matching (Synth Gold accent)
