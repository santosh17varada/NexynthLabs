import type { LocaleMessages } from "@/types/i18n";

export const enMessages = {
  languageSwitcher: {
    label: "Language",
    ariaLabel: "Choose site language",
  },
  readinessBanner: {
    title: "Telugu and Hindi translations are coming soon",
    description:
      "You selected a planned language. Marketing pages still display English copy until localized content is published.",
    dismissLabel: "Dismiss",
  },
  navigation: {
    skipToContent: "Skip to main content",
    main: "Main",
    mobile: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    closeMenuOverlay: "Close menu",
    openSubmenu: "Open {label} submenu",
    closeSubmenu: "Close {label} submenu",
    overviewLink: "{label} overview",
    more: "More",
    legal: "Legal",
  },
} satisfies LocaleMessages;
