import { brandMeta } from "@/brand/tokens";

export const brandPageCopy = {
  hero: {
    eyebrow: "Brand system",
    title: "Nexynth Labs identity & design language",
    description: `Version ${brandMeta.version} — reusable tokens, component standards, and documentation for ${brandMeta.brand} marketing, product UI, and partner materials.`,
    primaryCta: { label: "Media kit", href: "/media-kit" },
    secondaryCta: { label: "Media kit colors", href: "/media-kit#brand-colors" },
  },
  nav: [
    { id: "foundations", label: "Foundations" },
    { id: "logo", label: "Logo" },
    { id: "spacing", label: "Spacing" },
    { id: "typography", label: "Typography" },
    { id: "colors", label: "Colors" },
    { id: "gradients", label: "Gradients" },
    { id: "iconography", label: "Iconography" },
    { id: "illustration", label: "Illustration" },
    { id: "motion", label: "Motion" },
    { id: "social-proof", label: "Social proof" },
    { id: "components", label: "Components" },
    { id: "accessibility", label: "Accessibility" },
  ],
  disclaimer:
    "Static SVG assets live in branding/ and public/branding/. Press downloads may be marked placeholder until final ZIP packs ship.",
  finalCta: {
    title: "Need logo files or approval?",
    description: "Use the media kit for press assets or email the team for co-branding reviews.",
    primary: { label: "Media kit", href: "/media-kit" },
    secondary: { label: "Contact", href: "/contact" },
  },
} as const;
