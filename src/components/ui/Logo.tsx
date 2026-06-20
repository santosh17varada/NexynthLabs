import Image from "next/image";
import Link from "next/link";
import { brandDescriptor, brandLogoMarkSrc, brandName } from "@/config/site-values";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  /** Premium lockup line beneath the wordmark — used in site header. */
  showDescriptor?: boolean;
  tone?: "light" | "dark";
};

export function Logo({
  className = "",
  showWordmark = true,
  showDescriptor = false,
  tone = "light",
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
        className="relative inline-flex shrink-0 items-center justify-center overflow-visible bg-transparent h-9 w-9 lg:h-10 lg:w-10"
        aria-hidden="true"
      >
        <Image
          src={brandLogoMarkSrc}
          alt=""
          width={80}
          height={80}
          sizes="(max-width: 1023px) 36px, 40px"
          className="h-full w-full object-contain"
          priority
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
