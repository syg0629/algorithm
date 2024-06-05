//https://www.acmicpc.net/problem/3052
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input3.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const set = new Set(input.map((x: number) => x % 42));
console.log(set.size);
