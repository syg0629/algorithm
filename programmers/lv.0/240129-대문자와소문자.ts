//https://school.programmers.co.kr/learn/courses/30/lessons/120893
export {};

function solution(my_string: string): string {
  let letterCaseConversion: string = "";
  for (const x of my_string) {
    x === x.toUpperCase()
      ? (letterCaseConversion += x.toLowerCase())
      : (letterCaseConversion += x.toUpperCase());
  }
  return letterCaseConversion;
}

console.log(solution("cccCCC")); //"CCCccc"
console.log(solution("abCdEfghIJ")); //"ABcDeFGHij"
