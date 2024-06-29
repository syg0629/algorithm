//https://www.acmicpc.net/problem/2775
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input.shift();

for (let t = 0; t < T; t++) {
  const k = input.shift();
  const n = input.shift();

  // 초기화
  let prevFloor = Array.from({ length: n + 1 }, (_, idx) => idx);

  for (let i = 1; i <= k; i++) {
    const currentFloor: number[] = [];

    // 각 호실의 사람 수 계산
    for (let j = 0; j <= n; j++) {
      if (j === 0) {
        currentFloor[j] = 0; // 0호는 존재하지 않음
      } else {
        currentFloor[j] = currentFloor[j - 1] + prevFloor[j];
      }
    }
    // 다음 층으로 이동
    prevFloor = currentFloor;
  }

  // k층 n호의 사람 수 출력
  console.log(prevFloor[n]);
}
