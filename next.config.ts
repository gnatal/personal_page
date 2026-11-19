import path from "node:path";
import type { NextConfig } from "next";

// Which look to build. Set SITE_THEME in .env (or in Vercel's environment
// variables). It is read once at build/dev-server start: only the chosen
// theme's components, CSS and fonts end up in the site.
const THEMES = ["persona5", "gta6"] as const;
const theme = process.env.SITE_THEME?.trim() || "persona5";
if (!(THEMES as readonly string[]).includes(theme)) {
  throw new Error(`Unknown SITE_THEME "${theme}". Use one of: ${THEMES.join(", ")}.`);
}
const themeEntry = `./themes/${theme}/index.ts`;

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes plain HTML/CSS to /out.
  // Vercel serves it from its CDN; it also works on any static host.
  output: "export",
  // `import ... from "@theme"` resolves to the chosen theme.
  turbopack: { resolveAlias: { "@theme": themeEntry } },
  webpack: (config) => {
    config.resolve.alias["@theme"] = path.resolve(process.cwd(), themeEntry);
    return config;
  },
};

export default nextConfig;
