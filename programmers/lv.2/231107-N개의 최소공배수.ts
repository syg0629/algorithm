//https://school.programmers.co.kr/learn/courses/30/lessons/12953
export {};

//최대공약수
function gcd(x: number, y: number) {
  if (y === 0) return x;
  return gcd(y, x % y);
}

function solution(arr: number[]): number {
  return arr.reduce((x: number, y: number) => (x * y) / gcd(x, y));
}

console.log(solution([2, 6, 8, 14])); //168
console.log(solution([1, 2, 3])); //6
