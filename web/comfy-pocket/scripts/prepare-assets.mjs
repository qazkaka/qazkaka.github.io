import { cp, mkdir } from "node:fs/promises";
const source = new URL("../../../comfy-pocket/", import.meta.url);
const target = new URL("../public/", import.meta.url);
await mkdir(target, { recursive: true });
for (const entry of ["images", "support.html", "PrivacyPolicy.html"]) {
  await cp(new URL(entry, source), new URL(entry, target), { recursive: true });
}
await mkdir(new URL("ja/", target), { recursive: true });
for (const entry of ["support.html", "PrivacyPolicy.html"]) {
  await cp(new URL(`ja/${entry}`, source), new URL(`ja/${entry}`, target));
}
console.log(
  "Prepared the existing English and Japanese images and help pages.",
);
