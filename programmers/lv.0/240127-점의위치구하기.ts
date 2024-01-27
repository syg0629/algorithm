//https://school.programmers.co.kr/learn/courses/30/lessons/120841
export {};

function solution(dot: number[]): number | undefined {
  if (dot.length >= 2 && dot[0] !== undefined && dot[1] !== undefined) {
    if (dot[0] > 0 && dot[1] > 0) {
      return 1;
    } else if (dot[0] < 0 && dot[1] > 0) {
      return 2;
    } else if (dot[0] < 0 && dot[1] < 0) {
      return 3;
    } else return 4;
  }
}

console.log(solution([2, 4])); //1
console.log(solution([-7, 9])); //2
