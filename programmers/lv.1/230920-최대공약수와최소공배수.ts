//https://school.programmers.co.kr/learn/courses/30/lessons/12940
export {};

function solution(n: number, m: number): number[] {
  let a: number[] = [n, m];
  a.sort((a: number, b: number) => b - a);
  for (let i: number = a[1]; i > 0; i--) {
    if (a[0] % i === 0 && a[1] % i === 0) return [i, (a[0] * a[1]) / i];
  }
  return [];
}

console.log(solution(3, 12)); //[3, 12]
console.log(solution(2, 5)); //[1, 10]
