//https://school.programmers.co.kr/learn/courses/30/lessons/120836
export {};

function solution(n: number): number {
  let cnt: number = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      cnt++;
    }
  }
  return cnt;
}

console.log(solution(20)); //6
console.log(solution(100)); //9
