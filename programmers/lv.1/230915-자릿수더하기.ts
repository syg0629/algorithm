//https://school.programmers.co.kr/learn/courses/30/lessons/12931
//230930 - 성능 저하 원인 분석

// function solution(n) {
//   return String(n)
//     .split("")
//     .reduce((x, y) => x + Number(y), 0);
// }
export {};

function solution(n: number): number {
  return String(n)
    .split("")
    .map(Number)
    .reduce((x, y) => x + y);
}

console.log(solution(123)); //6
console.log(solution(987)); //24
