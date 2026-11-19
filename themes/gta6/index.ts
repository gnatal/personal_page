// Sunset theme inspired by GTA VI. Selected with SITE_THEME=gta6 (see next.config.ts).
import localFont from "next/font/local";

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/frame.css";
import "./styles/sections.css";
import "./styles/motion.css";
import "./styles/print.css";

export { default as icon } from "./icon.png";
export { default as appleIcon } from "./apple-icon.png";
export { default as ogImage } from "./opengraph-image.png";

export { About } from "./components/About";
export { Contact } from "./components/Contact";
export { Credentials } from "./components/Credentials";
export { Experience } from "./components/Experience";
export { Hero } from "./components/Hero";
export { Projects } from "./components/Projects";
export { SiteFooter } from "./components/SiteFooter";
export { SiteHeader } from "./components/SiteHeader";
export { Skills } from "./components/Skills";
export { Ticker } from "./components/Ticker";

export const themeColor = "#1b0b33";
export const ogImageAlt = "Guilherme Natal, full-stack engineer and engineering leader";

// Self-hosted fonts (SIL OFL 1.1, licences in /fonts).
const anton = localFont({
  src: "../../fonts/anton-400.woff2",
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});
const inter = localFont({
  src: [
    { path: "../../fonts/inter-400.woff", weight: "400", style: "normal" },
    { path: "../../fonts/inter-600.woff", weight: "600", style: "normal" },
    { path: "../../fonts/inter-800.woff", weight: "800", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});
const fraunces = localFont({
  src: "../../fonts/fraunces-900.woff2",
  weight: "900",
  variable: "--font-fraunces",
  display: "swap",
  preload: false,
});
const firaCode = localFont({
  src: "../../fonts/fira-code-var.woff2",
  weight: "300 700",
  variable: "--font-fira-code",
  display: "swap",
  preload: false,
});

export const fontClassName = [anton, inter, fraunces, firaCode].map((f) => f.variable).join(" ");
