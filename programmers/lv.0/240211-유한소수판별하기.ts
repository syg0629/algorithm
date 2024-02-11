//https://school.programmers.co.kr/learn/courses/30/lessons/120878
export {};

function solution(a: number, b: number): number {
  //최대공약수
  let gcd: number = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }

  b /= gcd;

  while (b % 2 === 0) b = b / 2;
  while (b % 5 === 0) b = b / 5;

  return b === 1 ? 1 : 2;
}

console.log(solution(7, 20)); //1
console.log(solution(11, 22)); //1
console.log(solution(12, 21)); //2
console.log(solution(30, 6)); //1
