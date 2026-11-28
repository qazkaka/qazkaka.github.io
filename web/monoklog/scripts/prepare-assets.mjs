import { cp, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
const root = new URL("../../../monoklog/", import.meta.url);
const target = new URL("../public/", import.meta.url);
await mkdir(target, { recursive: true });
for (const entry of [
  "images",
  "help.css",
  "support.html",
  "PrivacyPolicy.html",
  "join",
  "app-ads.txt",
]) {
  await cp(new URL(entry, root), new URL(entry, target), { recursive: true });
}
console.log(`Prepared existing site assets in ${fileURLToPath(target)}`);
