import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/json-ld/urls";

export const JSON_LD_CONTEXT = "https://schema.org" as const;

export const organizationId = `${siteConfig.domain}/#organization`;
export const websiteId = `${siteConfig.domain}/#website`;

export function webPageId(path: string): string {
  return `${absoluteUrl(path)}#webpage`;
}

export function breadcrumbId(path: string): string {
  return `${absoluteUrl(path)}#breadcrumb`;
}

export function faqId(path: string): string {
  return `${absoluteUrl(path)}#faq`;
}
