//https://school.programmers.co.kr/learn/courses/30/lessons/12939
export {};

function solution(s: string): string {
  const splitedS = s
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  return splitedS.shift() + " " + splitedS.pop();
}

// 리팩토링 다시 시도해 볼 것
console.log(solution("1 2 3 4")); //"1 4"
console.log(solution("-1 -2 -3 -4")); //"-4 -1"
console.log(solution("-1 -1")); //"-1 -1"
