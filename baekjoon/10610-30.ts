//https://www.acmicpc.net/problem/10610
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
const input: number[] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("")
  .map(Number)
  .sort((a: number, b: number) => b - a);

const sum = input.reduce((acc, cur) => acc + cur);
console.log(sum % 3 === 0 && input.includes(0) ? input.join("") : -1);
