import { metadataFor } from "@/lib/metadata";
import "../globals.css";
export { viewport } from "@/lib/metadata";
export const metadata = metadataFor("ja");
export default function JapaneseLayout({
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
