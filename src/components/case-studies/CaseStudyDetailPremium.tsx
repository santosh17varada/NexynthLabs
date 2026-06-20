import { Button } from "@/components/ui/Button";
import { CaseStudyImageGallery } from "@/components/case-studies/CaseStudyImage";
import { CaseStudyMetaBar } from "@/components/case-studies/CaseStudyMetaBar";
import { CaseStudyMetrics } from "@/components/case-studies/CaseStudyMetrics";
import { CaseStudyNarrative } from "@/components/case-studies/CaseStudyNarrative";
import { CaseStudyQuoteBlock } from "@/components/case-studies/CaseStudyQuote";
import { CaseStudyStoryRail } from "@/components/case-studies/CaseStudiesHeroVisual";
import { caseStudiesPageCopy } from "@/config/case-studies-page";
import {
  getCaseStudyMetrics,
  getCaseStudyNarrative,
} from "@/lib/case-studies";
import type { CaseStudy } from "@/types/portfolio";

type CaseStudyDetailPremiumProps = {
  study: CaseStudy;
};

export function CaseStudyDetailPremium({ study }: CaseStudyDetailPremiumProps) {
  const narrative = getCaseStudyNarrative(study);
  const metrics = getCaseStudyMetrics(study);
  const { metaLabels } = caseStudiesPageCopy;

  return (
    <article className="space-y-12 sm:space-y-16">
      <CaseStudyImageGallery images={study.images} />
      <CaseStudyMetaBar study={study} />
      <CaseStudyStoryRail />

      {study.quote ? (
        <CaseStudyQuoteBlock quote={study.quote} />
      ) : null}

      <CaseStudyNarrative narrative={narrative} />

      <section>
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          {metaLabels.technologies}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {study.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border/70 bg-surface px-3 py-1.5 text-sm text-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {metrics.length > 0 ? <CaseStudyMetrics metrics={metrics} /> : null}

      <div className="mobile-cta-stack flex flex-col gap-3 border-t border-border/60 pt-8 md:flex-row">
        <Button
          href={study.cta.primary.href}
          external={study.cta.primary.external}
          variant="gradient"
          size="lg"
          className="w-full sm:w-auto"
        >
          {study.cta.primary.label}
        </Button>
        {study.cta.secondary ? (
          <Button
            href={study.cta.secondary.href}
            external={study.cta.secondary.external}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            {study.cta.secondary.label}
          </Button>
        ) : null}
      </div>
    </article>
  );
}

/** @deprecated Use CaseStudyDetailPremium — thin alias for gradual migration. */
export function CaseStudyDetail({ study }: CaseStudyDetailPremiumProps) {
  return <CaseStudyDetailPremium study={study} />;
}
