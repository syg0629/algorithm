// https://school.programmers.co.kr/learn/courses/30/lessons/77884
export {};

function solution(left: number, right: number): number {
  let sum = 0;
  while (left <= right) {
    if (Number.isInteger(Math.sqrt(left))) {
      sum += left++ * -1;
    } else {
      sum += left++;
    }
  }
  return sum;
}

console.log(solution(13, 17)); //43
console.log(solution(24, 27)); //52
