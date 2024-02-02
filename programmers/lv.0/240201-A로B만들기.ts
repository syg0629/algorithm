//https://school.programmers.co.kr/learn/courses/30/lessons/120886
export {};

function solution(before: string, after: string): number {
  return [...before].sort().join("") === [...after].sort().join("") ? 1 : 0;
}

console.log(solution("olleh", "hello")); //1
console.log(solution("allpe", "apple")); //0
console.log(solution("wrong", "wrogn")); //1
