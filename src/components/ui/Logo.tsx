import Link from "next/link";
import { brandDescriptor, brandLogoMarkSrc, brandName } from "@/config/site-values";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  /** Premium lockup line beneath the wordmark — used in site header. */
  showDescriptor?: boolean;
  tone?: "light" | "dark";
  /** Hint LCP fetch for header lockup — static markup only, no client branching. */
  priority?: boolean;
};

export function Logo({
  className = "",
  showWordmark = true,
  showDescriptor = false,
  tone = "light",
  priority = false,
}: LogoProps) {
  const wordmarkToneClass = tone === "dark" ? "text-on-dark" : "text-foreground";
  const descriptorToneClass = tone === "dark" ? "text-on-dark-muted" : "text-muted";

  return (
    <Link
      href="/"
      className={cn(
        "group/logo inline-flex min-w-0 items-center gap-3 transition-opacity hover:opacity-90",
        className,
      )}
      aria-label={
        showDescriptor
          ? `${brandName}, ${brandDescriptor}`
          : `${brandName} home`
      }
    >
      <span
        className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-visible bg-transparent lg:h-10 lg:w-10"
        aria-hidden="true"
      >
        {/* Native img keeps SSR/client markup identical inside client Header boundaries. */}
        {/* eslint-disable-next-line @next/next/no-img-element -- static brand mark; avoids Image srcSet hydration drift */}
        <img
          src={brandLogoMarkSrc}
          alt=""
          width={40}
          height={40}
          decoding="async"
          fetchPriority={priority ? "high" : undefined}
          className="h-full w-full object-contain"
        />
      </span>
      {showWordmark ? (
        <span className="flex min-w-0 flex-col justify-center gap-0.5 leading-none">
          <span
            className={cn(
              "truncate text-[1.05rem] font-semibold tracking-[-0.02em] sm:text-lg",
              wordmarkToneClass,
            )}
          >
            {brandName}
          </span>
          {showDescriptor ? (
            <span
              className={cn(
                "hidden truncate text-[11px] font-medium leading-tight tracking-normal",
                "min-[400px]:block sm:text-xs",
                descriptorToneClass,
              )}
            >
              {brandDescriptor}
            </span>
          ) : null}
        </span>
      ) : null}
    </Link>
  );
}
