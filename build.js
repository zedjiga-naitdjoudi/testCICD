const fs = require("node:fs");

fs.rmSync("dist", { recursive: true, force: true });
fs.mkdirSync("dist");
fs.copyFileSync("sum.js", "dist/sum.js");
fs.writeFileSync("dist/build-info.txt", `Build du ${new Date().toISOString()}\n`);

console.log("Build terminé dans dist/");