//https://school.programmers.co.kr/learn/courses/30/lessons/120839
export {};

function solution(rsp: string): string {
  const rspCombi: Record<string, string> = { "2": "0", "0": "5", "5": "2" };
  const answer = [...rsp].map((x) => rspCombi[x]).join("");
  return answer 
}

console.log(solution("2")); //"0"
console.log(solution("205")); //"052"
