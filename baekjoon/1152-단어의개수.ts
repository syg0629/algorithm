//https://www.acmicpc.net/problem/1152
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .filter((x: string) => x !== "");
console.log(input.length);
