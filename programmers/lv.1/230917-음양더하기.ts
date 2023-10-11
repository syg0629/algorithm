//https://school.programmers.co.kr/learn/courses/30/lessons/76501
export {};

function solution(absolutes: number[], signs: Boolean[]): number {
  return absolutes.reduce(
    (x: number, y: number, i: number) => x + y * (signs[i] ? 1 : -1),
    0
  );
}

console.log(solution([4, 7, 12], [true, false, true])); //9
console.log(solution([1, 2, 3], [false, false, true])); //0
