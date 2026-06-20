/** Shared literals used by site and product config (avoids circular imports). */
export const companyName = "Nexynth Labs Private Limited";
export const brandName = "Nexynth Labs";
export const brandDescriptor = "AI-Native Product Company";
/** Infinity-N mark — transparent PNG; wordmark stays HTML text. */
export const brandLogoMarkPath = "/branding/logo/nexynth-logo-mark-transparent.png";
export const brandLogoMarkSrc = brandLogoMarkPath;
export const flagshipProductName = "GetPandit";
export const email = "nexynthlabs@gmail.com";
export const phone = "9951429687";
export const phoneDisplay = "+91 99514 29687";
export const domain = "https://nexynthlabs.com";
export const tagline = "AI-first products, built in India";

/** Content revision date for static sitemap entries (ISO date). */
export const siteContentRevision = "2026-06-19";

export const address = {
  line1: "House No. 12-34-1, Adarsh Nagar",
  line2: "Opposite IDPL Colony, Near Balanagar",
  city: "Hyderabad",
  state: "Telangana",
  postalCode: "500037",
  country: "India",
  full: "House No. 12-34-1, Adarsh Nagar, Opposite IDPL Colony, Near Balanagar, Hyderabad, Telangana - 500037",
} as const;
