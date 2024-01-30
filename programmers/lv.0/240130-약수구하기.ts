//https://school.programmers.co.kr/learn/courses/30/lessons/120897
export {};

function solution(n: number): number[] {
  const divisors: number[] = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

console.log(solution(24)); //[1, 2, 3, 4, 6, 8, 12, 24]
console.log(solution(29)); //[1, 29]
