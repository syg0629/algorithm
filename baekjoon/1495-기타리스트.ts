//https://www.acmicpc.net/problem/1495
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input: string[] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, S, M] = input[0].split(" ").map(Number);
const V: number[] = input[1].split(" ").map(Number);

const getMaxVolume = (
  N: number,
  startVolume: number,
  maxVolume: number,
  volumes: number[]
) => {
  // dp배열을 동적으로 생성하고 초기화
  const dp = Array.from({ length: N + 1 }, () =>
    Array(maxVolume + 1).fill(false)
  );
  dp[0][startVolume] = true;

  // 가능한 불륨을 체크
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j <= maxVolume; j++) {
      if (dp[i - 1][j]) {
        if (j - volumes[i - 1] >= 0) {
          dp[i][j - volumes[i - 1]] = true;
        }
        if (j + volumes[i - 1] <= maxVolume) {
          dp[i][j + volumes[i - 1]] = true;
        }
      }
    }
  }

  // 최대 볼륨 구하기
  for (let vol = maxVolume; vol >= 0; vol--) {
    if (dp[N][vol]) {
      return vol;
    }
  }

  return -1;
};

const result = getMaxVolume(N, S, M, V);
console.log(result);
