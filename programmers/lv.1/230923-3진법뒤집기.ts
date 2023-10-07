//https://school.programmers.co.kr/learn/courses/30/lessons/68935
export {};

function solution(n: number): number {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

console.log(solution(45)); //7
console.log(solution(125)); //229
