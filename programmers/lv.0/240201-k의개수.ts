//https://school.programmers.co.kr/learn/courses/30/lessons/120887
export {};

function solution(i: number, j: number, k: number): number {
  let cnt: number = 0;
  for (let x = i; x <= j; x++) {
    cnt += [...x.toString()]
      .map(Number)
      .reduce((y, z) => y + (z === k ? 1 : 0), 0);
  }
  return cnt;
}

console.log(solution(1, 13, 1)); //6
console.log(solution(10, 50, 5)); //5
console.log(solution(3, 10, 2)); //0
