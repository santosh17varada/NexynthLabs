import { siteConfig } from "@/config/site";

export function absoluteUrl(path: string = "/"): string {
  if (!path || path === "/") {
    return siteConfig.domain;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.domain}${normalized}`;
}
