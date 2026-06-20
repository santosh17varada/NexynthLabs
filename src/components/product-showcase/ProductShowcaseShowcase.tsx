import Link from "next/link";
import {
  aiShowcaseDefinition,
  getPanditShowcaseDefinition,
  productShowcaseCopy,
} from "@/config/product-showcase";
import { ProductFeatureSection } from "@/components/product-showcase/ProductFeatureSection";
import { ProductShowcaseGallery } from "@/components/product-showcase/ProductShowcaseGallery";
import { ProductShowcaseSection } from "@/components/product-showcase/ProductShowcaseSection";
import { FeatureWalkthrough } from "@/components/product-showcase/ProductFeatureSection";

export function ProductShowcaseShowcase() {
  const getPandit = getPanditShowcaseDefinition;
  const ai = aiShowcaseDefinition;

  return (
    <div className="space-y-16">
      <div>
        <p className="text-eyebrow text-electric-blue">GetPandit · flagship section</p>
        <div className="mt-4">
          <ProductShowcaseSection definition={getPandit} showSectionHeading={false} />
        </div>
      </div>

      {getPandit.features && getPandit.features.length > 0 ? (
        <div>
          <p className="text-eyebrow text-electric-blue">Feature sections</p>
          <div className="mt-4 space-y-0">
            <ProductFeatureSection
              productId={getPandit.productId}
              feature={getPandit.features[0]}
              variant="surface"
            />
          </div>
        </div>
      ) : null}

      {getPandit.walkthrough ? (
        <div>
          <p className="text-eyebrow text-electric-blue">Feature walkthrough</p>
          <div className="mt-4">
            <FeatureWalkthrough
              productId={getPandit.productId}
              eyebrow={getPandit.walkthrough.eyebrow}
              title={getPandit.walkthrough.title}
              description={getPandit.walkthrough.description}
              steps={getPandit.walkthrough.steps}
              embedded
            />
          </div>
        </div>
      ) : null}

      {getPandit.gallery ? (
        <div>
          <p className="text-eyebrow text-electric-blue">Gallery · screenshots & compare</p>
          <ProductShowcaseGallery
            productId={getPandit.productId}
            eyebrow={getPandit.gallery.eyebrow}
            title={getPandit.gallery.title}
            description={getPandit.gallery.description}
            items={getPandit.gallery.items}
            columns={2}
            embedded
          />
        </div>
      ) : null}

      {ai.gallery ? (
        <div>
          <p className="text-eyebrow text-electric-blue">AI product surfaces</p>
          <ProductShowcaseGallery
            productId={ai.productId}
            eyebrow={ai.gallery.eyebrow}
            title={ai.gallery.title}
            items={ai.gallery.items}
            columns={2}
            embedded
          />
        </div>
      ) : null}

      <pre className="overflow-x-auto rounded-ds-md border border-border/60 bg-surface px-4 py-3 font-mono text-xs text-muted">
        {productShowcaseCopy.framework.usage}
      </pre>

      <p className="text-sm text-muted">{productShowcaseCopy.framework.cmsNote}</p>

      <p className="text-sm text-muted">
        Live on{" "}
        <Link href="/getpandit" className="font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline">
          /getpandit
        </Link>{" "}
        or wire sections via{" "}
        <code className="rounded bg-surface px-1.5 py-0.5 text-xs">ProductShowcaseSection</code>.
      </p>
    </div>
  );
}
