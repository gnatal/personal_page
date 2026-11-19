import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes plain HTML/CSS to /out.
  // Vercel serves it from its CDN; it also works on any static host.
  output: "export",
};

export default nextConfig;
