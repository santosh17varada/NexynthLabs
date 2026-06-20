"use client";

import { locales } from "@/config/i18n";
import { useLocale } from "@/components/i18n/LocaleProvider";
import type { LocaleId } from "@/types/i18n";

type LanguageSwitcherProps = {
  className?: string;
  id?: string;
};

export function LanguageSwitcher({ className = "", id = "site-language" }: LanguageSwitcherProps) {
  const { locale, messages, setLocale } = useLocale();

  return (
    <div className={`min-w-0 ${className}`}>
      <label htmlFor={id} className="sr-only">
        {messages.languageSwitcher.label}
      </label>
      <select
        id={id}
        name="locale"
        value={locale}
        onChange={(event) => setLocale(event.target.value as LocaleId)}
        aria-label={messages.languageSwitcher.ariaLabel}
        suppressHydrationWarning
        className="h-11 max-w-full min-w-0 rounded-lg border border-border bg-background px-2.5 text-sm text-foreground outline-none transition-colors hover:border-border focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 sm:min-w-[6.5rem] sm:px-3"
      >
        {locales.map((item) => (
          <option key={item.id} value={item.id} lang={item.htmlLang}>
            {item.nativeLabel}
          </option>
        ))}
      </select>
    </div>
  );
}
