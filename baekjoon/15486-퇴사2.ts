//https://www.acmicpc.net/problem/15486
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [dDay, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = Number(dDay);
const inputs = input.map((x: string) => x.split(" ").map(Number));

const dp = new Array(n + 1).fill(0);
let max = 0;

for (let i = 0; i < n; i++) {
  // 현재까지의 최대 수익
  max = Math.max(max, dp[i]);
  const [day, pay]: [number, number] = inputs[i];
  // 상담이 i일에 시작해서 day일 동안 진행된다면 이 상담은 "i+day"일에 끝남
  // 3일 째에 시작해서 2일 동안 진행 => 3+2 = 5일 째에 끝남
  // 특정 상담이 끝난 후 그 다음 가능한 상담 일정을 갱신하기 위함
  // i + day가 n 이하면, 즉 상담이 기간 내 끝나면 dp[i+day]를 최대 수익으로 갱신
  if (i + day <= n) dp[i + day] = Math.max(dp[i + day], max + pay);
}

// 최대 수익값
console.log(Math.max(...dp));
