import { cp, mkdir } from "node:fs/promises";
const root = new URL("../../../", import.meta.url);
const output = new URL("../public/", import.meta.url);
// Read existing artwork. Never write to either app directory.
for (const app of ["monoklog", "comfy-pocket"]) {
  await mkdir(new URL(`${app}/`, output), { recursive: true });
  await cp(new URL(`${app}/images/`, root), new URL(`${app}/images/`, output), {
    recursive: true,
  });
}
