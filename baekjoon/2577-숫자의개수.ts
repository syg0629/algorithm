//https://www.acmicpc.net/problem/2577
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

const num = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) {
  let count = 0;
  for (let j = 0; j < num.length; j++) {
    if (Number(num[j]) === i) {
      count++;
    }
  }
  console.log(count);
}
