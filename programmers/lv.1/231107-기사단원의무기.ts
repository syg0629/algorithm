//https://school.programmers.co.kr/learn/courses/30/lessons/136798
export {};

function solution(number: number, limit: number, power: number): number {
  let sum: number = 0;
  for (let i = 1; i <= number; i++) {
    let divisorCnt: number = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) divisorCnt++;
        else divisorCnt += 2;
      }
    }
    if (limit < divisorCnt) {
      divisorCnt = power;
    }
    sum += divisorCnt;
  }
  return sum;
}

console.log(solution(5, 3, 2)); //10
console.log(solution(10, 3, 2)); //21
