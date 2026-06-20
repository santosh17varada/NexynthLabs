export type EventStatus = "upcoming" | "completed" | "planned";

export type EventItem = {
  id: string;
  title: string;
  status: EventStatus;
  /** ISO date or human-readable schedule line */
  schedule: string;
  format: string;
  description: string;
  highlights: readonly string[];
  cta?: {
    label: string;
    href: string;
    external?: boolean;
  };
};

export type EventSectionId =
  | "upcoming-events"
  | "webinars"
  | "product-launches"
  | "ai-sessions"
  | "past-events";

export type EventSection = {
  id: EventSectionId;
  eyebrow: string;
  title: string;
  description: string;
  items: readonly EventItem[];
};
