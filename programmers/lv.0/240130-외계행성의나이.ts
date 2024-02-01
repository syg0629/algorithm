//https://school.programmers.co.kr/learn/courses/30/lessons/120834
export {};

function solution(age: number) {
  const ageLetters: string = "abcdefghij";
  return [...age.toString()].map((x) => [...ageLetters][Number(x)]).join("");
}

console.log(solution(23)); //"cd"
console.log(solution(51)); //"fb"
console.log(solution(100)); //"baa"
