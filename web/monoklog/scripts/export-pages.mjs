import { cp, rm, mkdir } from "node:fs/promises";
const output = new URL("../out/", import.meta.url);
const target = new URL("../../../monoklog/", import.meta.url);
// Replace only Next's generated files. Existing policy, support, invites and images stay intact.
await rm(new URL("_next/", target), { recursive: true, force: true });
await mkdir(target, { recursive: true });
for (const entry of ["index.html", "_next"]) {
  await cp(new URL(entry, output), new URL(entry, target), { recursive: true });
}
console.log(
  "Exported the home page to monoklog/ for branch-based GitHub Pages.",
);
