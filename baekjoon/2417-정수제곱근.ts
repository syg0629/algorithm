//https://www.acmicpc.net/problem/2417
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const input = BigInt(fs.readFileSync(filePath));

let left = 0n;
let right = input;
let answer = 0n;

while (left <= right) {
  const mid = (left + right) / 2n;
  if (mid * mid >= input) {
    answer = mid;
    right = mid - 1n;
  } else {
    left = mid + 1n;
  }
}
console.log(answer.toString());
