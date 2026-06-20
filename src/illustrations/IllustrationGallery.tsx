"use client";

import { useState } from "react";
import { NexynthIllustration } from "@/illustrations/NexynthIllustration";
import { illustrationCatalog, illustrationFrameworkCopy } from "@/config/illustrations";
import type { IllustrationCategory, IllustrationTone, IllustrationVariant } from "@/illustrations/types";
import { cn } from "@/lib/cn";

type IllustrationGalleryProps = {
  className?: string;
  defaultTone?: IllustrationTone;
};

export function IllustrationGallery({
  className,
  defaultTone = "light",
}: IllustrationGalleryProps) {
  const [tone, setTone] = useState<IllustrationTone>(defaultTone);
  const [variant, setVariant] = useState<IllustrationVariant>("hero");

  return (
    <div className={cn("space-y-8", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex rounded-ds-full border border-border/70 bg-surface p-1">
          {(["light", "dark"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setTone(option)}
              className={cn(
                "rounded-ds-full px-3 py-1.5 text-xs font-semibold capitalize transition-colors",
                tone === option
                  ? "bg-gradient-brand text-on-dark"
                  : "text-muted hover:text-foreground",
              )}
              aria-pressed={tone === option}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="inline-flex rounded-ds-full border border-border/70 bg-surface p-1">
          {(["hero", "compact"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setVariant(option)}
              className={cn(
                "rounded-ds-full px-3 py-1.5 text-xs font-semibold capitalize transition-colors",
                variant === option
                  ? "bg-electric-blue/15 text-foreground"
                  : "text-muted hover:text-foreground",
              )}
              aria-pressed={variant === option}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "grid gap-6 md:grid-cols-2",
          tone === "dark" && "rounded-ds-xl border border-glass-border-dark bg-midnight p-4 sm:p-6",
        )}
      >
        {illustrationCatalog.map((item) => (
          <div key={item.category}>
            <p
              className={cn(
                "text-eyebrow",
                tone === "dark" ? "text-electric-cyan" : "text-electric-blue",
              )}
            >
              {item.title}
            </p>
            <p
              className={cn("mt-1 text-sm", tone === "dark" ? "text-on-dark-muted" : "text-muted")}
            >
              {item.description}
            </p>
            <div className="mt-4">
              <NexynthIllustration
                category={item.category as IllustrationCategory}
                variant={variant}
                tone={tone}
                framed
              />
            </div>
          </div>
        ))}
      </div>

      <pre className="overflow-x-auto rounded-ds-md border border-border/60 bg-surface px-4 py-3 font-mono text-xs text-muted">
        {illustrationFrameworkCopy.usage}
      </pre>
    </div>
  );
}
