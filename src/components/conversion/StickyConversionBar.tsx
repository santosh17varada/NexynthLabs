"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  resolveStickyConversionVariant,
  stickyConversionVariants,
  type StickyConversionVariant,
} from "@/config/conversion";
import { cn } from "@/lib/cn";

type StickyConversionBarProps = {
  variant: StickyConversionVariant;
};

export function StickyConversionBar({ variant }: StickyConversionBarProps) {
  const config = stickyConversionVariants[variant];
  const [scrolled, setScrolled] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 480);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNearFooter(Boolean(entry?.isIntersecting));
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visible = scrolled && !nearFooter;

  return (
    <div
      role="region"
      aria-label="Page actions"
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/98 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-elevated perf-mobile-solid-blur backdrop-blur-md transition-transform duration-300 motion-reduce:transition-none",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <Container className="pointer-events-auto">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {config.message ? (
            <p className="hidden max-w-md text-sm text-muted md:block">{config.message}</p>
          ) : (
            <span className="hidden md:block" />
          )}
          <div className="mobile-cta-stack flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:justify-end">
            <Button
              href={config.primary.href}
              external={config.primary.external}
              variant="gradient"
              size="md"
              className="w-full sm:w-auto"
            >
              {config.primary.label}
            </Button>
            <Button
              href={config.secondary.href}
              external={config.secondary.external}
              variant="outline"
              size="md"
              className="w-full sm:w-auto"
            >
              {config.secondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export function PageConversionLayer() {
  const pathname = usePathname();
  const variant = resolveStickyConversionVariant(pathname);

  useEffect(() => {
    if (!variant) return;
    document.body.classList.add("has-sticky-conversion");
    return () => document.body.classList.remove("has-sticky-conversion");
  }, [variant]);

  if (!variant) {
    return null;
  }

  return <StickyConversionBar variant={variant} />;
}
