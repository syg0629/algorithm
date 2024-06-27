//https://www.acmicpc.net/problem/2751
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

arr.sort((a: number, b: number) => a - b);
console.log(arr.join("\n"));
