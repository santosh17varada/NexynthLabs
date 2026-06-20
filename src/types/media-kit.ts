export type MediaKitSectionId =
  | "company-profile"
  | "logos"
  | "brand-colors"
  | "typography"
  | "boilerplate"
  | "contact-details"
  | "downloadable-assets"
  | "founder-profile";

export type MediaKitSection = {
  id: MediaKitSectionId;
  title: string;
};

export type MediaKitFact = {
  label: string;
  value: string;
};

export type MediaKitLogo = {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  backgroundClass: string;
  downloadPath: string;
  available: boolean;
};

export type MediaKitColor = {
  token: string;
  name: string;
  hex: string;
  usage: string;
};

export type MediaKitTypographySample = {
  label: string;
  className: string;
  sample: string;
  specs: string;
};

export type MediaKitBoilerplate = {
  id: string;
  label: string;
  text: string;
};

export type MediaKitDownloadAsset = {
  id: string;
  title: string;
  description: string;
  fileType: string;
  downloadPath: string;
  available: boolean;
  requestHref: string;
};
