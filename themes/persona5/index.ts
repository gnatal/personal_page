// Persona 5 theme. Selected with SITE_THEME=persona5 (see next.config.ts).
import localFont from "next/font/local";

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/collage.css";
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

export const themeColor = "#e60012";
export const ogImageAlt = "Guilherme Natal, full-stack engineer and engineering leader";

// Self-hosted fonts (SIL OFL 1.1, licences in /fonts). Latin subsets from the Stage theme.
const dela = localFont({
  src: "../../fonts/dela-gothic-one-400.woff2",
  weight: "400",
  variable: "--font-dela",
  display: "swap",
});
const fraunces = localFont({
  src: "../../fonts/fraunces-900.woff2",
  weight: "900",
  variable: "--font-fraunces",
  display: "swap",
});
const courier = localFont({
  src: "../../fonts/courier-prime-700.woff2",
  weight: "700",
  variable: "--font-courier",
  display: "swap",
  preload: false,
});
const anton = localFont({
  src: "../../fonts/anton-400.woff2",
  weight: "400",
  variable: "--font-anton",
  display: "swap",
  preload: false,
});
const literata = localFont({
  src: [
    { path: "../../fonts/literata-var.woff2", weight: "200 900", style: "normal" },
    { path: "../../fonts/literata-var-italic.woff2", weight: "200 900", style: "italic" },
  ],
  variable: "--font-literata",
  display: "swap",
});
const firaCode = localFont({
  src: "../../fonts/fira-code-var.woff2",
  weight: "300 700",
  variable: "--font-fira-code",
  display: "swap",
});

export const fontClassName = [dela, fraunces, courier, anton, literata, firaCode].map((f) => f.variable).join(" ");
