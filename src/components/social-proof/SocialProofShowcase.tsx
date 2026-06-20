import Link from "next/link";
import { ApprovedCustomerQuotes } from "@/components/social-proof/ApprovedCustomerQuotes";
import { CaseStudyHighlightCard } from "@/components/social-proof/CaseStudyHighlight";
import { CustomerQuote } from "@/components/social-proof/CustomerQuote";
import { PartnerLogoGrid } from "@/components/social-proof/PartnerLogoGrid";
import { ProductSuccessMetrics } from "@/components/social-proof/ProductSuccessMetrics";
import { ProductTrustIndicators } from "@/components/social-proof/ProductTrustIndicators";
import { ReviewCard } from "@/components/social-proof/ReviewCard";
import { SocialProofDisclaimer } from "@/components/social-proof/SocialProofDisclaimer";
import { TechnologyTrustBadges } from "@/components/social-proof/TechnologyTrustBadges";
import { TrustIndicatorGrid } from "@/components/social-proof/TrustIndicatorGrid";
import { getCaseStudyBySlug } from "@/config/portfolio";
import { socialProofCopy } from "@/config/social-proof";
import {
  getFeaturedCaseStudyHighlight,
  getPublicPartnerLogos,
  getPublicTechnologyLogos,
  trustIndicators,
} from "@/config/social-proof";
import { hasApprovedTestimonials } from "@/config/testimonials";

export function SocialProofShowcase() {
  const caseHighlight = getFeaturedCaseStudyHighlight();
  const getPanditStudy = getCaseStudyBySlug("getpandit");
  const metrics = getPanditStudy?.metrics ?? [];
  const hasQuotes = hasApprovedTestimonials();

  return (
    <div className="space-y-12">
      <div>
        <p className="text-eyebrow text-electric-blue">Approved customer quotes</p>
        {hasQuotes ? (
          <div className="mt-4">
            <ApprovedCustomerQuotes limit={2} columns={2} />
          </div>
        ) : (
          <p className="mt-4 rounded-ds-md border border-border/60 bg-surface px-4 py-3 text-sm text-muted">
            No approved quotes on the public site. Placeholder entries in config are hidden — add
            entries with <code className="rounded bg-background px-1 py-0.5 text-xs">status: &quot;approved&quot;</code>{" "}
            after written permission.
          </p>
        )}
      </div>

      <div>
        <p className="text-eyebrow text-electric-blue">Component demo — pull quote layout</p>
        <p className="mt-1 text-xs text-muted">
          Layout preview only. Do not use fabricated attribution on public pages.
        </p>
        <div className="mt-4">
          <CustomerQuote
            quote={{
              text: "Component layout preview — replace with an approved quote before publishing.",
              attribution: "Layout preview",
              role: "Design system",
              company: "Internal only",
              status: "draft",
            }}
            variant="pullquote"
          />
        </div>
      </div>

      <div>
        <p className="text-eyebrow text-electric-blue">Component demo — review card layout</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <ReviewCard
            review={{
              headline: "Layout preview",
              qualitativeLabel: "Draft",
              text: "Review card layout — qualitative labels only, never fabricated numeric scores.",
              attribution: "Layout preview",
              role: "Design system",
              company: "Internal only",
              status: "draft",
              category: "engineering",
            }}
          />
        </div>
      </div>

      <div>
        <p className="text-eyebrow text-electric-blue">Partner logos (approved only)</p>
        <PartnerLogoGrid
          logos={getPublicPartnerLogos().filter((logo) => logo.status === "approved")}
          className="mt-4"
          columns={4}
        />
        <SocialProofDisclaimer kind="partnerLogo" className="mt-4" />
      </div>

      <div>
        <p className="text-eyebrow text-electric-blue">Technology trust badges</p>
        <TechnologyTrustBadges
          items={getPublicTechnologyLogos().slice(0, 8)}
          className="mt-4"
        />
        <SocialProofDisclaimer kind="technology" className="mt-4" />
      </div>

      <div>
        <p className="text-eyebrow text-electric-blue">Trust indicators</p>
        <TrustIndicatorGrid indicators={trustIndicators.slice(0, 4)} className="mt-4" columns={4} />
        <SocialProofDisclaimer kind="trust" className="mt-4" />
      </div>

      <div>
        <p className="text-eyebrow text-electric-blue">Product trust indicators</p>
        <ProductTrustIndicators productSlug="getpandit" className="mt-4" showDisclaimer={false} />
      </div>

      {metrics.length > 0 ? (
        <div>
          <p className="text-eyebrow text-electric-blue">Product success metrics</p>
          <ProductSuccessMetrics
            metrics={metrics.slice(0, 3)}
            showHeading={false}
            className="mt-4"
          />
        </div>
      ) : null}

      {caseHighlight ? (
        <div>
          <p className="text-eyebrow text-electric-blue">Case study highlights</p>
          <CaseStudyHighlightCard highlight={caseHighlight} className="mt-4" />
          <SocialProofDisclaimer kind="caseStudy" className="mt-4" />
        </div>
      ) : null}

      <pre className="overflow-x-auto rounded-ds-md border border-border/60 bg-surface px-4 py-3 font-mono text-xs text-muted">
        {socialProofCopy.framework.usage}
      </pre>

      <p className="text-sm text-muted">
        Import from{" "}
        <Link href="/testimonials" className="font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline">
          /testimonials
        </Link>{" "}
        or compose blocks via{" "}
        <code className="rounded bg-surface px-1.5 py-0.5 text-xs">SocialProofBlock</code>.
      </p>
    </div>
  );
}
