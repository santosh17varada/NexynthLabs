export type PartnerPortalTypeId =
  | "temple"
  | "service"
  | "technology"
  | "vendor"
  | "investor";

export type PartnerPortalProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type PartnerPortalType = {
  id: PartnerPortalTypeId;
  label: string;
  summary: string;
  benefits: readonly string[];
  process: readonly PartnerPortalProcessStep[];
  eligibility: readonly string[];
  enquiryInterest: string;
};
