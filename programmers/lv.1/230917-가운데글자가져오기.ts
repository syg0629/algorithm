//https://school.programmers.co.kr/learn/courses/30/lessons/12903
export {};

// function solution(s: string): string {
//   const halfLength = s.length / 2;
//   return s.length % 2 === 0
//     ? s.split("")[halfLength - 1] + s.split("")[halfLength]
//     : s.split("")[Math.floor(halfLength)];
// }

function solution(s: string): string {
  const mid: number = Math.floor(s.length / 2);
  return s.length % 2 === 0
    ? s.substring(mid - 1, mid + 1)
    : s.substring(mid, mid + 1);
}

console.log(solution("abcde")); //"c"
console.log(solution("qwer")); //"we"
