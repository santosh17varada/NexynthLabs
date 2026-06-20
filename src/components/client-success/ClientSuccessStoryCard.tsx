import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { clientSuccessPageCopy } from "@/config/client-success";
import type { ClientSuccessStory } from "@/types/client-success";

export function ClientSuccessStoryCard({ story }: { story: ClientSuccessStory }) {
  const { sectionLabels } = clientSuccessPageCopy;

  return (
    <article id={story.id} className="scroll-mt-24">
      <Card className="p-5 sm:p-8">
      <p className="text-eyebrow font-semibold text-electric-blue">
        {story.segment}
      </p>
      <h2 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
        {story.title}
      </h2>

      <div className="mt-8 space-y-8">
        <section>
          <h3 className="text-eyebrow font-semibold text-foreground">
            {sectionLabels.problem}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {story.problem}
          </p>
        </section>

        <section>
          <h3 className="text-eyebrow font-semibold text-foreground">
            {sectionLabels.approach}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {story.approach}
          </p>
        </section>

        <section>
          <h3 className="text-eyebrow font-semibold text-foreground">
            {sectionLabels.solution}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {story.solution}
          </p>
        </section>

        <section>
          <h3 className="text-eyebrow font-semibold text-foreground">
            {sectionLabels.outcome}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {story.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5 text-sm text-muted sm:text-base">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
                  aria-hidden="true"
                />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-eyebrow font-semibold text-foreground">
            {sectionLabels.technologies}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {story.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border/70 bg-surface px-3 py-1.5 text-xs text-foreground sm:text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {story.cta && (
        <div className="mt-8 border-t border-border/60 pt-6">
          <Link
            href={story.cta.href}
            className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
          >
            {story.cta.label} →
          </Link>
        </div>
      )}
      </Card>
    </article>
  );
}
