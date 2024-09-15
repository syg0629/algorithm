//https://www.acmicpc.net/problem/1407
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

let count = 0;
let remaining = input;

while (remaining >= 0) {
  if (remaining % 5 === 0) {
    console.log(count + remaining / 5);
    break;
  }
  remaining -= 3;
  count += 1;
  if (remaining < 0) {
    console.log(-1);
    break;
  }
}
