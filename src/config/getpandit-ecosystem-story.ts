export const getPanditEcosystemStoryCopy = {
  id: "getpandit-ecosystem-story",
  eyebrow: "Digital spiritual ecosystem",
  title: "From discovery to ceremony day",
  description:
    "Connecting families, pandits, vendors, and ceremonies through one intelligent platform.",
  cards: [
    {
      id: "discover",
      step: "01",
      title: "Family discovers pooja services",
      description:
        "Browse packages, compare pandits, and explore ceremonies with transparent pricing on getpandit.com.",
    },
    {
      id: "match",
      step: "02",
      title: "Platform matches pandits",
      description:
        "GetPandit surfaces verified pandits by location, language, and ceremony type — with honest readiness labels.",
    },
    {
      id: "book",
      step: "03",
      title: "Booking and scheduling flow",
      description:
        "Calendar-aware scheduling, confirmations, and reminders keep families and pandits aligned before the event.",
    },
    {
      id: "ceremony",
      step: "04",
      title: "Ceremony completed",
      description:
        "The ceremony is delivered with support paths for vendors, follow-ups, and future bookings in one ecosystem.",
    },
  ],
} as const;

export type GetPanditEcosystemCardId =
  (typeof getPanditEcosystemStoryCopy.cards)[number]["id"];

export const GETPANDIT_ECOSYSTEM_LAYOUT = {
  viewBox: { width: 800, height: 200 },
  trackY: 88,
  nodeY: 88,
  nodeRadius: 28,
  nodes: [
    { id: "discover", x: 100 },
    { id: "match", x: 300 },
    { id: "book", x: 500 },
    { id: "ceremony", x: 700 },
  ],
} as const;

export const CARD_IDS = getPanditEcosystemStoryCopy.cards.map((card) => card.id);
