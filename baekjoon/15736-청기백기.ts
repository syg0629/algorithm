//https://www.acmicpc.net/problem/15736
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());
console.log(Math.floor(Math.sqrt(input)));
