//https://school.programmers.co.kr/learn/courses/30/lessons/12954
export {};

import _ from "lodash";

function solution(x: number, n: number): number[] {
  return _.range(1, n + 1).map((i: number) => i * x);
}

console.log(solution(2, 5)); //[2,4,6,8,10]
console.log(solution(4, 3)); //[4,8,12]
console.log(solution(-4, 2)); //[-4, -8]
