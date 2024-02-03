//https://school.programmers.co.kr/learn/courses/30/lessons/120912
export {};

function solution(array: number[]): number {
  return [...array.join("")].filter((x) => x === "7").length;
}

console.log(solution([7, 77, 17])); //4
console.log(solution([10, 29])); //0
