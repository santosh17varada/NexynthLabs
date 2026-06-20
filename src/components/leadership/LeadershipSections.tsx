import Link from "next/link";
import { LeadershipExecutiveCard } from "@/components/leadership/LeadershipExecutiveCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { leadershipPageCopy, getFeaturedLeadershipProfiles } from "@/config/leadership";

export function LeadershipTeamGridSection() {
  const { team } = leadershipPageCopy;
  const profiles = getFeaturedLeadershipProfiles();

  return (
    <section className="border-t border-border/60">
      <Container className="py-14 sm:py-16 lg:py-20">
        <SectionHeading eyebrow={team.eyebrow} title={team.title} description={team.description} />
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {profiles.map((profile) => (
            <LeadershipExecutiveCard key={profile.id} profile={profile} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function LeadershipGovernanceSection() {
  const { governance } = leadershipPageCopy;

  return (
    <section className="border-t border-border/60 bg-surface">
      <Container className="py-14 sm:py-16 lg:py-20">
        <SectionHeading eyebrow={governance.eyebrow} title={governance.title} />
        <div className="mt-8 max-w-3xl space-y-4">
          {governance.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function LeadershipSectionNav() {
  const items = [
    { label: "Overview", href: "/leadership" },
    ...getFeaturedLeadershipProfiles().map((profile) => ({
      label: profile.name.split(" ")[0],
      href: `/leadership/${profile.slug}`,
    })),
    { label: "Founder story", href: "/founder" },
    { label: "Vision", href: "/vision" },
  ];

  return (
    <nav
      aria-label="Leadership pages"
      className="flex flex-wrap justify-center gap-2 border-b border-border/60 bg-surface px-4 py-4 sm:gap-3"
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="inline-flex min-h-11 items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-electric-blue/30 hover:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
