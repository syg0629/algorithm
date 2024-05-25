//https://www.acmicpc.net/problem/2217
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input: number[] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [n, ...k] = input;
k.sort((a, b) => b - a);

let answer = 0;
let count = 1;
for (const x of k) {
  answer = Math.max(answer, x * count);
  count++;
}
console.log(answer);
