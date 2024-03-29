//https://school.programmers.co.kr/learn/courses/30/lessons/120923
import _ from "lodash";
export {};

function solution(num: number, total: number): number[] {
  const avg: number = Math.ceil(total / num);
  const startNum: number = avg - Math.trunc(num / 2);
  return _.range(startNum, startNum + num, 1);
}

console.log(solution(3, 12)); //[3, 4, 5]
console.log(solution(5, 15)); //[1, 2, 3, 4, 5]
console.log(solution(4, 14)); //[2, 3, 4, 5]
console.log(solution(5, 5)); //[-1, 0, 1, 2, 3]
