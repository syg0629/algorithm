//https://school.programmers.co.kr/learn/courses/30/lessons/120583
export {};

function solution(array: number[], n: number): number {
  return array.filter((x) => x === n).length;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1)); //2
console.log(solution([0, 2, 3, 4], 1)); //0
