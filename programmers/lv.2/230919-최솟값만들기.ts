//https://school.programmers.co.kr/learn/courses/30/lessons/12941
export {};

function solution(A: number[], B: number[]): number {
  A = A.sort((a: number, b: number) => a - b);
  B = B.sort((a: number, b: number) => b - a);
  return A.reduce((x: number, y: number, i: number) => x + y * B[i], 0);
}

console.log(solution([1, 4, 2], [5, 4, 4])); //29
console.log(solution([1, 2], [3, 4])); //10
