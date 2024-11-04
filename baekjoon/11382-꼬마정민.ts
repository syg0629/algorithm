//https://www.acmicpc.net/problem/11382
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .reduce((a: number, b: number) => a + b, 0);

console.log(input);
