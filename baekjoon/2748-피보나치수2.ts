//https://www.acmicpc.net/problem/2748
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const n = input[0];

const fib = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  // 값을 저장하기 위한 dp
  const dp = new Array(n + 1).fill(BigInt(1));
  dp[0] = 0;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n].toString();
};

console.log(fib(n));

// 자바스크립트에서 나타낼 수 있는 가장 안전한 최대 크기의 정수인 Number.MAX_SAFE_INTEGER(2^53 - 1)보다 큰 수가 dp에 저장되면서 정확하지 않은 수가 입력될 수 있다.
// 따라서, BigInt를 사용한 연산을 통해 정확한 값을 얻어내야 한다.
// 마지막에 출력할 때 BigInt의 리터럴의 마지막에 알파벳 n이 붙기 때문에 문자열로 변환하여 출력
