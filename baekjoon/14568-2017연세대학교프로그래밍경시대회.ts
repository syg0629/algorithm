//https://www.acmicpc.net/problem/14568
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const input = Number(fs.readFileSync(filePath));

let count = 0;
for (let i = 1; i <= input; i++) {
  for (let j = i + 2; j <= input - i; j++) {
    for (let e = 2; e <= input - j; e += 2) {
      if (i + j + e === input) {
        count++;
      }
    }
  }
}
console.log(count);
