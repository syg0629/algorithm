//https://school.programmers.co.kr/learn/courses/30/lessons/120891
export {};

function solution(order: number): number {
  return [...order.toString()]
    .map(Number)
    .filter((x) => x === 3 || x === 6 || x === 9).length;
}

console.log(solution(3)); //1
console.log(solution(29423)); //2
