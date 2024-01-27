//https://school.programmers.co.kr/learn/courses/30/lessons/120585
export {};

function solution(array: number[], height: number): number {
  let cnt = 0;
  for (const x of array) {
    if (height < x) {
      cnt++;
    }
  }
  return cnt;
}

console.log(solution([149, 180, 192, 170], 167)); //3
console.log(solution([180, 120, 140], 190)); //0
