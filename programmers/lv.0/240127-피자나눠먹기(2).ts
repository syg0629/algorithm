//https://school.programmers.co.kr/learn/courses/30/lessons/120815
export {};

function solution(n: number): number {
  let pizza: number = 6;
  while (pizza % n !== 0) {
    pizza += 6;
  }
  return pizza / 6;
}

console.log(solution(6)); //1
console.log(solution(10)); //5
console.log(solution(4)); //2
