//https://school.programmers.co.kr/learn/courses/30/lessons/120904
export {};

function solution(num: number, k: number): number {
  const answer: number = [...num.toString()].findIndex((x) => Number(x) === k);
  return answer >= 0 ? answer + 1 : answer;
}

console.log(solution(29183, 1)); //3
console.log(solution(232443, 4)); //4
console.log(solution(123456, 7)); //-1
