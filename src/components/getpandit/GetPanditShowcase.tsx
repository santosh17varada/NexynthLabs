import { ProductShowcaseSection } from "@/components/product-showcase/ProductShowcaseSection";
import { getPanditShowcaseDefinition } from "@/config/product-showcase";
import { flagshipProductName } from "@/config/site-values";

type GetPanditShowcaseProps = {
  showSectionHeading?: boolean;
};

export function GetPanditShowcase({ showSectionHeading = true }: GetPanditShowcaseProps) {
  return (
    <ProductShowcaseSection
      definition={getPanditShowcaseDefinition}
      showSectionHeading={showSectionHeading}
      sectionTitle={`Flagship product: ${flagshipProductName}`}
    />
  );
}
