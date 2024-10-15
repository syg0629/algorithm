//https://www.acmicpc.net/problem/2748
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

const fib = (n: number, memo: { [key: number]: number } = {}): number => {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  if (memo[n]) return memo[n];

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(input));
