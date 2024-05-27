//https://www.acmicpc.net/problem/12026
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0], 10);
const blocks = input[1].split("");

// 도달할 수 없는 경우를 나타내기 위해 매우 큰 숫자 값으로 설정
const inf = Number.MAX_SAFE_INTEGER;
// 각 위치까지의 최소 에너지를 저장
const dp = new Array(n).fill(inf);
// 시작 위치의 에너지는 0
dp[0] = 0;

// i: 현재 위치
for (let i = 0; i < n; i++) {
  // j: 다음 위치
  for (let j = i + 1; j < n; j++) {
    if (
      (blocks[i] === "B" && blocks[j] === "O") ||
      (blocks[i] === "O" && blocks[j] === "J") ||
      (blocks[i] === "J" && blocks[j] === "B")
    ) {
      // 현재 블록에서 다음 블록으로 이동할 수 있을 때 dp[j] 갱신
      dp[j] = Math.min(dp[j], dp[i] + Math.pow(j - i, 2));
    }
  }
}

console.log(dp[n - 1] === inf ? -1 : dp[n - 1]);
