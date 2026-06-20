import type { LocaleId, LocaleMessages } from "@/types/i18n";
import { defaultLocale } from "@/config/i18n";
import { enMessages } from "@/messages/en";
import { hiMessages } from "@/messages/hi";
import { teMessages } from "@/messages/te";

const messageCatalog: Record<LocaleId, LocaleMessages> = {
  en: enMessages,
  te: teMessages,
  hi: hiMessages,
};

export function getMessages(locale: LocaleId): LocaleMessages {
  return messageCatalog[locale] ?? messageCatalog[defaultLocale];
}

export { enMessages, teMessages, hiMessages };
