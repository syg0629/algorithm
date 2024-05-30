export {};

const solution = (n: number) => {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  console.log(dp[n]);
};

console.log(solution(7)); //21
console.log(solution(4)); //5
