import type { LocaleDefinition, LocaleId } from "@/types/i18n";

export const LOCALE_STORAGE_KEY = "nexynth-labs-locale";

export const defaultLocale: LocaleId = "en";

/**
 * Planned locales — English is active; Telugu and Hindi are switcher + banner only until content migration.
 * @see docs/nexynth-labs/41-multilingual-readiness-guide.md
 */
export const locales: readonly LocaleDefinition[] = [
  {
    id: "en",
    htmlLang: "en-IN",
    ogLocale: "en_IN",
    nativeLabel: "English",
    englishLabel: "English",
    status: "active",
    direction: "ltr",
  },
  {
    id: "te",
    htmlLang: "te-IN",
    ogLocale: "te_IN",
    nativeLabel: "తెలుగు",
    englishLabel: "Telugu",
    status: "planned",
    direction: "ltr",
  },
  {
    id: "hi",
    htmlLang: "hi-IN",
    ogLocale: "hi_IN",
    nativeLabel: "हिन्दी",
    englishLabel: "Hindi",
    status: "planned",
    direction: "ltr",
  },
] as const;

export const i18nPageCopy = {
  footnote:
    "Multilingual content is rolling out gradually. Page copy remains in English until Telugu and Hindi catalogs are approved.",
} as const;

export function getLocaleDefinition(id: LocaleId): LocaleDefinition {
  const match = locales.find((locale) => locale.id === id);
  if (!match) {
    return locales[0];
  }
  return match;
}

export function isLocaleId(value: string | null | undefined): value is LocaleId {
  return locales.some((locale) => locale.id === value);
}

export function getLocaleHtmlLang(id: LocaleId): string {
  return getLocaleDefinition(id).htmlLang;
}

export function getPlannedLocaleIds(): LocaleId[] {
  return locales.filter((locale) => locale.status === "planned").map((locale) => locale.id);
}
