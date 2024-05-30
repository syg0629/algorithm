//https://www.acmicpc.net/problem/1890
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [nString, ...remaining] = input;
const n = Number(nString);
const routes = remaining.map((x: string) => x.split(" ").map(Number));

const dp = new Array(n);
for (let i = 0; i < dp.length; i++) {
  dp[i] = new Array(n).fill(BigInt(0));
}
dp[0][0] = BigInt(1);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const num = routes[i][j];
    if (num === 0) continue;
    if (i + routes[i][j] < n) {
      dp[i + routes[i][j]][j] += dp[i][j];
    }
    if (j + routes[i][j] < n) {
      dp[i][j + routes[i][j]] += dp[i][j];
    }
  }
}
console.log(dp[n - 1][n - 1].toString());
