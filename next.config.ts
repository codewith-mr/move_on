import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  /* 
   * Vercel supports Image Optimization by default.
   * We enable it for optimal performance.
   */
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // unoptimized: true, // Commented out to enable Vercel Image Optimization
  },
};

export default nextConfig;
