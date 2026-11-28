import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
const output = new URL("../out/", import.meta.url);
const root = new URL("../../../", import.meta.url);
const html = await readFile(new URL("index.html", output), "utf8");
if (!html.includes("/homepage-assets/_next/"))
  throw new Error("Unexpected asset prefix");
// Only these two destinations belong to this build. App directories are read-only.
await mkdir(new URL("homepage-assets/", root), { recursive: true });
await cp(new URL("_next/", output), new URL("homepage-assets/_next/", root), {
  recursive: true,
});
await writeFile(new URL("index.html", root), html);
console.log("Exported root index.html and homepage-assets/_next/ only.");
