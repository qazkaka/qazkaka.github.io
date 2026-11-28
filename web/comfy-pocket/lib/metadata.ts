import type { Metadata, Viewport } from "next";
import { asset, copy, sitePath, type Locale } from "./content";
export function metadataFor(locale: Locale): Metadata {
  const t = copy[locale];
  return {
    metadataBase: new URL("https://qazkaka.github.io"),
    title: t.title,
    description: t.description,
    alternates: {
      canonical: sitePath(locale),
      languages: {
        en: sitePath("en"),
        ja: sitePath("ja"),
        "x-default": sitePath("en"),
      },
    },
    icons: { icon: asset("favicon.png"), apple: asset("apple-touch-icon.png") },
    openGraph: {
      type: "website",
      siteName: "Comfy Pocket",
      title: t.title,
      description: t.description,
      url: sitePath(locale),
      locale: locale === "ja" ? "ja_JP" : "en_US",
      alternateLocale: locale === "ja" ? "en_US" : "ja_JP",
      images: [{ url: asset("icon-512.png"), width: 512, height: 512 }],
    },
    twitter: {
      card: "summary",
      title: t.title,
      description: t.description,
      images: [asset("icon-512.png")],
    },
  };
}
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7fc" },
    { media: "(prefers-color-scheme: dark)", color: "#15131d" },
  ],
  colorScheme: "light dark",
};
