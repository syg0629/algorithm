//https://www.acmicpc.net/problem/1012
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input2.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCases = input[0];
const inputs = input
  .slice(1)
  .map((line: string) => line.split(" ").map(Number));

// 현재 읽고 있는 위치를 추적
let pointer = 0;

for (let i = 0; i < testCases; i++) {
  // M: 가로 길이, N: 세로 길이, K: 배추 위치의 개수
  const [M, N, K]: [number, number, number] = inputs[pointer];
  pointer++;

  // M x N 크기의 2차원 배열을 0으로 초기화
  const graph = Array.from(Array(M), () => Array(N).fill(0));
  // 방문 여부를 체크하기 위한 M x N 크기의 2차원 배열을 false로 초기화
  const visited = Array.from(Array(M), () => Array(N).fill(false));
  let wormCount = 0;

  // K개의 배추 위치를 그래프에 표시
  for (let j = 0; j < K; j++) {
    const [x, y]: [number, number] = inputs[pointer];
    graph[x][y] = 1;
    pointer++;
  }

  function DFS(x: number, y: number) {
    // 상하좌우 네 방향을 나타내는 배열
    const directions: [number, number][] = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    // 현재 위치 방문 표시
    visited[x][y] = true;

    // 네 방향에 대해 탐색
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // 다음 위치가 그래프 범위 내에 있는지 확인
      if (nx >= 0 && ny >= 0 && nx < M && ny < N) {
        // 다음 위치가 방문하지 않았고 배추가 있으면 DFS 재귀 호출
        if (!visited[nx][ny] && graph[nx][ny] === 1) {
          DFS(nx, ny);
        }
      }
    }
  }

  // 그래프의 모든 위치를 탐색하며 DFS를 호출하여 연결된 배추 그룹의 수를 센다
  for (let j = 0; j < M; j++) {
    for (let k = 0; k < N; k++) {
      // 배추가 있으며 방문하지 않은 경우 DFS 호출 후 그룹 수 증가
      if (graph[j][k] === 1 && !visited[j][k]) {
        DFS(j, k);
        wormCount++;
      }
    }
  }

  console.log(wormCount);
}
// 5
// 1
