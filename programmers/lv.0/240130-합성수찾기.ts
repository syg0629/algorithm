//
export {};

function solution(n: number): number {
  let cnt: number = 0;
  for (let i = 1; i <= n; i++) {
    if (isNotPrime(i)) {
      cnt++;
    }
  }
  return cnt;
}

function isNotPrime(num: number): boolean {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return true;
    }
  }
  return false;
}

console.log(solution(10)); //5
console.log(solution(15)); //8
