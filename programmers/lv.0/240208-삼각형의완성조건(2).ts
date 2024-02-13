// https://school.programmers.co.kr/learn/courses/30/lessons/120868
export {};

function solution(sides: number[]): number {
  return Math.min(...sides) * 2 - 1;
}

console.log(solution([1, 2])); //1
console.log(solution([3, 6])); //5
console.log(solution([11, 7])); //13
