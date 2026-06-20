export type ResourceDownloadId =
  | "company-brochure"
  | "services-brochure"
  | "product-deck"
  | "getpandit-overview"
  | "architecture-overview";

export type ResourceDownload = {
  id: ResourceDownloadId;
  title: string;
  description: string;
  fileType: string;
  /** Target path when the file is published under public/downloads/ */
  downloadPath: string;
  /** When false, UI uses request CTA instead of direct download */
  available: boolean;
  /** Contact or form link until lead-gated download ships */
  requestHref: string;
};
