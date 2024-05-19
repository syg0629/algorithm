/**
 * 미로탐색(DFS)
 * 7*7격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램 작성
 * 츨빌점은 격자의 (1,1)좌표이고, 탈출 도착점은 (7,7)좌표
 * 격자판의 1은 벽이고, 0은 통로
 * 격자판은 상하좌우로만 움직임
 */
export {};

function solution(board: number[][]) {
  let answer = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  function DFS(x: number, y: number) {
    if (x === 6 && y === 6) answer++;
    else {
      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];

        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  //현재 위치
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

const arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
