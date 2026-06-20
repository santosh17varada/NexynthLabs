import Link from "next/link";
import { ProductCard, ProductCatalogCard } from "@/components/cards/ProductCard";
import { PageSection } from "@/components/layout/PageSection";
import { ProductDetailSection } from "@/components/products/ProductDetailSection";
import { VisualStorySection } from "@/components/visual-story";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { innerLinkClass } from "@/components/ui/variants";
import {
  getFlagshipProduct,
  getLiveProducts,
  getPrimaryCtaLabel,
  productsPageCopy,
} from "@/config/products";
import { productsBuildTimeline } from "@/config/visual-story";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildProductsPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("products");

export default function ProductsPage() {
  const flagship = getFlagshipProduct();
  const liveProducts = getLiveProducts();
  const otherProducts = liveProducts.filter((p) => !p.isFlagship);

  return (
    <>
      <JsonLd data={buildProductsPageJsonLd()} />
      <MarketingHero
        eyebrow={productsPageCopy.hero.eyebrow}
        title={productsPageCopy.hero.title}
        description={productsPageCopy.hero.description}
        variant="dark"
      />

      <PageSection>
        <SectionHeading
          eyebrow="Flagship"
          title={flagship.name}
          description={productsPageCopy.catalogIntro}
        />
        <div className="mt-10">
          <ProductCatalogCard product={flagship} />
        </div>
      </PageSection>

      <PageSection variant="surface">
        <ProductDetailSection product={flagship} variant="compact" />
      </PageSection>

      <VisualStorySection story={productsBuildTimeline} variant="muted" />

      {otherProducts.length > 0 ? (
        <PageSection>
          <SectionHeading
            eyebrow="Catalog"
            title="More products coming"
            description="New launches appear here as they ship."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {otherProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </PageSection>
      ) : null}

      <PageSection variant="muted" containerClassName="py-10 sm:py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted">
            {siteConfig.brandName} product catalog · {liveProducts.length} live
            product{liveProducts.length === 1 ? "" : "s"} · See the full{" "}
            <Link href="/products/ecosystem" className={innerLinkClass}>
              product ecosystem
            </Link>{" "}
            for planned and in-progress platforms.
          </p>
        </div>
      </PageSection>

      <CtaBanner
        title={`Use ${flagship.name} today`}
        description="Book on getpandit.com or talk to us about partnerships."
        primaryLabel={getPrimaryCtaLabel(flagship)}
        primaryHref={flagship.href}
        primaryExternal
        secondaryLabel="Contact Nexynth Labs"
        secondaryHref="/contact"
      />
    </>
  );
}
