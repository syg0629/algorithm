//https://school.programmers.co.kr/learn/courses/30/lessons/92335
export {};

function solution(n: number, k: number): number {
  let count: number = 0;
  const candidates: number[] = n.toString(k).split("0").map(Number);

  for (const x of candidates) {
    if (isPrime(x)) count++;
  }
  return count;
}

function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(solution(437674, 3)); //3
console.log(solution(110011, 10)); //2
