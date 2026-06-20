import { brandName, flagshipProductName } from "@/config/site-values";
import type { ResourceDownload } from "@/types/resource-downloads";

export const resourceDownloadsSectionCopy = {
  title: "Downloadable resources",
  description: `Brochures and overview decks from ${brandName}. PDFs are placeholders until brand assets are finalized — use request links or contact until files go live.`,
  placeholderBadge: "Coming soon",
  downloadLabel: "Download",
  requestLabel: "Request access",
  footnote:
    "Lead capture before download is planned — see docs/nexynth-labs/34-resource-downloads-guide.md.",
} as const;

export const resourceDownloads: readonly ResourceDownload[] = [
  {
    id: "company-brochure",
    title: "Company Brochure",
    description: `Overview of ${brandName} — mission, services, product separation, and how we work with partners across India.`,
    fileType: "PDF",
    downloadPath: "/downloads/nexynth-company-brochure.pdf",
    available: false,
    requestHref: "/contact?intent=resource-download&asset=company-brochure",
  },
  {
    id: "services-brochure",
    title: "Services Brochure",
    description:
      "AI, product engineering, web and mobile, cloud, integrations, and maintenance — scoped for enterprise and growth-stage teams.",
    fileType: "PDF",
    downloadPath: "/downloads/nexynth-services-brochure.pdf",
    available: false,
    requestHref: "/contact?intent=resource-download&asset=services-brochure",
  },
  {
    id: "product-deck",
    title: "Product Deck",
    description: `Product ecosystem snapshot — ${flagshipProductName}, AI agents, temple management, vendor marketplace, and honest readiness labels.`,
    fileType: "PDF",
    downloadPath: "/downloads/nexynth-product-deck.pdf",
    available: false,
    requestHref: "/contact?intent=resource-download&asset=product-deck",
  },
  {
    id: "getpandit-overview",
    title: "GetPandit Overview",
    description: `One-pager for ${flagshipProductName} — discovery, scheduling, integration readiness, and separation from the corporate site.`,
    fileType: "PDF",
    downloadPath: "/downloads/getpandit-overview.pdf",
    available: false,
    requestHref: "/contact?intent=resource-download&asset=getpandit-overview",
  },
  {
    id: "architecture-overview",
    title: "Architecture Overview",
    description:
      "High-level corporate site and product boundary diagram — static marketing, lead capture, admin CMS shell, and GetPandit on its own domain.",
    fileType: "PDF",
    downloadPath: "/downloads/nexynth-architecture-overview.pdf",
    available: false,
    requestHref: "/contact?intent=resource-download&asset=architecture-overview",
  },
] as const;

export function getResourceDownloadHref(item: ResourceDownload): string {
  return item.available ? item.downloadPath : item.requestHref;
}

export function getResourceDownloadActionLabel(item: ResourceDownload): string {
  return item.available
    ? resourceDownloadsSectionCopy.downloadLabel
    : resourceDownloadsSectionCopy.requestLabel;
}
