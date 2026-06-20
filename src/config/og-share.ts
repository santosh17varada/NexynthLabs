import { homeHeroCopy } from "@/config/home";
import { address, brandName, companyName, flagshipProductName } from "@/config/site-values";

/** Shared Open Graph / Twitter card copy — aligned with homepage hero after redesign. */
export const ogShareCopy = {
  brandLabel: brandName,
  headline: homeHeroCopy.title,
  subline: `${homeHeroCopy.eyebrow} · ${flagshipProductName} · ${address.city}, ${address.country}`,
  footer: `${companyName} · ${address.city}, ${address.country}`,
  alt: `${brandName} — ${homeHeroCopy.title}`,
} as const;
