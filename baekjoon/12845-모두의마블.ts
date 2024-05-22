//https://www.acmicpc.net/problem/12845
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input: string = fs.readFileSync(filePath).toString().trim().split("\n");

const lv = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let totalGold = 0;
let maxLv = 0;

for (const x of lv) {
  totalGold += x + maxLv;
  maxLv = Math.max(maxLv, x);
}
console.log(totalGold - lv[0]); //140
