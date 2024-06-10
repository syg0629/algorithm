// https://www.acmicpc.net/problem/1018
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [R, C] = input[0].split(" ").map(Number);
const chess = input.slice(1);
const answer = [];
const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];
const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

// 주어진 위치에서 시작하는 8x8 체스판이 white 패턴과 맞는지 검사
const whiteFirst = (x: number, y: number) => {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (chess[i + x][j + y] !== white[i][j]) count++;
    }
  }
  return count;
};

// 주어진 위치에서 시작하는 8x8 체스판이 black 패턴과 맞는지 검사
const blackFirst = (x: number, y: number) => {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (chess[i + x][j + y] !== black[i][j]) count++;
    }
  }
  return count;
};

// 모든 가능한 8x8 체스판 검사
// +7은 체스판에서 벗어나지 않도록 하기 위해 사용
for (let i = 0; i + 7 < R; i++) {
  for (let j = 0; j + 7 < C; j++) {
    answer.push(whiteFirst(i, j));
    answer.push(blackFirst(i, j));
  }
}

console.log(Math.min(...answer));
