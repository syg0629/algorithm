//https://www.acmicpc.net/problem/2178
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 지도 크기
const [yMax, xMax] = input.shift().split(" ").map(Number);
// 지도
const map = input.map((v: string) => v.split("").map(Number));
// BFS 알고리즘 적용: 시작점부터 모든 칸을 방문하며 최단 경로 계산
const queue: [number, number, number][] = [[0, 0, 1]];

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

// 큐가 비어있지 않을 때까지 반복
while (queue.length) {
  // 큐에서 다음 위치와 거리를 가져옴
  const [x, y, dis] = queue.shift()!;

  // 상하좌우 이동 방향에 대해 반복
  for (const [dx, dy] of dir) {
    // 다음 이동할 x좌표 계산
    const xPos = x + dx;
    // 다음 이동할 y좌표 계산
    const yPos = y + dy;

    // 다음 위치가 지도 범위 안에 있고, 갈 수 있는 곳(벽이 아닌 곳)이라면
    if (
      xPos >= 0 &&
      yPos >= 0 &&
      xPos < xMax &&
      yPos < yMax &&
      map[yPos][xPos] === 1
    ) {
      // 다음 위치까지의 거리를 갱신하고
      map[yPos][xPos] = dis + 1;
      // 큐에 다음 위치와 거리를 추가하여 탐색 계속
      queue.push([xPos, yPos, dis + 1]);
    }
  }
}

console.log(map[yMax - 1][xMax - 1]);
// 15
