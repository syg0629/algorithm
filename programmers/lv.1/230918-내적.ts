//https://school.programmers.co.kr/learn/courses/30/lessons/70128
export {};

function solution(a: number[], b: number[]): number {
  return a.reduce((x: number, y: number, i: number) => x + y * b[i], 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); //3
console.log(solution([-1, 0, 1], [1, 0, -1])); //-2
