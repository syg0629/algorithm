/**
 * 연필 개수
 * 연필 1다스는 12자루
 * 학생 1인당 연필을 1자루씩 나눠줄 때 N명이 학생 수를 입력하면 필요한 연필 다스 수
 */
export {};

function solution(n: number): number {
  return Math.ceil(n / 12);
}

console.log(solution(25)); //3
console.log(solution(178)); //
