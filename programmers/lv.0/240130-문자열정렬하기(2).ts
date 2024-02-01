//https://school.programmers.co.kr/learn/courses/30/lessons/120911
export {};

function solution(my_string: string): string {
  return [...my_string.toLowerCase()].sort().join("");
}

console.log(solution("Bcad")); //"abcd"
console.log(solution("heLLo")); //"ehllo"
console.log(solution("Python")); //"hnopty"
