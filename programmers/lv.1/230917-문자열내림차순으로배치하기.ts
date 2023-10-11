//https://school.programmers.co.kr/learn/courses/30/lessons/12917
export {};

function solution(s: string): string {
  return s.split("").sort().reverse().join("");
}

console.log(solution("Zbcdefg")); //"gfedcbZ"
