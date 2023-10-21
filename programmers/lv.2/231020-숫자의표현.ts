//https://school.programmers.co.kr/learn/courses/30/lessons/12924
export {};

function solution(n: number): number {
  let aliquot: number = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 !== 0) {
      aliquot++;
    }
  }
  return aliquot;
}

console.log(solution(15)); //4
console.log(solution(2)); //1
console.log(solution(10)); //2
console.log(solution(9)); //3
console.log(solution(7)); //2
