//https://school.programmers.co.kr/learn/courses/30/lessons/120899
export {};

function solution(hp: number): number {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}

console.log(solution(23)); //5
console.log(solution(24)); //6
console.log(solution(999)); //201
