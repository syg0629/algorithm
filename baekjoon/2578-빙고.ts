//https://www.acmicpc.net/problem/2578
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const board = [];
const visited: number[][] = Array.from({ length: 5 }, () => Array(5).fill(0));
const nums = [];

for (let i = 0; i < 5; i++) {
  board.push(input[i].trim().split(" ").map(Number));
}

for (let i = 5; i < 10; i++) {
  nums.push(input[i].trim().split(" ").map(Number));
}

const isCross = (visited: number[][]) => {
  let cnt = 0;
  if (
    visited[0][0] &&
    visited[1][1] &&
    visited[2][2] &&
    visited[3][3] &&
    visited[4][4]
  ) {
    cnt++;
  }
  if (
    visited[0][4] &&
    visited[1][3] &&
    visited[2][2] &&
    visited[3][1] &&
    visited[4][0]
  ) {
    cnt++;
  }

  return cnt;
};

const isLine = (visited: number[][]) => {
  let cnt = 0;
  for (let i = 0; i < 5; i++) {
    if (
      visited[i][0] &&
      visited[i][1] &&
      visited[i][2] &&
      visited[i][3] &&
      visited[i][4]
    ) {
      cnt++;
    }
    if (
      visited[0][i] &&
      visited[1][i] &&
      visited[2][i] &&
      visited[3][i] &&
      visited[4][i]
    ) {
      cnt++;
    }
  }

  return cnt;
};

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    const now = nums[i][j];
    board.map((x, idx) => {
      if (x.includes(now)) {
        visited[idx][x.indexOf(now)] = 1;
      }
    });

    const cross = isCross(visited);
    const line = isLine(visited);

    if (cross + line >= 3) {
      const answer = i * 5 + (j + 1);
      console.log(answer);
      i = 5;
      break;
    }
  }
}
