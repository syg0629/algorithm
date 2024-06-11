//https://www.acmicpc.net/problem/1436
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString();

let count = 0;
let num = 665;

while (count < input) {
  num++;
  if (String(num).includes("666")) {
    count++;
  }
}
console.log(num);
