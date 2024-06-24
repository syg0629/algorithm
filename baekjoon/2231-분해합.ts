//https://www.acmicpc.net/problem/2231
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath);
const n = Number(input);

let answer = Infinity;
for (let i = n; i > 0; i--) {
  const splittedNum = i.toString().split("").map(Number);
  const sum = i + splittedNum.reduce((x, y) => x + y, 0);
  if (sum === n) {
    answer = Math.min(answer, i);
  }
}
console.log(answer === Infinity ? 0 : answer);
