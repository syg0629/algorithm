//https://school.programmers.co.kr/learn/courses/30/lessons/120890
import _ from "lodash";
export {};

function solution(array: number[], n: number): number {
  const closestNum: number | undefined = _.minBy(array, (x) => Math.abs(x - n));
  return closestNum ?? 0;
}

console.log(solution([3, 10, 28], 20)); //28
console.log(solution([10, 11, 12], 13)); //12
