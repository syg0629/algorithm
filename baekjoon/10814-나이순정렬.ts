//https://www.acmicpc.net/problem/10814
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [_, ...info] = fs.readFileSync(filePath).toString().trim().split("\n");
info.sort(
  (a: string, b: string) => Number(a.split(" ")[0]) - Number(b.split(" ")[0])
);
console.log(info.join("\n"));
