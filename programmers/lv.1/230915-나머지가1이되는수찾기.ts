//https://school.programmers.co.kr/learn/courses/30/lessons/87389
//230930 - 가장 작은 '자연수' 조건 존재
export {};

function solution(n: number) {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) return i;
  }
}

console.log(solution(10)); //3
console.log(solution(12)); //11
