import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { profile } from "@/content/resume";

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/collage.css";
import "./styles/frame.css";
import "./styles/sections.css";
import "./styles/motion.css";
import "./styles/print.css";

// Self-hosted fonts (SIL OFL 1.1, licences in app/fonts). Latin subsets from the Stage theme.
const dela = localFont({
  src: "./fonts/dela-gothic-one-400.woff2",
  weight: "400",
  variable: "--font-dela",
  display: "swap",
});
const fraunces = localFont({
  src: "./fonts/fraunces-900.woff2",
  weight: "900",
  variable: "--font-fraunces",
  display: "swap",
});
const courier = localFont({
  src: "./fonts/courier-prime-700.woff2",
  weight: "700",
  variable: "--font-courier",
  display: "swap",
  preload: false,
});
const anton = localFont({
  src: "./fonts/anton-400.woff2",
  weight: "400",
  variable: "--font-anton",
  display: "swap",
  preload: false,
});
const literata = localFont({
  src: [
    { path: "./fonts/literata-var.woff2", weight: "200 900", style: "normal" },
    { path: "./fonts/literata-var-italic.woff2", weight: "200 900", style: "italic" },
  ],
  variable: "--font-literata",
  display: "swap",
});
const firaCode = localFont({
  src: "./fonts/fira-code-var.woff2",
  weight: "300 700",
  variable: "--font-fira-code",
  display: "swap",
});

// On Vercel the production URL is known at build time; set NEXT_PUBLIC_SITE_URL to use a custom domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = `${profile.name} | ${profile.headline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.summary,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title,
    description: profile.summary,
    url: "/",
    firstName: profile.firstName,
    lastName: profile.lastName,
  },
  twitter: { card: "summary_large_image", title, description: profile.summary },
};

export const viewport: Viewport = {
  themeColor: "#e60012",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const fonts = [dela, fraunces, courier, anton, literata, firaCode].map((f) => f.variable).join(" ");
  return (
    <html lang="en" className={fonts}>
      <body>{children}</body>
    </html>
  );
}
