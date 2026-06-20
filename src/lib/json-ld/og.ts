import { ogShareCopy } from "@/config/og-share";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/json-ld/urls";

const { seo } = siteConfig;

export function getDefaultOgImage(imagePath: string = seo.ogImagePath) {
  return {
    url: absoluteUrl(imagePath),
    width: seo.ogImageWidth,
    height: seo.ogImageHeight,
    alt: ogShareCopy.alt,
    type: "image/png" as const,
  };
}
