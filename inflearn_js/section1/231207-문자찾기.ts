/**
 * 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지
 */
export {};

function solution(s: string, t: string) {
  let count: number = 0;
  for (const x of s) {
    if (x === t) {
      count++;
    }
  }
  return count;
}

console.log(solution("COMPUTERPROGRAMMING", "R")); //3
