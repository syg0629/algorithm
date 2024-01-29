//https://school.programmers.co.kr/learn/courses/30/lessons/120851
export {};

function solution(my_string: string): number {
  const regExp = /\d/g;
  return my_string
    .match(regExp)!
    .map(Number)
    .reduce((a, b) => a + b, 0);
}

console.log(solution("aAb1B2cC34oOp")); //10
console.log(solution("1a2b3c4d123")); //16
