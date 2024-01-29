//https://school.programmers.co.kr/learn/courses/30/lessons/120839
export {};

function solution(rsp: string): string {
  const map: Map<string, string> = new Map();
  map.set("2", "0");
  map.set("0", "5");
  map.set("5", "2");
  let answer: string = "";
  for (const x of rsp) {
    answer += map.get(x);
  }
  return answer;
}

console.log(solution("2")); //"0"
console.log(solution("205")); //"052"
