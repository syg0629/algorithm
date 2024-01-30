//https://school.programmers.co.kr/learn/courses/30/lessons/120893
export {};

function solution(my_string: string): string {
  const answer = [...my_string]
    .map((x) => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .join("");
  return answer;
}

console.log(solution("cccCCC")); //"CCCccc"
console.log(solution("abCdEfghIJ")); //"ABcDeFGHij"
