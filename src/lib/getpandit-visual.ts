export type GetPanditMockupVariant = "overview" | "flow";

export function isGetPanditPortfolioImage(src: string): boolean {
  return src.includes("/portfolio/getpandit-");
}

export function getPanditMockupVariant(src: string): GetPanditMockupVariant {
  return src.includes("flow") ? "flow" : "overview";
}
