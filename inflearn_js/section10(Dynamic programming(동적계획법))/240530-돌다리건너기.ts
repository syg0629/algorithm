export {};

//dp[n+1]인 이유는 마지막 돌에 서있는게 아니라 그것까지 건너야하기 때문

const solution = (n: number) => {
  const dp = Array.from({ length: n + 2 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  console.log(dp[n + 1]);
};

console.log(solution(7)); //34
