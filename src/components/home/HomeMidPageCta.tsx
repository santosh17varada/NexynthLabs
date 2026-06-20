import { ConversionMidBand } from "@/components/conversion";
import { homeConversionCopy } from "@/config/conversion";

export function HomeMidPageCta() {
  const copy = homeConversionCopy.midPage;

  return (
    <ConversionMidBand
      id="mid-cta"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      primary={copy.primary}
      secondary={copy.secondary}
    />
  );
}
