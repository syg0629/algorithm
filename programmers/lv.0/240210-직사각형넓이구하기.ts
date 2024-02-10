//https://school.programmers.co.kr/learn/courses/30/lessons/120860
export {};

function solution(dots: number[][]): number {
  dots.sort((x: number[], y: number[]) => x[0] - y[0]);
  return Math.abs(dots[0][0] - dots[2][0]) * Math.abs(dots[0][1] - dots[1][1]);
}

//prettier-ignore
console.log(solution([[1, 1], [2, 1], [2, 2], [1, 2]]	)); //1
//prettier-ignore
console.log(solution([[-1, -1], [1, 1], [1, -1], [-1, 1]]	)); //4
