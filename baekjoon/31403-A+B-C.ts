//https://www.acmicpc.net/problem/31403
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B, C] = input;
console.log(`${+A + +B - C}\n${A + B - C}`);
