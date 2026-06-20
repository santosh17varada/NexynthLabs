"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";

export function SkipToContent() {
  const { messages } = useLocale();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:z-[100] focus:top-[calc(var(--site-header-offset)+0.5rem)] focus:rounded-ds-md focus:border focus:border-electric-blue/40 focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2"
    >
      {messages.navigation.skipToContent}
    </a>
  );
}
