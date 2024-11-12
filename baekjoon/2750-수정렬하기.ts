//https://www.acmicpc.net/problem/2750
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(1)
  .sort((a: number, b: number) => a - b);
console.log(input.join("\n"));
