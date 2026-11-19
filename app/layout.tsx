import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { profile } from "@/content/resume";
// The active theme, chosen by SITE_THEME at build time (see next.config.ts).
import { appleIcon, fontClassName, icon, ogImage, ogImageAlt, themeColor } from "@theme";

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
    images: [{ url: ogImage.src, width: ogImage.width, height: ogImage.height, alt: ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.summary,
    images: [{ url: ogImage.src, alt: ogImageAlt }],
  },
  icons: {
    icon: { url: icon.src, type: "image/png" },
    apple: { url: appleIcon.src, type: "image/png" },
  },
};

export const viewport: Viewport = {
  themeColor,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontClassName}>
      <body>{children}</body>
    </html>
  );
}
