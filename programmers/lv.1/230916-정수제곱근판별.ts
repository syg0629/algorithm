//https://school.programmers.co.kr/learn/courses/30/lessons/12934
export {};

function solution(n: number): number {
  const sqrt: number = Math.sqrt(n);
  return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}

console.log(solution(121)); //144
console.log(solution(3)); //-1
