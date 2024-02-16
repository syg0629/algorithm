//https://school.programmers.co.kr/learn/courses/30/lessons/120878
export {};

function solution(a: number, b: number): number {
  b /= gcd(a, b);

  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}

//최대공약수
const gcd = (a: number, b: number): number => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

console.log(solution(7, 20)); //1
console.log(solution(11, 22)); //1
console.log(solution(12, 21)); //2
console.log(solution(30, 6)); //1
