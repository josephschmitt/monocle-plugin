import { build } from "esbuild";

await build({
  entryPoints: ["server.ts"],
  bundle: true,
  minify: true,
  platform: "node",
  format: "esm",
  target: "node18",
  outfile: "channel.bundle.js",
  external: ["net", "crypto", "fs", "path", "process"],
});
