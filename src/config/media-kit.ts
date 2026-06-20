import { getMailtoLink } from "@/config/site";
import {
  address,
  brandName,
  companyName,
  domain,
  email,
  flagshipProductName,
  phoneDisplay,
  tagline,
} from "@/config/site-values";
import type {
  MediaKitBoilerplate,
  MediaKitColor,
  MediaKitDownloadAsset,
  MediaKitFact,
  MediaKitLogo,
  MediaKitSection,
  MediaKitTypographySample,
} from "@/types/media-kit";

export const mediaKitPageCopy = {
  hero: {
    eyebrow: "Press & brand",
    title: "Media kit",
    description: `Official brand assets, company facts, and boilerplate copy for journalists, partners, and event organisers covering ${brandName}.`,
  },
  disclaimer:
    "Logo files and downloadable packs are placeholders until the final press kit is published. For the full token reference and component standards, see the Brand system page.",
  footnote:
    "For interview requests or asset approvals, email us — we respond manually; there is no public press portal.",
} as const;

export const mediaKitSections: readonly MediaKitSection[] = [
  { id: "company-profile", title: "Company profile" },
  { id: "logos", title: "Logos" },
  { id: "brand-colors", title: "Brand colors" },
  { id: "typography", title: "Typography" },
  { id: "boilerplate", title: "Boilerplate" },
  { id: "contact-details", title: "Contact" },
  { id: "downloadable-assets", title: "Downloads" },
  { id: "founder-profile", title: "Founder profile" },
] as const;

export const mediaKitCompanyProfile = {
  title: "Company profile",
  summary: `${companyName} (${brandName}) is a ${address.city}-based technology company building thoughtful digital products for modern India.`,
  paragraphs: [
    `${brandName} combines product engineering, AI automation, and platform thinking with cultural awareness — especially in trust-heavy domains. Our flagship product, ${flagshipProductName}, runs on its own domain and is marketed separately from this corporate site.`,
    "We work with partners on web and mobile apps, cloud deployments, integrations (payments, SMS, WhatsApp), and long-term platform maintenance. Every public readiness statement on this site is config-driven and honest — no invented metrics or certifications.",
  ],
  facts: [
    { label: "Legal name", value: companyName },
    { label: "Brand", value: brandName },
    { label: "Tagline", value: tagline },
    { label: "Headquarters", value: `${address.city}, ${address.state}, ${address.country}` },
    { label: "Website", value: new URL(domain).hostname },
    { label: "Flagship product", value: `${flagshipProductName} (getpandit.com)` },
    { label: "Founded", value: `${address.city} — year available on request` },
  ] satisfies readonly MediaKitFact[],
  links: [
    { label: "About us", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Product ecosystem", href: "/products/ecosystem" },
  ],
} as const;

export const mediaKitLogos: readonly MediaKitLogo[] = [
  {
    id: "logo-light",
    title: "Primary — light background",
    description: "Concept A wordmark for ivory and white surfaces. Minimum width 120 px digital.",
    imagePath: "/branding/logo/logo-light.svg",
    backgroundClass: "bg-background",
    downloadPath: "/press/nexynth-logo-light.svg",
    available: false,
  },
  {
    id: "logo-dark",
    title: "Primary — dark background",
    description: "Concept A wordmark for navy panels, presentations, and event signage.",
    imagePath: "/branding/logo/logo-dark.svg",
    backgroundClass: "bg-primary",
    downloadPath: "/press/nexynth-logo-dark.svg",
    available: false,
  },
  {
    id: "logo-mark",
    title: "Mark only — particle N",
    description: "3D particle N icon for navigation, app icon, and favicon. Minimum 32 px digital.",
    imagePath: "/branding/logo/nexynth-logo-mark.png",
    backgroundClass: "bg-background",
    downloadPath: "/branding/logo/nexynth-logo-mark.png",
    available: true,
  },
] as const;

export const mediaKitBrandColors: readonly MediaKitColor[] = [
  {
    token: "primary",
    name: "Nexynth Navy",
    hex: "#1e3a5f",
    usage: "Brand primary, logo container, buttons",
  },
  {
    token: "foreground",
    name: "Deep Midnight",
    hex: "#0f1b2d",
    usage: "Body text, dark UI backgrounds",
  },
  {
    token: "accent",
    name: "Synth Gold",
    hex: "#b8891f",
    usage: "Accent highlights, CTAs, logo node",
  },
  {
    token: "background",
    name: "Warm Ivory",
    hex: "#f8f7f4",
    usage: "Page backgrounds, print stationery",
  },
  {
    token: "muted",
    name: "Slate Muted",
    hex: "#5b6472",
    usage: "Secondary text, captions",
  },
  {
    token: "border",
    name: "Mist Border",
    hex: "#d9dde4",
    usage: "Dividers and borders",
  },
] as const;

export const mediaKitTypography: readonly MediaKitTypographySample[] = [
  {
    label: "Page title (H1)",
    className: "text-2xl font-semibold tracking-tight sm:text-3xl",
    sample: brandName,
    specs: "Geist Sans Semibold · 1.75–3 rem",
  },
  {
    label: "Section title (H2)",
    className: "text-xl font-semibold sm:text-2xl",
    sample: "Building thoughtful technology",
    specs: "Geist Sans Semibold · 1.5–2.25 rem",
  },
  {
    label: "Body",
    className: "text-base leading-relaxed",
    sample: `${brandName} builds premium digital products for India with clear, respectful UX.`,
    specs: "Geist Sans Regular · 16 px minimum on mobile",
  },
  {
    label: "Caption / label",
    className: "text-eyebrow font-medium text-muted",
    sample: "Press & brand",
    specs: "Geist Sans Medium · 0.75 rem, widened tracking",
  },
  {
    label: "Monospace",
    className: "font-mono text-sm",
    sample: "nexynthlabs.com · getpandit.com",
    specs: "Geist Mono · code and technical IDs",
  },
] as const;

export const mediaKitBoilerplate: readonly MediaKitBoilerplate[] = [
  {
    id: "short",
    label: "Short",
    text: `${brandName} (${companyName}) is a ${address.city}-based technology company building ${flagshipProductName} and partner platforms for modern India.`,
  },
  {
    id: "standard",
    label: "Standard",
    text: `${companyName}, doing business as ${brandName}, is headquartered in ${address.city}, ${address.state}. The company builds thoughtful technology for modern India — including ${flagshipProductName}, an online pandit booking platform, and engineering services spanning AI, web, mobile, cloud, and integrations. Learn more at ${new URL(domain).hostname}.`,
  },
  {
    id: "extended",
    label: "Extended",
    text: `${companyName} (${brandName}) is a product and platform engineering company based in ${address.city}, India. ${tagline}.\n\n${flagshipProductName} is the flagship consumer product — discovery, scheduling, and integration readiness for pooja services — and operates independently at getpandit.com. The corporate site at ${new URL(domain).hostname} covers services, partnerships, careers, and company news.\n\n${brandName} works with enterprises and growth-stage teams on AI automation, agentic workflows, web and mobile applications, cloud deployments, and messaging or payment integrations. Public readiness labels on this site are config-maintained; the team does not publish unverified metrics or certifications.`,
  },
] as const;

export const mediaKitContact = {
  title: "Press & media contact",
  summary: "For interviews, speaking requests, logo approvals, or partnership announcements.",
  email,
  phoneDisplay,
  address: address.full,
  pressMailto: getMailtoLink(`Press enquiry — ${brandName}`),
  generalMailto: getMailtoLink(),
  links: [
    { label: "Contact form", href: "/contact?intent=press" },
    { label: "Partners", href: "/partners" },
    { label: "FAQ", href: "/faq" },
  ],
} as const;

export const mediaKitDownloadAssets: readonly MediaKitDownloadAsset[] = [
  {
    id: "logo-pack",
    title: "Logo pack (ZIP)",
    description: "SVG and PNG exports — light, dark, and mark variants with clear-space guide.",
    fileType: "ZIP",
    downloadPath: "/press/nexynth-logo-pack.zip",
    available: false,
    requestHref: "/contact?intent=press&asset=logo-pack",
  },
  {
    id: "brand-guidelines",
    title: "Brand guidelines (PDF)",
    description: "Color, typography, logo usage, and voice — aligned with branding/GUIDELINES.md.",
    fileType: "PDF",
    downloadPath: "/press/nexynth-brand-guidelines.pdf",
    available: false,
    requestHref: "/contact?intent=press&asset=brand-guidelines",
  },
  {
    id: "fact-sheet",
    title: "Company fact sheet (PDF)",
    description: `One-page overview — ${brandName} services, ${flagshipProductName}, headquarters, and contact.`,
    fileType: "PDF",
    downloadPath: "/press/nexynth-fact-sheet.pdf",
    available: false,
    requestHref: "/contact?intent=press&asset=fact-sheet",
  },
  {
    id: "executive-photo",
    title: "Executive photo (placeholder)",
    description: "Approved headshots for leadership — available on request after consent.",
    fileType: "Image",
    downloadPath: "/press/nexynth-leadership-photo.jpg",
    available: false,
    requestHref: "/contact?intent=press&asset=executive-photo",
  },
] as const;

export const mediaKitDownloadsCopy = {
  placeholderBadge: "Coming soon",
  downloadLabel: "Download",
  requestLabel: "Request access",
} as const;

export function getMediaKitDownloadHref(item: MediaKitDownloadAsset): string {
  return item.available ? item.downloadPath : item.requestHref;
}

export function getMediaKitDownloadActionLabel(item: MediaKitDownloadAsset): string {
  return item.available
    ? mediaKitDownloadsCopy.downloadLabel
    : mediaKitDownloadsCopy.requestLabel;
}

export function getMediaKitLogoRequestHref(logoId: string): string {
  return `/contact?intent=press&asset=${logoId}`;
}
