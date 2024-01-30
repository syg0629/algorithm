//https://school.programmers.co.kr/learn/courses/30/lessons/120904
export {};

function solution(num: number, k: number): number {
  for (const [i, v] of [...num.toString()].map(Number).entries()) {
    if (v === k) {
      return i + 1;
    }
  }
  return -1;
}

console.log(solution(29183, 1)); //3
console.log(solution(232443, 4)); //4
console.log(solution(123456, 7)); //-1
