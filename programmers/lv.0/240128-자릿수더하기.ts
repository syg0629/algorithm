//https://school.programmers.co.kr/learn/courses/30/lessons/120906
export {};

function solution(n: number) {
  return [...n.toString()].map(Number).reduce((x, y) => x + y, 0);
}

console.log(solution(1234)); //10
console.log(solution(930211)); //16
