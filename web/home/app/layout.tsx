import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://qazkaka.github.io"),
  title: "qazkaka のアプリ — 日々に、小さな心地よさを。",
  description:
    "持ち物を楽しむ「ものクログ」と、ComfyUIを手元で操作する「Comfy Pocket」。個人で開発しているアプリをご紹介します。",
  alternates: { canonical: "/" },
  icons: { icon: "/monoklog/images/favicon.png" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    title: "qazkaka のアプリ",
    description: "日々に、小さな心地よさを。個人で開発しているアプリの紹介。",
    images: [
      {
        url: "/monoklog/images/ogp.png",
        width: 1200,
        height: 630,
        alt: "ものクログ",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
