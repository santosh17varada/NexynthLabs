import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  turbopack: {
    root: projectRoot,
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/portfolio/:slug",
        destination: "/case-studies/:slug",
        permanent: true,
      },
      {
        source: "/rfp",
        destination: "/request-proposal",
        permanent: true,
      },
      {
        source: "/company/founder",
        destination: "/founder",
        permanent: true,
      },
      {
        source: "/company/vision",
        destination: "/vision",
        permanent: true,
      },
      {
        source: "/company/leadership",
        destination: "/leadership",
        permanent: true,
      },
      {
        source: "/press",
        destination: "/media-kit",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
