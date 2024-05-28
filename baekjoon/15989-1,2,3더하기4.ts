//https://www.acmicpc.net/problem/15989
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [t, ...n] = input;
const dp = new Array(10001).fill(1);
const answer: number[] = [];

for (let i = 2; i <= 3; i++) {
  for (let j = i; j <= 10001; j++) {
    dp[j] += dp[j - i];
  }
}

n.forEach((v: number) => {
  answer.push(dp[v]);
});

console.log(answer.join("\n"));
