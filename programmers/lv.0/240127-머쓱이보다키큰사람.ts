//https://school.programmers.co.kr/learn/courses/30/lessons/120585
export {};
import _ from "lodash";

function solution(array: number[], height: number): {} {
  const test = _.countBy(array, (x) => x > height);
  return test.true || 0;
}

console.log(solution([149, 180, 192, 170], 167)); //3
console.log(solution([180, 120, 140], 190)); //0
