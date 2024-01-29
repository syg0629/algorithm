//https://school.programmers.co.kr/learn/courses/30/lessons/120909
export {};

function solution(n: number): number {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

console.log(solution(144)); //1
console.log(solution(976)); //2
