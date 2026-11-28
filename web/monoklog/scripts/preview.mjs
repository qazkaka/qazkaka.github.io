import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";
const root = resolve(fileURLToPath(new URL("../out/", import.meta.url)));
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".txt": "text/plain",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};
createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    if (url.pathname === "/monoklog") {
      res.writeHead(308, { Location: "/monoklog/" });
      res.end();
      return;
    }
    if (!url.pathname.startsWith("/monoklog/")) throw new Error("not found");
    let path = resolve(
      root,
      "." + decodeURIComponent(url.pathname.slice("/monoklog".length)),
    );
    if (path !== root && !path.startsWith(root + sep))
      throw new Error("not found");
    if ((await stat(path)).isDirectory()) path = resolve(path, "index.html");
    const data = await readFile(path);
    res.writeHead(200, {
      "Content-Type": types[extname(path)] || "application/octet-stream",
    });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}).listen(3000, "127.0.0.1", () =>
  console.log("Local: http://127.0.0.1:3000/monoklog/"),
);
