//https://school.programmers.co.kr/learn/courses/30/lessons/120861
export {};

function solution(keyinput: string[], board: number[]) {
  let x: number = 0;
  let y: number = 0;

  const range: number[] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

  for (const direction of keyinput) {
    switch (direction) {
      case "up":
        y++;
        break;
      case "down":
        y--;
        break;
      case "left":
        x--;
        break;
      case "right":
        x++;
        break;
    }
    if (range[0] < Math.abs(x)) {
      x = x > 0 ? range[0] : -range[0];
    }
    if (range[1] < Math.abs(y)) {
      y = y > 0 ? range[1] : -range[1];
    }
  }
  return [x, y];
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11])); //[2, 1]
console.log(solution(["down", "down", "down", "down", "down"], [7, 9])); //[0, -4]
