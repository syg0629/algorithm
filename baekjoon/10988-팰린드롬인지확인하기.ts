//https://www.acmicpc.net/problem/10988
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const input = fs.readFileSync(filePath).toString().trim();
console.log(input === input.split("").reverse().join("") ? 1 : 0);
