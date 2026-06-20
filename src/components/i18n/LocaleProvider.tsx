"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  getLocaleDefinition,
  getLocaleHtmlLang,
} from "@/config/i18n";
import { getMessages } from "@/messages";
import { readStoredLocale, writeStoredLocale } from "@/lib/i18n/storage";
import type { LocaleId, LocaleMessages } from "@/types/i18n";

type LocaleContextValue = {
  locale: LocaleId;
  messages: LocaleMessages;
  setLocale: (locale: LocaleId) => void;
  isPlannedLocale: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

let localeListeners: Array<() => void> = [];

function subscribeLocale(onStoreChange: () => void) {
  localeListeners.push(onStoreChange);
  return () => {
    localeListeners = localeListeners.filter((listener) => listener !== onStoreChange);
  };
}

function notifyLocaleListeners() {
  localeListeners.forEach((listener) => listener());
}

function getClientLocaleSnapshot(): LocaleId {
  return readStoredLocale();
}

function getServerLocaleSnapshot(): LocaleId {
  return defaultLocale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    getClientLocaleSnapshot,
    getServerLocaleSnapshot,
  );

  const setLocale = useCallback((next: LocaleId) => {
    writeStoredLocale(next);
    notifyLocaleListeners();
  }, []);

  useEffect(() => {
    document.documentElement.lang = getLocaleHtmlLang(locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(() => {
    const definition = getLocaleDefinition(locale);
    return {
      locale,
      messages: getMessages(locale),
      setLocale,
      isPlannedLocale: definition.status === "planned",
    };
  }, [locale, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
