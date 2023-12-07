/**
 * 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지
 */
export {};

// function solution(s: string): number {
//   let count: number = 0;
//   for (const x of s) {
//     if (x === x.toUpperCase()) {
//       count++;
//     }
//   }
//   return count;
// }

function solution(s: string): number {
  let count: number = 0;
  for (const x of s) {
    let char: number = x.charCodeAt(0);
    if (char >= 65 && char <= 90) {
      count++;
    }
  }
  return count;
}

console.log(solution("KoreaTimeGood")); //3

//대문자 아스키코드 범위 : A(65) ~ Z(90)
//소문자 아스키코드 범위 : a(97) ~ z(122)
