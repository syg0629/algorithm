//https://www.acmicpc.net/problem/1026
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input3.txt";
const [n, A, B] = fs.readFileSync(filePath).toString().trim().split("\n");
const sortedA = A.split(" ")
  .map(Number)
  .sort((a: number, b: number) => a - b);
const sortedB = B.split(" ")
  .map(Number)
  .sort((a: number, b: number) => b - a);

let sum = 0;
for (let i = 0; i < n; i++) {
  sum += sortedA[i] * sortedB[i];
}

console.log(sum);
