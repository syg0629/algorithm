//https://www.acmicpc.net/problem/2587
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
  .sort((a: number, b: number) => a - b);
const avg = input.reduce((a: number, b: number) => a + b, 0) / input.length;
const median = input[Math.floor(input.length / 2)];
console.log(avg);
console.log(median);
