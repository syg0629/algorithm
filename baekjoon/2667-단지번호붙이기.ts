//https://www.acmicpc.net/problem/2667
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input.shift());
const map = input.map((x: string) => x.split("").map(Number));

const visited = Array.from({ length: n }, () => Array(n).fill(false));

//상하좌우
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let complexCount = 0;
let homeCount = 0;
const answer = [];

const dfs = (x: number, y: number) => {
  if (map[x][y] === 1 && !visited[x][y]) {
    //현재 위치를 방문으로 표시
    visited[x][y] = true;
    homeCount++;

    //상하좌우 네 방향에 대해 탐색
    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];
      // 새 좌표가 유효한 범위 내에 있는지 확인
      if (newX >= 0 && newX < n && newY >= 0 && newY < n) {
        dfs(newX, newY);
      }
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 집이 있고 방문하지 않은 경우
    if (map[i][j] === 1 && !visited[i][j]) {
      // dfs로 단지 탐색
      dfs(i, j);
      // 단지 수 증가
      complexCount++;
      answer.push(homeCount);
      // 새로운 단지를 탐색할 때 집 수를 초기화
      homeCount = 0;
    }
  }
}

console.log(complexCount + "\n" + `${answer.sort((a, b) => a - b).join("\n")}`);

// 3
// 7
// 8
// 9
