/**
 * Nexynth Labs brand identity tokens — single source of truth for the design system.
 * CSS variables in `src/app/globals.css` mirror these values for Tailwind v4.
 * Static assets: `branding/` and `public/branding/`.
 */

import { brandName, companyName, tagline } from "@/config/site-values";

export const brandMeta = {
  brand: brandName,
  legalEntity: companyName,
  tagline,
  version: "2.0",
  paletteVersion: "1.0",
} as const;

/** Core brand voice and positioning — not visual tokens. */
export const brandFoundations = {
  essence:
    "Modern engineering with cultural respect — premium, trustworthy, and clear. Deep navy foundations with electric accents for product marketing.",
  voice: ["Professional", "Warm", "Precise", "Honest readiness"],
  voiceAvoid: ["Hype", "Vanity metrics", "Cluttered layouts", "Unverified certifications"],
  productSeparation:
    "GetPandit runs on getpandit.com. Co-brand only when context is clear; never merge product logos into the Nexynth Labs mark.",
  principles: [
    {
      id: "clarity",
      title: "Clarity over novelty",
      description: "Readable hierarchy, generous spacing, and purposeful motion.",
    },
    {
      id: "trust",
      title: "Trust by design",
      description: "Contrast-safe text, honest labels, and consistent component behaviour.",
    },
    {
      id: "craft",
      title: "Engineering craft",
      description: "Glass surfaces, mesh gradients, and structured grids signal technical credibility.",
    },
  ],
} as const;

export type BrandColorToken = {
  token: string;
  name: string;
  hex: string;
  cssVar: string;
  usage: string;
  group: "core" | "premium" | "semantic" | "glass";
};

export const brandColors: readonly BrandColorToken[] = [
  {
    token: "primary",
    name: "Nexynth Navy",
    hex: "#1e3a5f",
    cssVar: "--primary",
    usage: "Brand primary, logo container, legacy primary buttons",
    group: "core",
  },
  {
    token: "foreground",
    name: "Deep Midnight",
    hex: "#0f1b2d",
    cssVar: "--foreground",
    usage: "Body text on light surfaces, dark UI base",
    group: "core",
  },
  {
    token: "midnight",
    name: "Midnight",
    hex: "#0a0f1a",
    cssVar: "--midnight",
    usage: "Premium dark heroes and mesh backgrounds",
    group: "premium",
  },
  {
    token: "accent",
    name: "Synth Gold",
    hex: "#b8891f",
    cssVar: "--accent",
    usage: "Accent highlights, logo node, legacy accent CTAs",
    group: "core",
  },
  {
    token: "background",
    name: "Warm Ivory",
    hex: "#f8f7f4",
    cssVar: "--background",
    usage: "Page backgrounds, print stationery",
    group: "core",
  },
  {
    token: "surface",
    name: "Pure Surface",
    hex: "#ffffff",
    cssVar: "--surface",
    usage: "Cards, elevated panels, form fields",
    group: "core",
  },
  {
    token: "muted",
    name: "Slate Muted",
    hex: "#5b6472",
    cssVar: "--muted",
    usage: "Secondary text, captions, helper copy",
    group: "core",
  },
  {
    token: "border",
    name: "Mist Border",
    hex: "#d9dde4",
    cssVar: "--border",
    usage: "Dividers, input borders, card outlines",
    group: "core",
  },
  {
    token: "electric-blue",
    name: "Electric Blue",
    hex: "#3b82f6",
    cssVar: "--electric-blue",
    usage: "Links, focus rings, premium eyebrows on light surfaces",
    group: "premium",
  },
  {
    token: "electric-violet",
    name: "Electric Violet",
    hex: "#8b5cf6",
    cssVar: "--electric-violet",
    usage: "Gradient mid-tone, hover accents, step labels",
    group: "premium",
  },
  {
    token: "electric-cyan",
    name: "Electric Cyan",
    hex: "#06b6d4",
    cssVar: "--electric-cyan",
    usage: "Dark-surface eyebrows, success-adjacent highlights",
    group: "premium",
  },
  {
    token: "on-dark",
    name: "On Dark",
    hex: "#f8f7f4",
    cssVar: "--on-dark",
    usage: "Primary text on midnight/navy heroes",
    group: "semantic",
  },
  {
    token: "on-dark-muted",
    name: "On Dark Muted",
    hex: "#a8b4c4",
    cssVar: "--on-dark-muted",
    usage: "Secondary text on dark heroes",
    group: "semantic",
  },
] as const;

export type BrandGradientToken = {
  id: string;
  name: string;
  cssVar: string;
  usage: string;
  stops: readonly string[];
};

export const brandGradients: readonly BrandGradientToken[] = [
  {
    id: "brand",
    name: "Brand gradient",
    cssVar: "--gradient-brand",
    usage: "Primary CTA buttons, badges, emphasis text",
    stops: ["#3b82f6", "#8b5cf6", "#06b6d4"],
  },
  {
    id: "brand-subtle",
    name: "Brand subtle",
    cssVar: "--gradient-brand-subtle",
    usage: "Selected cards, form steps, soft highlights",
    stops: ["rgba(59,130,246,0.12)", "rgba(139,92,246,0.1)", "rgba(6,182,212,0.12)"],
  },
  {
    id: "mesh",
    name: "Light mesh",
    cssVar: "--gradient-mesh",
    usage: "Light section backgrounds",
    stops: ["electric-blue 22%", "electric-violet 16%", "electric-cyan 14%"],
  },
  {
    id: "mesh-dark",
    name: "Dark mesh",
    cssVar: "--gradient-mesh-dark",
    usage: "Hero sections, footer, dark product pages",
    stops: ["midnight", "navy-deep", "electric accents"],
  },
  {
    id: "gold-shine",
    name: "Gold shine",
    cssVar: "--gradient-gold-shine",
    usage: "Print accents, premium dividers (legacy brand gold)",
    stops: ["#b8891f", "#d4ad4a", "#b8891f"],
  },
] as const;

export const brandTypography = {
  families: {
    sans: {
      token: "font-sans",
      name: "Geist Sans",
      stack: 'var(--font-geist-sans), system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      usage: "All marketing and product UI",
    },
    mono: {
      token: "font-mono",
      name: "Geist Mono",
      stack: 'var(--font-geist-mono), ui-monospace, "Cascadia Code", monospace',
      usage: "Code, technical IDs, admin tables",
    },
  },
  scale: [
    { id: "display-lg", className: "text-display-lg", sample: "Ship with clarity", specs: "clamp(2.5rem, 6vw, 4.5rem) · semibold · -0.03em" },
    { id: "display", className: "text-display", sample: "Engineering excellence", specs: "clamp(2.25rem, 5vw, 4rem) · semibold" },
    { id: "heading-xl", className: "text-heading-xl", sample: "Section headline", specs: "clamp(1.75rem, 3.5vw, 2.75rem) · semibold" },
    { id: "heading-lg", className: "text-heading-lg", sample: "Card or pillar title", specs: "clamp(1.375rem, 2.5vw, 1.75rem) · semibold" },
    { id: "body", className: "text-base", sample: "Body copy for descriptions and form help text.", specs: "1rem (16px min) · regular · relaxed leading" },
    { id: "eyebrow", className: "text-eyebrow", sample: "Eyebrow label", specs: "0.75–0.8125rem · semibold · uppercase · 0.14em tracking" },
    { id: "mono", className: "font-mono text-sm", sample: "nexynthlabs.com · lead_id_01", specs: "0.875rem · Geist Mono" },
  ],
  rules: [
    "Minimum 16px body text on mobile.",
    "Use text-eyebrow for section labels — electric-blue on light, electric-cyan on dark.",
    "Display sizes use text-balance where supported.",
    "Do not substitute decorative or serif fonts for the wordmark.",
  ],
} as const;

/** 4px base spacing scale — maps to CSS custom properties. */
export const brandSpacing = {
  baseUnit: 4,
  scale: [
    { token: "space-1", rem: "0.25rem", px: 4, usage: "Tight icon gaps" },
    { token: "space-2", rem: "0.5rem", px: 8, usage: "Inline badge padding" },
    { token: "space-3", rem: "0.75rem", px: 12, usage: "Compact card padding" },
    { token: "space-4", rem: "1rem", px: 16, usage: "Default inline spacing" },
    { token: "space-5", rem: "1.25rem", px: 20, usage: "Form field gaps" },
    { token: "space-6", rem: "1.5rem", px: 24, usage: "Card padding (sm)" },
    { token: "space-8", rem: "2rem", px: 32, usage: "Section sub-blocks" },
    { token: "space-10", rem: "2.5rem", px: 40, usage: "Grid gaps (lg)" },
    { token: "space-12", rem: "3rem", px: 48, usage: "Section padding (mobile)" },
    { token: "space-16", rem: "4rem", px: 64, usage: "Hero vertical rhythm" },
    { token: "space-section-y", rem: "clamp(3rem, 6vw, 5rem)", px: null, usage: "Default section padding" },
    { token: "space-section-y-lg", rem: "clamp(4rem, 8vw, 7rem)", px: null, usage: "Large section padding" },
  ],
  layout: {
    containerDefault: "max-w-6xl",
    containerWide: "max-w-7xl",
    containerNarrow: "max-w-3xl",
    gridGutter: "gap-6 lg:gap-8",
    tapMin: "2.75rem",
  },
} as const;

export const brandRadii = {
  sm: { token: "radius-ds-sm", value: "0.75rem", px: 12, usage: "Chips, small inputs" },
  md: { token: "radius-ds-md", value: "1.25rem", px: 20, usage: "Inputs, compact cards" },
  lg: { token: "radius-ds-lg", value: "1.5rem", px: 24, usage: "Cards, panels" },
  xl: { token: "radius-ds-xl", value: "1.75rem", px: 28, usage: "Featured cards, heroes" },
  full: { token: "radius-ds-full", value: "9999px", px: null, usage: "Buttons, pills, badges" },
} as const;

export const brandShadows = [
  { id: "soft", cssVar: "--shadow-soft", usage: "Default cards and buttons" },
  { id: "elevated", cssVar: "--shadow-elevated", usage: "Hovered cards, modals" },
  { id: "floating", cssVar: "--shadow-floating", usage: "Marketing emphasis" },
  { id: "glass", cssVar: "--shadow-glass", usage: "Glass cards on light surfaces" },
  { id: "glass-dark", cssVar: "--shadow-glass-dark", usage: "Glass on dark heroes" },
  { id: "glow", cssVar: "--shadow-glow", usage: "Gradient CTA emphasis" },
] as const;

export const brandLogo = {
  assets: [
    {
      id: "logo-light",
      title: "Primary — light background",
      path: "/branding/logo/logo-light.svg",
      background: "bg-background",
      minWidthPx: 120,
    },
    {
      id: "logo-dark",
      title: "Primary — dark background",
      path: "/branding/logo/logo-dark.svg",
      background: "bg-primary",
      minWidthPx: 120,
    },
    {
      id: "logo-mark",
      title: "Mark only — particle N",
      path: "/branding/logo/nexynth-logo-mark.png",
      background: "bg-background",
      minWidthPx: 32,
    },
    {
      id: "logo-alt-light",
      title: "Alternate — light (Concept B)",
      path: "/branding/logo/logo-concept-alt-light.svg",
      background: "bg-background",
      minWidthPx: 120,
    },
    {
      id: "logo-alt-dark",
      title: "Alternate — dark (Concept B)",
      path: "/branding/logo/logo-concept-alt-dark.svg",
      background: "bg-midnight",
      minWidthPx: 120,
    },
  ],
  clearSpace: "Minimum clear space = height of the mark on all sides.",
  minSizes: [
    { context: "Digital wordmark", size: "120 px" },
    { context: "Print wordmark", size: "30 mm" },
    { context: "Mark only (favicon)", size: "16 px" },
  ],
  donts: [
    "Do not stretch, rotate, or skew",
    "Do not change logo colors outside the palette",
    "Do not add drop shadows or outlines to the mark",
    "Do not place on busy photography without a solid overlay",
    "Do not recreate the wordmark in a different typeface",
    "Do not mix Concept A and Concept B in the same document",
  ],
} as const;

export const brandIconography = {
  sizes: [
    { token: "icon-sm", rem: "1rem", px: 16, usage: "Inline with body text" },
    { token: "icon-md", rem: "1.25rem", px: 20, usage: "Buttons, list markers" },
    { token: "icon-lg", rem: "1.5rem", px: 24, usage: "Feature rows" },
    { token: "icon-xl", rem: "2rem", px: 32, usage: "Empty states, diagrams" },
  ],
  style: [
    "Prefer 1.5–2px stroke icons with rounded caps for UI.",
    "Use electric-blue or on-dark for interactive icons on marketing pages.",
    "Decorative diagram nodes use FlowNode pattern — rounded-md borders, small caps labels.",
    "Emoji are not part of the icon system — use SVG or unicode sparingly in product UI only.",
  ],
  touchTarget: "Interactive icons must sit inside a 44×44px minimum touch target.",
} as const;

export const brandIllustration = {
  rules: [
    "Architecture diagrams use bordered nodes, arrows, and glass panels — not stock photography.",
    "Product UI previews use framed device/chrome mocks with honest placeholder content.",
    "Mesh gradients and grid overlays reinforce engineering credibility; avoid generic SaaS blobs.",
    "GetPandit illustrations respect devotional context — no clip-art deities or sensational imagery.",
    "SVG preferred for marketing diagrams; optimize and host under public/ or inline for small flows.",
  ],
  palette: [
    "Nodes: glass/90 backgrounds with border-glass-border",
    "Accent nodes: gradient-brand-subtle or electric accent borders",
    "Dark diagrams: glass-dark/50 on midnight panels",
    "Framework: src/illustrations — NexynthIllustration component with six categories",
  ],
} as const;

export const brandMotion = {
  durations: [
    { token: "motion-fast", value: "150ms", usage: "Micro-interactions, icon rotates" },
    { token: "motion-base", value: "200ms", usage: "Buttons, borders, hover lifts" },
    { token: "motion-slow", value: "350ms", usage: "Card expand, step transitions" },
    { token: "motion-slower", value: "550ms", usage: "Hero fade-up entrance" },
  ],
  easings: [
    { token: "ease-out", value: "cubic-bezier(0.16, 1, 0.3, 1)", usage: "Entrances, reveals" },
    { token: "ease-in-out", value: "cubic-bezier(0.4, 0, 0.2, 1)", usage: "Floating loops" },
  ],
  patterns: [
    { className: "motion-hero-reveal", usage: "Hero headline entrance" },
    { className: "motion-card-reveal", usage: "Scroll-triggered cards" },
    { className: "motion-page-enter", usage: "Route change fade" },
    { className: "motion-cta", usage: "Button hover and press" },
    { className: "ds-animate-in", usage: "Legacy — prefer motion-card-reveal" },
  ],
  reducedMotion:
    "All decorative animations disable under prefers-reduced-motion via data-motion=reduce and CSS media query.",
} as const;

export const brandButtonStandards = {
  base: "rounded-ds-full · font-semibold · min-h-11 · focus-visible ring 2px",
  variants: [
    { id: "gradient", usage: "Primary marketing CTA on light or dark heroes", classHint: "bg-gradient-brand text-on-dark shadow-glow" },
    { id: "primary", usage: "Legacy navy CTA — corporate forms", classHint: "bg-primary text-primary-foreground" },
    { id: "accent", usage: "Gold accent — secondary emphasis", classHint: "bg-accent text-accent-foreground" },
    { id: "outline", usage: "Secondary actions beside gradient CTAs", classHint: "border-border bg-transparent" },
    { id: "glass", usage: "Secondary on dark heroes", classHint: "border-glass-border-dark bg-glass-dark" },
    { id: "ghost", usage: "Tertiary inline actions", classHint: "hover:bg-surface/80" },
  ],
  sizes: [
    { id: "sm", minHeight: "2.75rem", usage: "Dense admin UI" },
    { id: "md", usage: "Default" },
    { id: "lg", usage: "Marketing sections" },
    { id: "xl", usage: "Hero primary CTA" },
  ],
  rules: [
    "One gradient primary per viewport section.",
    "Stack full-width on mobile via mobile-cta-stack helper.",
    "Disabled state: opacity-60, no hover lift.",
    "External links use rel=noopener noreferrer when opening new tabs.",
  ],
} as const;

export const brandCardStandards = {
  variants: [
    { id: "solid", usage: "Default content cards", classHint: "border-border/70 bg-surface shadow-soft" },
    { id: "glass", usage: "Premium marketing sections", classHint: "bg-glass backdrop-blur-xl shadow-glass" },
    { id: "elevated", usage: "Featured content, forms", classHint: "shadow-elevated" },
    { id: "floating", usage: "Hero accents only — use sparingly", classHint: "shadow-floating ds-float" },
    { id: "dark", usage: "Cards on midnight sections", classHint: "bg-glass-dark text-on-dark" },
  ],
  padding: [
    { id: "sm", value: "p-4 sm:p-5", usage: "Metrics, compact lists" },
    { id: "md", value: "p-5 sm:p-8", usage: "Default" },
    { id: "lg", value: "p-6 sm:p-10", usage: "Featured case studies" },
  ],
  rules: [
    "Use items-stretch on card grids for equal height.",
    "Interactive cards: hover -translate-y-0.5 or -translate-y-1 max — never more than 4px.",
    "Border radius: rounded-ds-lg default, rounded-ds-xl for featured marketing cards.",
    "Do not nest floating variant inside floating variant.",
  ],
} as const;

export const brandAccessibility = {
  contrast: [
    { pair: "foreground on background", level: "AAA body / AA UI", notes: "Default reading" },
    { pair: "on-dark on midnight", level: "AA+", notes: "Hero headlines" },
    { pair: "electric-blue links on background", level: "AA", notes: "Underline on hover required for body links" },
    { pair: "accent gold on background", level: "Avoid for body", notes: "Use for accents only — not long-form text" },
  ],
  focus: {
    width: "2px",
    offset: "2px",
    color: "electric-blue / 40% ring with ring-offset-background",
    rule: "All interactive elements use focus-visible — never outline:none without replacement.",
  },
  touch: {
    minTarget: "44px (2.75rem)",
    rule: "Buttons and form controls use min-h-11; icon-only controls need padding.",
  },
  motion: "prefers-reduced-motion disables motion-* classes and legacy ds-animate-in. Buttons keep instant state changes.",
  semantics: [
    "One h1 per page; section headings step down logically.",
    "Form fields require visible labels — placeholders are supplementary.",
    "Status messages use role=status or role=alert.",
    "Decorative diagrams use aria-hidden; meaningful images need alt text.",
  ],
} as const;

export function getBrandColorByToken(token: string) {
  return brandColors.find((color) => color.token === token);
}

export function getBrandCssVar(name: string): string {
  return `var(${name.startsWith("--") ? name : `--${name}`})`;
}
