import { metadataFor } from "@/lib/metadata";
import "../globals.css";
export { viewport } from "@/lib/metadata";
export const metadata = metadataFor("en");
export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
