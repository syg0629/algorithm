//https://www.acmicpc.net/problem/2193
export {};

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input1.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

const dp = new Array(input + 1);
dp[0] = [0, 0];
dp[1] = [0, 1];

for (let i = 2; i <= input; i++) {
  dp[i] = [];
  dp[i][0] = BigInt(dp[i - 1][0] + dp[i - 1][1]);
  dp[i][1] = BigInt(dp[i - 1][0]);
}

console.log(BigInt(dp[input][0] + dp[input][1]).toString());
