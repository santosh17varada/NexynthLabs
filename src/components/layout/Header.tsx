"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import {
  headerNavigation,
  isHeaderNavGroup,
  type HeaderNavGroup,
  type HeaderNavItem,
  type HeaderNavLink,
} from "@/config/header-navigation";
import { formatMessage, focusFirstFocusable } from "@/lib/a11y/format-message";
import type { LocaleMessages } from "@/types/i18n";
import { cn } from "@/lib/cn";

function pathMatches(pathname: string, href: string) {
  const path = href.split("?")[0];
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

function groupLinks(group: HeaderNavGroup): HeaderNavLink[] {
  return [...group.featured, ...(group.more ?? []), ...(group.legal ?? [])];
}

function isItemActive(pathname: string, item: HeaderNavItem) {
  if (isHeaderNavGroup(item)) {
    if (pathMatches(pathname, item.href)) return true;
    return groupLinks(item).some((link) => pathMatches(pathname, link.href));
  }
  return pathMatches(pathname, item.href);
}

function navItemSlug(label: string): string {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function navTriggerClass(active: boolean) {
  return cn(
    "group/trigger inline-flex items-center gap-1 rounded-ds-full px-3.5 py-2 text-sm font-medium transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/35 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent",
    active
      ? "font-semibold text-foreground"
      : "text-muted hover:text-foreground",
  );
}

const megaMenuPanelSurfaceClass =
  "site-mega-menu-panel overflow-hidden rounded-ds-xl border-none bg-surface text-foreground shadow-floating outline-none ring-0";

const megaMenuPanelWrapperClass =
  "absolute left-1/2 top-full z-[130] w-[min(calc(100vw-2rem),36rem)] -translate-x-1/2 pt-3 outline-none ring-0 focus:outline-none";

const megaMenuScrimClass =
  "fixed inset-x-0 bottom-0 top-[var(--site-header-offset)] z-[95] hidden bg-midnight/35 backdrop-blur-[2px] lg:block";

const DESKTOP_MENU_HOVER_CLOSE_MS = 150;

function MegaMenuCard({
  link,
  onNavigate,
}: {
  link: HeaderNavLink;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={link.href}
      role="menuitem"
      onClick={onNavigate}
      className="group/card block rounded-ds-md border border-transparent p-3 transition-all duration-200 hover:border-border/60 hover:bg-surface/90 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/40"
    >
      <span className="text-sm font-semibold text-foreground transition-colors group-hover/card:text-primary">
        {link.label}
      </span>
      {link.description ? (
        <p className="mt-1.5 text-sm leading-relaxed text-muted line-clamp-2">
          {link.description}
        </p>
      ) : null}
    </Link>
  );
}

function MegaMenuPanel({
  group,
  nav,
  onNavigate,
}: {
  group: HeaderNavGroup;
  nav: LocaleMessages["navigation"];
  onNavigate?: () => void;
}) {
  const overviewLabel = formatMessage(nav.overviewLink, { label: group.label });

  return (
    <div className={megaMenuPanelSurfaceClass}>
      <div className="border-b border-border/50 bg-gradient-to-br from-electric-blue/[0.05] via-surface to-electric-violet/[0.05] px-5 py-4">
        <Link
          href={group.href}
          role="menuitem"
          onClick={onNavigate}
          className="text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/40"
        >
          {overviewLabel} →
        </Link>
        {group.description ? (
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {group.description}
          </p>
        ) : null}
      </div>

      <div className="grid gap-1 bg-surface p-3 sm:grid-cols-2">
        {group.featured.map((link) => (
          <MegaMenuCard key={link.href} link={link} onNavigate={onNavigate} />
        ))}
      </div>

      {group.more && group.more.length > 0 ? (
        <div className="border-t border-border/50 bg-surface px-5 py-3">
          <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-wider text-muted">
            {nav.more}
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1" role="none">
            {group.more.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  role="menuitem"
                  onClick={onNavigate}
                  className="inline-flex min-h-9 items-center text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/40"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {group.legal && group.legal.length > 0 ? (
        <div className="border-t border-border/50 bg-surface px-5 py-3">
          <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-wider text-muted">
            {nav.legal}
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1" role="none">
            {group.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  role="menuitem"
                  onClick={onNavigate}
                  className="inline-flex min-h-9 items-center text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/40"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function DesktopNavGroup({
  group,
  pathname,
  isOpen,
  onHoverEnter,
  onHoverLeave,
  onClose,
  nav,
}: {
  group: HeaderNavGroup;
  pathname: string;
  isOpen: boolean;
  onHoverEnter: () => void;
  onHoverLeave: () => void;
  onClose: () => void;
  nav: LocaleMessages["navigation"];
}) {
  const slug = navItemSlug(group.label);
  const triggerId = `site-nav-${slug}-trigger`;
  const panelId = `site-nav-${slug}-panel`;
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const openedByKeyboardRef = useRef(false);
  const active = isItemActive(pathname, group);

  const closeAndFocusTrigger = useCallback(() => {
    onClose();
    triggerRef.current?.focus();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeAndFocusTrigger();
      }
    };

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!rootRef.current?.contains(target)) {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [isOpen, onClose, closeAndFocusTrigger]);

  useEffect(() => {
    if (isOpen && openedByKeyboardRef.current) {
      focusFirstFocusable(panelRef.current);
      openedByKeyboardRef.current = false;
    }
  }, [isOpen]);

  function handleTriggerKeyDown(event: React.KeyboardEvent<HTMLAnchorElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      openedByKeyboardRef.current = true;
      onHoverEnter();
      if (isOpen) {
        focusFirstFocusable(panelRef.current);
      }
    }

    if (event.key === "ArrowUp" && isOpen) {
      event.preventDefault();
      closeAndFocusTrigger();
    }
  }

  function handleRootMouseLeave(event: React.MouseEvent<HTMLDivElement>) {
    const next = event.relatedTarget;
    if (next instanceof Node && rootRef.current?.contains(next)) return;
    onHoverLeave();
  }

  function handleRootBlur(event: React.FocusEvent<HTMLDivElement>) {
    const next = event.relatedTarget;
    if (next instanceof Node && rootRef.current?.contains(next)) return;
    onHoverLeave();
  }

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={onHoverEnter}
      onMouseLeave={handleRootMouseLeave}
      onBlur={handleRootBlur}
    >
      <Link
        ref={triggerRef}
        id={triggerId}
        href={group.href}
        className={navTriggerClass(active)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-haspopup="menu"
        aria-current={active ? "page" : undefined}
        onFocus={onHoverEnter}
        onKeyDown={handleTriggerKeyDown}
      >
        {group.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 opacity-60 transition-[transform,opacity] duration-200 group-hover/trigger:opacity-100",
            isOpen && "rotate-180 opacity-100",
          )}
          aria-hidden="true"
        />
      </Link>
      {isOpen ? (
        <div
          ref={panelRef}
          id={panelId}
          role="menu"
          aria-labelledby={triggerId}
          className={megaMenuPanelWrapperClass}
          onMouseEnter={onHoverEnter}
        >
          <MegaMenuPanel group={group} nav={nav} onNavigate={onClose} />
        </div>
      ) : null}
    </div>
  );
}

function DesktopNavItem({
  item,
  pathname,
  openGroup,
  onHoverEnterGroup,
  onHoverLeaveGroup,
  onCloseGroup,
  nav,
}: {
  item: HeaderNavItem;
  pathname: string;
  openGroup: string | null;
  onHoverEnterGroup: (label: string) => void;
  onHoverLeaveGroup: () => void;
  onCloseGroup: () => void;
  nav: LocaleMessages["navigation"];
}) {
  const active = isItemActive(pathname, item);

  if (!isHeaderNavGroup(item)) {
    return (
      <Link
        href={item.href}
        className={navTriggerClass(active)}
        aria-current={active ? "page" : undefined}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <DesktopNavGroup
      group={item}
      pathname={pathname}
      isOpen={openGroup === item.label}
      onHoverEnter={() => onHoverEnterGroup(item.label)}
      onHoverLeave={onHoverLeaveGroup}
      onClose={onCloseGroup}
      nav={nav}
    />
  );
}

function MobileNavGroup({
  group,
  pathname,
  expanded,
  onToggle,
  onNavigate,
  nav,
}: {
  group: HeaderNavGroup;
  pathname: string;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  nav: LocaleMessages["navigation"];
}) {
  const panelId = `site-nav-${navItemSlug(group.label)}-mobile-panel`;
  const active = isItemActive(pathname, group);
  const overviewLabel = formatMessage(nav.overviewLink, { label: group.label });
  const toggleLabel = expanded
    ? formatMessage(nav.closeSubmenu, { label: group.label })
    : formatMessage(nav.openSubmenu, { label: group.label });

  return (
    <li className="overflow-hidden rounded-ds-md border border-border/50 bg-surface/50">
      <button
        type="button"
        className={cn(
          "flex min-h-12 w-full items-center justify-between px-4 text-base font-semibold touch-manipulation transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric-blue/40",
          active ? "text-foreground" : "text-foreground hover:bg-surface",
        )}
        aria-expanded={expanded}
        aria-controls={panelId}
        aria-label={toggleLabel}
        onClick={onToggle}
      >
        <span aria-hidden="true">{group.label}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
            expanded && "rotate-180",
          )}
        />
      </button>
      {expanded ? (
        <div id={panelId} className="space-y-1 border-t border-border/50 px-3 py-3">
          {group.description ? (
            <p className="px-2 pb-2 text-sm leading-relaxed text-muted">
              {group.description}
            </p>
          ) : null}
          <Link
            href={group.href}
            className="flex min-h-11 items-center rounded-ds-md px-2 text-sm font-semibold text-primary hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/40"
            onClick={onNavigate}
          >
            {overviewLabel} →
          </Link>
          {group.featured.map((link) => {
            const linkActive = pathMatches(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex min-h-11 flex-col justify-center rounded-ds-md px-2 py-2 touch-manipulation transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/40",
                  linkActive
                    ? "bg-primary/8 font-medium text-foreground"
                    : "text-foreground hover:bg-surface",
                )}
                aria-current={linkActive ? "page" : undefined}
                onClick={onNavigate}
              >
                <span className="text-sm font-medium">{link.label}</span>
                {link.description ? (
                  <span className="mt-0.5 text-xs leading-snug text-muted line-clamp-2">
                    {link.description}
                  </span>
                ) : null}
              </Link>
            );
          })}
          {group.more && group.more.length > 0 ? (
            <div className="border-t border-border/50 pt-2">
              <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted">
                {nav.more}
              </p>
              {group.more.map((link) => {
                const linkActive = pathMatches(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex min-h-11 items-center rounded-ds-md px-2 text-sm touch-manipulation transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/40",
                      linkActive
                        ? "font-medium text-foreground"
                        : "text-muted hover:bg-surface hover:text-foreground",
                    )}
                    aria-current={linkActive ? "page" : undefined}
                    onClick={onNavigate}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          ) : null}
          {group.legal && group.legal.length > 0 ? (
            <div className="border-t border-border/50 pt-2">
              <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted">
                {nav.legal}
              </p>
              {group.legal.map((link) => {
                const linkActive = pathMatches(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex min-h-11 items-center rounded-ds-md px-2 text-sm touch-manipulation transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/40",
                      linkActive
                        ? "font-medium text-foreground"
                        : "text-muted hover:bg-surface hover:text-foreground",
                    )}
                    aria-current={linkActive ? "page" : undefined}
                    onClick={onNavigate}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
      ) : null}
    </li>
  );
}

type HeaderProps = {
  /** Server-rendered brand lockup — keeps Logo markup identical on SSR and hydration. */
  brand: ReactNode;
};

export function Header({ brand }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [menuSession, setMenuSession] = useState<{
    open: boolean;
    atPath: string;
    expanded: string | null;
  } | null>(null);
  const [desktopMenuSession, setDesktopMenuSession] = useState<{
    label: string;
    atPath: string;
  } | null>(null);
  const desktopMenuCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const pathname = usePathname();
  const { messages } = useLocale();
  const nav = messages.navigation;
  const { cta, contact, items } = headerNavigation;
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  const menuOpen =
    menuSession?.open === true && menuSession.atPath === pathname;
  const expandedGroup = menuOpen ? (menuSession?.expanded ?? null) : null;
  const openDesktopMenu =
    desktopMenuSession?.atPath === pathname ? desktopMenuSession.label : null;

  const clearDesktopMenuCloseTimer = useCallback(() => {
    if (desktopMenuCloseTimerRef.current) {
      clearTimeout(desktopMenuCloseTimerRef.current);
      desktopMenuCloseTimerRef.current = null;
    }
  }, []);

  const closeDesktopMenu = useCallback(() => {
    clearDesktopMenuCloseTimer();
    setDesktopMenuSession(null);
  }, [clearDesktopMenuCloseTimer]);

  const openDesktopMenuGroup = useCallback(
    (label: string) => {
      clearDesktopMenuCloseTimer();
      setDesktopMenuSession({ label, atPath: pathname });
    },
    [clearDesktopMenuCloseTimer, pathname],
  );

  const scheduleDesktopMenuClose = useCallback(() => {
    clearDesktopMenuCloseTimer();
    desktopMenuCloseTimerRef.current = setTimeout(() => {
      setDesktopMenuSession(null);
    }, DESKTOP_MENU_HOVER_CLOSE_MS);
  }, [clearDesktopMenuCloseTimer]);

  useEffect(() => () => clearDesktopMenuCloseTimer(), [clearDesktopMenuCloseTimer]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const syncHeaderOffset = () => {
      const height = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--site-header-offset", `${height}px`);
    };

    syncHeaderOffset();
    const observer = new ResizeObserver(syncHeaderOffset);
    observer.observe(header);
    window.addEventListener("resize", syncHeaderOffset, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncHeaderOffset);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuSession(null);
        mobileMenuButtonRef.current?.focus();
      }

      if (event.key === "Tab" && mobileNavRef.current) {
        const focusable = mobileNavRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    focusFirstFocusable(mobileNavRef.current);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  function closeMobileMenu() {
    setMenuSession(null);
    mobileMenuButtonRef.current?.focus();
  }

  function toggleMobileMenu() {
    if (menuOpen) {
      closeMobileMenu();
      return;
    }
    setMenuSession({ open: true, atPath: pathname, expanded: null });
  }

  const contactActive = pathMatches(pathname, contact.href);
  const desktopMegaMenuOpen = openDesktopMenu !== null;

  return (
    <header
      ref={headerRef}
      className={cn(
        "site-header sticky top-0 isolate z-[100] border-b border-glass-border/80 bg-glass/85 pt-[env(safe-area-inset-top)] shadow-soft perf-mobile-solid-blur backdrop-blur-xl supports-[backdrop-filter]:bg-glass-strong/80",
        desktopMegaMenuOpen &&
          "border-b-border/60 bg-surface/98 supports-[backdrop-filter]:bg-surface/98",
      )}
    >
      {desktopMegaMenuOpen ? (
        <button
          type="button"
          className={megaMenuScrimClass}
          aria-label={nav.closeMenuOverlay}
          onClick={closeDesktopMenu}
        />
      ) : null}
      <div className="relative z-[101] mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-4 py-2.5 sm:px-6 sm:py-3 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        {brand}

        <nav
          className="site-header-nav relative hidden items-center justify-center gap-0.5 lg:flex xl:gap-1"
          aria-label={nav.main}
        >
          {items.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              pathname={pathname}
              openGroup={openDesktopMenu}
              onHoverEnterGroup={openDesktopMenuGroup}
              onHoverLeaveGroup={scheduleDesktopMenuClose}
              onCloseGroup={closeDesktopMenu}
              nav={nav}
            />
          ))}
        </nav>

        <div className="site-header-actions hidden items-center justify-end gap-2 lg:flex">
          <LanguageSwitcher id="site-language-desktop" />
          <Link
            href={contact.href}
            className={cn(
              "inline-flex min-h-11 items-center rounded-ds-full px-3.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/35 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent",
              contactActive
                ? "font-semibold text-foreground"
                : "text-muted hover:text-foreground",
            )}
            aria-current={contactActive ? "page" : undefined}
          >
            {contact.label}
          </Link>
          <Button
            href={cta.href}
            variant="gradient"
            size="sm"
            className="focus-visible:ring-offset-1 focus-visible:ring-offset-transparent"
          >
            {cta.label}
          </Button>
        </div>

        <div className="flex items-center justify-end gap-2 lg:hidden">
          <LanguageSwitcher
            id="site-language-mobile"
            className="max-w-[5.5rem] sm:max-w-[6.5rem]"
          />
          <button
            ref={mobileMenuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-ds-md text-foreground transition-colors hover:bg-surface/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/40"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-midnight/25 backdrop-blur-[2px] lg:hidden"
            aria-label={nav.closeMenuOverlay}
            onClick={closeMobileMenu}
          />
          <nav
            ref={mobileNavRef}
            id="mobile-nav"
            className="fixed inset-x-0 top-[var(--site-header-offset)] z-40 max-h-[calc(100dvh-var(--site-header-offset))] overflow-y-auto overscroll-contain border-t border-border/60 bg-glass-strong/98 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-floating perf-mobile-solid-blur backdrop-blur-xl lg:hidden"
            aria-label={nav.mobile}
            aria-modal="true"
            role="dialog"
          >
            <ul className="flex flex-col gap-3">
              {items.map((item) =>
                isHeaderNavGroup(item) ? (
                  <MobileNavGroup
                    key={item.label}
                    group={item}
                    pathname={pathname}
                    expanded={expandedGroup === item.label}
                    onToggle={() =>
                      setMenuSession((current) => {
                        if (!current || current.atPath !== pathname) {
                          return { open: true, atPath: pathname, expanded: item.label };
                        }
                        return {
                          ...current,
                          expanded:
                            current.expanded === item.label ? null : item.label,
                        };
                      })
                    }
                    onNavigate={closeMobileMenu}
                    nav={nav}
                  />
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex min-h-12 items-center rounded-ds-md border border-border/50 px-4 text-base font-semibold touch-manipulation transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/40",
                        pathMatches(pathname, item.href)
                          ? "bg-primary/8 text-foreground"
                          : "bg-surface/50 text-foreground hover:bg-surface",
                      )}
                      aria-current={pathMatches(pathname, item.href) ? "page" : undefined}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>

            <div className="mobile-cta-stack mt-5 space-y-3 border-t border-border/60 pt-5">
              <Button
                href={contact.href}
                variant="outline"
                size="lg"
                className="w-full"
                onClick={closeMobileMenu}
              >
                {contact.label}
              </Button>
              <Button
                href={cta.href}
                variant="gradient"
                size="lg"
                className="w-full"
                onClick={closeMobileMenu}
              >
                {cta.label}
              </Button>
            </div>
          </nav>
        </>
      ) : null}
    </header>
  );
}
