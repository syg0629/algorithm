//https://www.acmicpc.net/problem/2609
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [num1, num2] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let a = num1;
let b = num2;
while (a % b !== 0) {
  const n = a % b;
  a = b;
  b = n;
}
const gcdValue = b;
const lcmValue = (num1 * num2) / gcdValue;

console.log(gcdValue);
console.log(lcmValue);
