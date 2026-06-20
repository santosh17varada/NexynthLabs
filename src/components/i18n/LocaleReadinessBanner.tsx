"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { isLocaleId } from "@/config/i18n";
import type { LocaleId } from "@/types/i18n";

const DISMISS_KEY = "nexynth-labs-locale-banner-dismissed";

function readDismissedLocale(): LocaleId | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.sessionStorage.getItem(DISMISS_KEY);
    return isLocaleId(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function LocaleReadinessBanner() {
  const { locale, messages, isPlannedLocale } = useLocale();
  const [dismissedLocale, setDismissedLocale] = useState<LocaleId | null>(
    readDismissedLocale,
  );

  const showBanner = isPlannedLocale && dismissedLocale !== locale;

  if (!showBanner) {
    return null;
  }

  function handleDismiss() {
    try {
      window.sessionStorage.setItem(DISMISS_KEY, locale);
    } catch {
      // ignore
    }
    setDismissedLocale(locale);
  }

  const { title, description, dismissLabel } = messages.readinessBanner;

  return (
    <div
      className="border-b border-electric-blue/30 bg-electric-violet/10"
      role="status"
      aria-live="polite"
    >
      <Container className="flex flex-col gap-3 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:py-3.5">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          className="inline-flex min-h-11 shrink-0 items-center self-start rounded-lg border border-border bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:border-electric-blue/40"
        >
          {dismissLabel}
        </button>
      </Container>
    </div>
  );
}
