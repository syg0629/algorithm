//https://school.programmers.co.kr/learn/courses/30/lessons/142086
export {};

// function solution(s: string): number[] {
//   let answer: number[] = [];
//   let dupCheck: string[] = [];
//   for (let x of s) {
//     if (!dupCheck.includes(x)) {
//       answer.push(-1);
//     } else {
//       answer.push(dupCheck.length - dupCheck.lastIndexOf(x));
//     }
//     dupCheck.push(x);
//   }
//   return answer;
// }

//타입스크립트는 string 타입의 key를 허용하지 않음
// function solution(s: string): number[] {
//   const answer: number[] = [];
//   const distanceChk = {};
//   for (const [index, value] of Object.entries(s)) {
//     if (distanceChk[value] === undefined) {
//       answer.push(-1);
//     } else {
//       answer.push(index - distanceChk[value]);
//     }
//     distanceChk[value] = index;
//   }
//   return answer;
// }

function solution(s: string): number[] {
  const answer: number[] = [];
  const distanceChk: Record<string, number> = {};
  for (const [index, value] of Object.entries(s)) {
    if (distanceChk[value] === undefined) {
      answer.push(-1);
    } else {
      answer.push(Number(index) - distanceChk[value]);
    }
    distanceChk[value] = Number(index);
  }
  return answer;
}

console.log(solution("banana")); //[-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); //[-1, -1, 1, -1, -1, -1]
