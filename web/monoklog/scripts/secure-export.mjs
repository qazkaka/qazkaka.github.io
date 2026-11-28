import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
const file = new URL("../out/index.html", import.meta.url);
const html = await readFile(file, "utf8");
const hashes = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)]
  .filter(([, attrs]) => !/\bsrc=/.test(attrs))
  .map(
    ([, , content]) =>
      `'sha256-${createHash("sha256").update(content).digest("base64")}'`,
  );
const policy = `default-src 'self'; script-src 'self' ${[...new Set(hashes)].join(" ")}; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none'`;
await writeFile(
  file,
  html.replace(
    "<head>",
    `<head><meta http-equiv="Content-Security-Policy" content="${policy}">`,
  ),
);
console.log("Added a CSP with hashes for static Next.js hydration scripts.");
