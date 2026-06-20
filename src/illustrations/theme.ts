import type { IllustrationTheme, IllustrationTone } from "@/illustrations/types";

const lightTheme: IllustrationTheme = {
  bg: "transparent",
  grid: "rgba(30, 58, 95, 0.05)",
  nodeFill: "#ffffff",
  nodeStroke: "#d9dde4",
  nodeAccentFill: "rgba(59, 130, 246, 0.1)",
  nodeAccentStroke: "rgba(59, 130, 246, 0.42)",
  text: "#0f1b2d",
  textMuted: "#5b6472",
  line: "#c5ccd6",
  accent: "#3b82f6",
  accentSecondary: "#8b5cf6",
  glow: "rgba(139, 92, 246, 0.18)",
};

const darkTheme: IllustrationTheme = {
  bg: "transparent",
  grid: "rgba(255, 255, 255, 0.05)",
  nodeFill: "rgba(15, 27, 45, 0.72)",
  nodeStroke: "rgba(255, 255, 255, 0.14)",
  nodeAccentFill: "rgba(59, 130, 246, 0.16)",
  nodeAccentStroke: "rgba(6, 182, 212, 0.42)",
  text: "#f8f7f4",
  textMuted: "#a8b4c4",
  line: "rgba(255, 255, 255, 0.22)",
  accent: "#06b6d4",
  accentSecondary: "#8b5cf6",
  glow: "rgba(59, 130, 246, 0.22)",
};

export function getIllustrationTheme(tone: IllustrationTone): IllustrationTheme {
  return tone === "dark" ? darkTheme : lightTheme;
}
