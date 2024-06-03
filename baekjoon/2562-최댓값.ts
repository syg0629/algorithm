// https://www.acmicpc.net/problem/2562
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let max = 0;
let maxIndex = 0;

for (const [i, v] of input.entries()) {
  if (max < v) {
    max = v;
    maxIndex = i;
  }
}
console.log(max);
console.log(maxIndex + 1);
