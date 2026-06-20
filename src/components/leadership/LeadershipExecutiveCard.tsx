import Link from "next/link";
import { LeadershipProfileImage } from "@/components/leadership/LeadershipProfileImage";
import { Card } from "@/components/ui/Card";
import { getLeadershipProfilePath } from "@/config/leadership";
import type { LeadershipProfile } from "@/types/leadership";

export function LeadershipExecutiveCard({ profile }: { profile: LeadershipProfile }) {
  const href = getLeadershipProfilePath(profile.slug);

  return (
    <Card
      as="article"
      className="group flex h-full flex-col overflow-hidden p-0 transition-shadow hover:shadow-elevated"
    >
      <div className="flex flex-col items-center bg-gradient-to-b from-surface to-background px-6 pb-6 pt-8 sm:px-8">
        <LeadershipProfileImage profile={profile} size="card" />
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {profile.name}
          </h3>
          <p className="mt-2 text-sm font-medium text-electric-violet">{profile.title}</p>
          {profile.subtitle && (
            <p className="mt-3 text-sm leading-relaxed text-muted">{profile.subtitle}</p>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col border-t border-border/60 px-6 py-5 sm:px-8">
        <p className="flex-1 text-sm leading-relaxed text-muted">{profile.excerpt}</p>
        <Link
          href={href}
          className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
        >
          View profile →
        </Link>
      </div>
    </Card>
  );
}
