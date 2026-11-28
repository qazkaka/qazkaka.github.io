import { cp, rm, mkdir } from "node:fs/promises";
const output = new URL("../out/", import.meta.url);
const target = new URL("../../../comfy-pocket/", import.meta.url);
await rm(new URL("_next/", target), { recursive: true, force: true });
await mkdir(new URL("ja/", target), { recursive: true });
for (const entry of ["index.html", "ja/index.html", "_next"]) {
  await cp(new URL(entry, output), new URL(entry, target), { recursive: true });
}
console.log(
  "Exported both home pages and their shared assets to comfy-pocket/.",
);
