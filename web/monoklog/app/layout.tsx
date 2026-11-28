import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://qazkaka.github.io"),
  title: "ものクログ — 好きなものと、長く、いい関係を。",
  description:
    "持ち物・欲しい物・手放した物を、写真と使用記録で。ものクログは、お気に入りをもっと使いたくなるiPhone・iPadのコレクション管理アプリです。基本機能は無料、アカウント登録不要。",
  alternates: { canonical: "/monoklog/" },
  icons: {
    icon: "/monoklog/images/favicon.png",
    apple: "/monoklog/images/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ものクログ",
    url: "/monoklog/",
    title: "ものクログ — 好きなものと、長く、いい関係を。",
    description:
      "持ち物も、使った日の思い出も。写真と記録で育てる、あなただけのコレクション。",
    images: [{ url: "/monoklog/images/ogp.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  itunes: { appId: "6833710021" },
};
export const viewport: Viewport = {
  themeColor: "#f8f6f0",
  colorScheme: "light dark",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
