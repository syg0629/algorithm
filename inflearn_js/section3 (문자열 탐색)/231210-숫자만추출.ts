/**
 * 문자와 숫자가 섞여있는 문자열이 주어짐. 그 중 숫자만 추출
 * 그 순서대로 자연수를 만듬
 */
export {};

// function solution(str: string): number {
//   const regExp = /\d/g;
//   const matchedStr = str.match(regExp);
//   if (matchedStr) return parseInt(matchedStr.join(""));
//   return 0;
// }

function solution(str: string): number {
  let answer = "";
  for (const x of str) {
    if (!isNaN(Number(x))) {
      answer += x;
    }
  }
  return Number(answer);
}

console.log(solution("g0en2T0s8eSoft")); //208
