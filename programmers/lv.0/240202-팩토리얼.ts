//https://school.programmers.co.kr/learn/courses/30/lessons/120848
export {};

function* factorial(): Generator<number> {
  let curFactorial: number = 1;
  let num: number = 1;
  while (true) {
    yield curFactorial;
    num++;
    curFactorial *= num;
  }
}

function solution(n: number): number {
  let answer: number = 0;
  for (const x of factorial()) {
    if (x > n) {
      break;
    }
    ++answer;
  }
  return answer;
}

console.log(solution(3628800)); //10
console.log(solution(7)); //3
