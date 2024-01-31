//https://school.programmers.co.kr/learn/courses/30/lessons/120846
export {};

function solution(n: number): number {
  let cnt: number = 0;
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      cnt++;
    }
  }
  return n - cnt;
}

function isPrime(num: number): boolean {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(solution(10)); //5
console.log(solution(15)); //8
