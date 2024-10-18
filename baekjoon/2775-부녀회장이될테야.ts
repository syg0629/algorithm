//https://www.acmicpc.net/problem/2775
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const [testCase, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// dp배열 초기화(층은 0~14층 / 호는 1~14호)
const dp = Array.from(Array(15), () => Array(15).fill(0));

// 0층 각 호에 사는 사람들
for (let j = 0; j < dp.length; j++) {
  dp[0][j] = j;
}

// 모든 층에 대한 dp
for (let i = 1; i < dp.length; i++) {
  for (let j = 1; j < dp.length; j++) {
    dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
  }
}

// testCase처리
for (let i = 0; i < testCase; i++) {
  //층
  const k = input[i * 2];
  //호
  const n = input[i * 2 + 1];
  console.log(dp[k][n]);
}
