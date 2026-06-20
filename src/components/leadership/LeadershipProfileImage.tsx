import Image from "next/image";
import type { LeadershipProfile } from "@/types/leadership";

type LeadershipProfileImageProps = {
  profile: Pick<LeadershipProfile, "name" | "imagePath" | "imageAlt" | "title">;
  priority?: boolean;
  size?: "card" | "hero" | "compact";
  className?: string;
};

const sizeClasses = {
  card: "aspect-[4/5] w-full max-w-full",
  hero: "aspect-[4/5] w-full max-w-md lg:max-w-lg",
  compact: "aspect-square w-24 sm:w-28",
} as const;

function InitialsAvatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-primary/90 to-accent/80 text-white ${className}`}
      aria-hidden
    >
      <span className="text-2xl font-semibold tracking-tight sm:text-3xl">{initials}</span>
    </div>
  );
}

export function LeadershipProfileImage({
  profile,
  priority = false,
  size = "card",
  className = "",
}: LeadershipProfileImageProps) {
  const frameClass = `${sizeClasses[size]} relative overflow-hidden rounded-ds-lg border border-border/60 bg-surface shadow-lg ${className}`;

  if (!profile.imagePath) {
    return (
      <InitialsAvatar
        name={profile.name}
        className={`${frameClass} ${size === "compact" ? "rounded-xl" : ""}`}
      />
    );
  }

  return (
    <div className={frameClass}>
      <Image
        src={profile.imagePath}
        alt={profile.imageAlt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes={
          size === "compact"
            ? "112px"
            : size === "hero"
              ? "(max-width: 1024px) 100vw, 512px"
              : "(max-width: 768px) 280px, 320px"
        }
        className="object-cover object-top"
      />
    </div>
  );
}
