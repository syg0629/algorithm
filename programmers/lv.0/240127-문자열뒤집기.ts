//https://school.programmers.co.kr/learn/courses/30/lessons/120822
export {};

function solution(my_string: string): string {
  return [...my_string].reverse().join("");
}

console.log(solution("jaron")); //"noraj"
console.log(solution("bread")); //"daerb"
