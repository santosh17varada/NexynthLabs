import { ImageResponse } from "next/og";
import { ogShareCopy } from "@/config/og-share";

export const runtime = "edge";
export const alt = ogShareCopy.alt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px",
          background: "linear-gradient(135deg, #0f1b2d 0%, #1e3a5f 55%, #2a4a73 100%)",
          color: "#f8f7f4",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            color: "#b8891f",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {ogShareCopy.brandLabel}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: "980px",
            }}
          >
            {ogShareCopy.headline}
          </div>
          <div style={{ fontSize: 26, color: "rgba(248, 247, 244, 0.85)" }}>
            {ogShareCopy.subline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
