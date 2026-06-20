export type LocaleId = "en" | "te" | "hi";

export type LocaleStatus = "active" | "planned";

export type LocaleDefinition = {
  id: LocaleId;
  /** BCP 47 tag for html lang / SEO */
  htmlLang: string;
  /** ISO-style region tag for Open Graph */
  ogLocale: string;
  /** Endonym shown in language switcher */
  nativeLabel: string;
  /** English label for docs and admin */
  englishLabel: string;
  status: LocaleStatus;
  direction: "ltr";
};

export type LocaleMessages = {
  languageSwitcher: {
    label: string;
    ariaLabel: string;
  };
  readinessBanner: {
    title: string;
    description: string;
    dismissLabel: string;
  };
  navigation: {
    skipToContent: string;
    main: string;
    mobile: string;
    openMenu: string;
    closeMenu: string;
    closeMenuOverlay: string;
    openSubmenu: string;
    closeSubmenu: string;
    overviewLink: string;
    more: string;
    legal: string;
  };
};
