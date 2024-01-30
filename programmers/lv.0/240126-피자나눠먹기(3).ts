//https://school.programmers.co.kr/learn/courses/30/lessons/120816
export {};

function solution(slice: number, n: number): number {
  return Math.ceil(n / slice);
}

console.log(solution(7, 10)); //2
console.log(solution(4, 12)); //3
