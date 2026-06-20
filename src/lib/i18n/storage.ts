import { LOCALE_STORAGE_KEY, defaultLocale, isLocaleId } from "@/config/i18n";
import type { LocaleId } from "@/types/i18n";

export function readStoredLocale(): LocaleId {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocaleId(stored) ? stored : defaultLocale;
  } catch {
    return defaultLocale;
  }
}

export function writeStoredLocale(locale: LocaleId): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Ignore private browsing / quota errors
  }
}
