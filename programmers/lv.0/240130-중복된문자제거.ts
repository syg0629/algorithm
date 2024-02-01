//https://school.programmers.co.kr/learn/courses/30/lessons/120888
export {};

function solution(my_string: string): string {
  const set: Set<string> = new Set(my_string);
  return [...set].join("");
}

console.log(solution("people")); //"peol"
console.log(solution("We are the world")); //"We arthwold"
