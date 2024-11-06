//https://www.acmicpc.net/problem/25304
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const [total, count, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const product = input.map((x: string) => x.split(" ").map(Number));

let sum = 0;
for (let i = 0; i < count; i++) {
  sum += product[i][0] * product[i][1];
}

console.log(sum === Number(total) ? "Yes" : "No");
