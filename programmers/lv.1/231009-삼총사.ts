//https://school.programmers.co.kr/learn/courses/30/lessons/131705
export {};

function* combination<T>(xs: T[], remainingPicks: number): Iterable<T[]> {
  if (remainingPicks === 0) yield [];
  for (const [i, x] of xs.entries()) {
    for (const y of combination(xs.slice(i + 1), remainingPicks - 1)) {
      yield [x, ...y];
    }
  }
}

function solution(number: number[]): number {
  let count: number = 0;
  for (const x of combination(number, 3)) {
    if (x.reduce((x, y) => x + y, 0) === 0) {
      count++;
    }
  }
  return count;
}

console.log(solution([-2, 3, 0, 2, -5])); //2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); //5
console.log(solution([-1, 1, -1, 1])); //0
