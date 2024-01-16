//https://school.programmers.co.kr/learn/courses/30/lessons/64061
export {};

function solution(board: number[][], moves: number[]): number {
  const box: number[] = [];
  let answer: number = 0;

  for (const x of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][x - 1] !== 0) {
        const cranePickedDoll: number = board[i][x - 1];
        board[i][x - 1] = 0;
        if (box[box.length - 1] === cranePickedDoll) {
          box.pop();
          answer += 2;
        } else {
          box.push(cranePickedDoll);
        }
        break;
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); //4
