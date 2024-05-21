// https://www.acmicpc.net/problem/11399
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const line: number[] = input[1].split(" ").map(Number);

line.sort((a, b) => a - b);
let total = 0;
let time = 0;

for (const x of line) {
  time += x;
  total += time;
}
console.log(total);
