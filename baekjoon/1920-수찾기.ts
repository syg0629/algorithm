//https://www.acmicpc.net/problem/1920
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, nArr, m, mArr] = input;
const nSet = new Set(nArr.split(" ").map(Number));
const numMArr = mArr.split(" ").map(Number);
const answer = [];
for (const x of numMArr) {
  answer.push(nSet.has(x) ? 1 : 0);
}
console.log(answer.join("\n"));
