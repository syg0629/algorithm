//https://www.acmicpc.net/problem/15486
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const matrices = input
  .slice(1)
  .map((line: string) => line.split(" ").map(Number));

const dp = Array.from({ length: n }, () => Array(n).fill(0));

// size는 부분 문제의 크기를 나타냄
for (let size = 1; size < n; size++) {
  for (let start = 0; start < n - size; start++) {
    const end = start + size;

    let minCost = Infinity;
    for (let cut = start; cut < end; cut++) {
      minCost = Math.min(
        minCost,
        dp[start][cut] +
          dp[cut + 1][end] +
          matrices[start][0] * matrices[cut][1] * matrices[end][1]
      );
    }
    dp[start][end] = minCost;
  }
}

console.log(dp[0][n - 1]);
