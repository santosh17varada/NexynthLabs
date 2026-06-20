import type { LocaleMessages } from "@/types/i18n";

export const hiMessages = {
  languageSwitcher: {
    label: "भाषा",
    ariaLabel: "साइट की भाषा चुनें",
  },
  readinessBanner: {
    title: "हिन्दी अनुवाद जल्द आ रहा है",
    description:
      "आपने एक नियोजित भाषा चुनी है। स्थानीय सामग्री प्रकाशित होने तक मार्केटिंग पेज अंग्रेज़ी में ही रहेंगे।",
    dismissLabel: "बंद करें",
  },
  navigation: {
    skipToContent: "मुख्य सामग्री पर जाएँ",
    main: "मुख्य",
    mobile: "मोबाइल",
    openMenu: "मेनू खोलें",
    closeMenu: "मेनू बंद करें",
    closeMenuOverlay: "मेनू बंद करें",
    openSubmenu: "{label} उपमेनू खोलें",
    closeSubmenu: "{label} उपमेनू बंद करें",
    overviewLink: "{label} अवलोकन",
    more: "और",
    legal: "कानूनी",
  },
} satisfies LocaleMessages;
