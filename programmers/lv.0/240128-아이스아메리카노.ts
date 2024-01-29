//https://school.programmers.co.kr/learn/courses/30/lessons/120819
export {};

function solution(money: number): number[] {
  return [Math.floor(money / 5500), money % 5500];
}

console.log(solution(5500)); //[1, 0]
console.log(solution(15000)); //[2, 4000]
