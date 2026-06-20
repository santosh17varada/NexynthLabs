export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "not_fit"
  | "closed";

export type LeadSource =
  | "contact-form"
  | "partner-form"
  | "whatsapp_cta"
  | "ai_readiness_score"
  | "book_consultation"
  | "request_proposal"
  | "newsletter"
  | "careers"
  | "other";

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  interestType: string;
  sourcePage: string;
  message: string;
  source: LeadSource;
  status: LeadStatus;
  notes: string;
  createdAt: string;
};

export type LeadInput = {
  name: string;
  email: string;
  phone: string;
  company: string;
  interestType: string;
  sourcePage?: string;
  message: string;
  source?: LeadSource;
  notes?: string;
};

export type LeadUpdate = {
  status?: LeadStatus;
  notes?: string;
};

/** @deprecated Use Lead */
export type CmsLead = Lead;
