//https://school.programmers.co.kr/learn/courses/30/lessons/120852
export {};

function solution(n: number): number[] {
  const answer: Set<number> = new Set();
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      answer.add(i);
      n /= i;
    }
  }
  return [...answer];
}

console.log(solution(12)); //[2, 3];
console.log(solution(17)); //[17];
console.log(solution(420)); //[2, 3, 5, 7];
