//https://www.acmicpc.net/problem/14568
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const candy = Number(input);

let count = 0;
for (let i = candy; i > 0; i--) {
  for (let t = 2; t < candy; t += 2) {
    for (let y = 1; y < candy - t; y++) {
      const n = candy - t - y;
      if (n >= y + 2) {
        count++;
      }
    }
  }
}

console.log(count);
