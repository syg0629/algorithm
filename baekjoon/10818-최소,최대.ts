//https://www.acmicpc.net/problem/10818
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input
  .slice(1)
  .map((x: string) => x.split(" ").map(Number))
  .flat();
console.log(Math.min(...arr) + " " + Math.max(...arr));
