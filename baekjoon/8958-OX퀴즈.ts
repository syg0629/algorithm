//https://www.acmicpc.net/problem/8958
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const quiz = input.slice(1);

for (const x of quiz) {
  let count = 0;
  let total = 0;
  for (const y of x) {
    if (y === "O") {
      count++;
      total += count;
    } else {
      count = 0;
    }
  }
  console.log(total);
}
