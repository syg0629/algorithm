//https://www.acmicpc.net/problem/27323
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .reduce((x: number, y: number) => x * y, 1);
console.log(input);
