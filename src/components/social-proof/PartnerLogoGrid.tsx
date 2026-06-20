import Link from "next/link";
import Image from "next/image";
import { ApprovalBadge } from "@/components/social-proof/ApprovalBadge";
import type { LogoEntry, SocialProofTone } from "@/types/social-proof";
import { cn } from "@/lib/cn";

type PartnerLogoGridProps = {
  logos: readonly LogoEntry[];
  tone?: SocialProofTone;
  columns?: 2 | 3 | 4;
  className?: string;
};

export function PartnerLogoGrid({
  logos,
  tone = "light",
  columns = 4,
  className,
}: PartnerLogoGridProps) {
  const isDark = tone === "dark";
  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <ul
      className={cn("grid grid-cols-1 gap-3", colClass, className)}
      aria-label="Partner logos"
    >
      {logos.map((logo) => (
        <li key={logo.id}>
          <PartnerLogoTile logo={logo} isDark={isDark} />
        </li>
      ))}
    </ul>
  );
}

function PartnerLogoTile({
  logo,
  isDark,
}: {
  logo: LogoEntry;
  isDark: boolean;
}) {
  const content = (
    <div
      className={cn(
        "group flex h-full min-h-[88px] flex-col items-center justify-center gap-2 rounded-ds-lg border px-4 py-5 text-center transition-all duration-200",
        isDark
          ? "border-glass-border-dark bg-glass-dark/40 hover:border-electric-cyan/30 hover:bg-glass-dark/60"
          : "border-border/60 bg-surface/80 shadow-soft hover:-translate-y-0.5 hover:border-electric-blue/25 hover:shadow-elevated",
      )}
    >
      {logo.image && logo.status === "approved" ? (
        <div className="relative h-8 w-28">
          <Image
            src={logo.image.src}
            alt={logo.image.alt}
            fill
            unoptimized
            className="object-contain object-center"
            sizes="112px"
          />
        </div>
      ) : (
        <span
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-ds-md border text-sm font-bold tracking-tight",
            isDark
              ? "border-electric-cyan/25 bg-electric-blue/10 text-electric-cyan"
              : "border-electric-blue/20 bg-electric-violet/10 text-foreground",
          )}
          aria-hidden={logo.status === "approved"}
        >
          {logo.monogram ?? logo.name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span
        className={cn(
          "text-sm font-semibold",
          isDark ? "text-on-dark" : "text-foreground",
        )}
      >
        {logo.name}
      </span>
      {logo.status === "placeholder" ? (
        <ApprovalBadge status={logo.status} className="scale-90" />
      ) : null}
    </div>
  );

  if (logo.href) {
    const linkProps = logo.external
      ? { target: "_blank" as const, rel: "noopener noreferrer" as const }
      : {};

    return (
      <Link href={logo.href} className="block h-full" {...linkProps}>
        {content}
      </Link>
    );
  }

  return content;
}
