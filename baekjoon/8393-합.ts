//https://www.acmicpc.net/problem/8393
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const input = fs.readFileSync(filePath).toString().trim();

let sum = 0;
for (let i = 1; i <= input; i++) {
  sum += i;
}
console.log(sum);
