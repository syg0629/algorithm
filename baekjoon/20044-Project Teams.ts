// https://www.acmicpc.net/problem/20044
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
const [n, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const numbers = arr.split(" ").map(Number);
const sortedArr = [...numbers].sort((a: number, b: number) => a - b);
const reverseSortedArr = [...numbers].sort((a: number, b: number) => b - a);

let minValue = Infinity;
for (let i = 0; i < n; i++) {
  const sum = sortedArr[i] + reverseSortedArr[i];
  if (sum < minValue) {
    minValue = sum;
  }
}

console.log(minValue);
