export {};

function solution(board: number[][], moves: number[]): number {
  const box: number[] = [];
  let count: number = 0;

  moves.forEach((x) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][x - 1] !== 0) {
        let cranePosition: number = board[i][x - 1];
        board[i][x - 1] = 0;
        if (box[box.length - 1] === cranePosition) {
          box.pop();
          count += 2;
        } else {
          box.push(cranePosition);
        }
        break;
      }
    }
  });
  return count;
}

// prettier-ignore
console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4])); //4
