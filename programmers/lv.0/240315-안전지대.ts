//https://school.programmers.co.kr/learn/courses/30/lessons/120866
export {};

function solution(board: number[][]): number {
  const len: number = board.length;
  const range: number[][] = [
    [0, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, 0],
    [1, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  const dangerZone: Set<string> = new Set();
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 1) {
        range.forEach((v) => {
          const [col, row] = [i + v[0], j + v[1]];
          if (col >= 0 && col < len && row >= 0 && row < len) {
            dangerZone.add(col + " " + row);
          }
        });
      }
    }
  }
  return len * len - dangerZone.size;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); //16
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
); //13
console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
); //0
