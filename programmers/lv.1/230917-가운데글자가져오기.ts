//https://school.programmers.co.kr/learn/courses/30/lessons/12903
export {};

function solution(s: string): string {
  const halfLength = s.length / 2;
  return s.length % 2 === 0
    ? s.split("")[halfLength - 1] + s.split("")[halfLength]
    : s.split("")[Math.floor(halfLength)];
}

// 리팩토링 다시 시도해 볼 것
console.log(solution("abcde")); //"c"
console.log(solution("qwer")); //"we"
