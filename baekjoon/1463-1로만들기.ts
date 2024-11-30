//https://www.acmicpc.net/problem/1463
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
const input = Number(fs.readFileSync(filePath).toString().trim().split("\n"));

const reduceInput = (n: number) => {
  const dp = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }
  return dp[n];
};

console.log(reduceInput(input));
