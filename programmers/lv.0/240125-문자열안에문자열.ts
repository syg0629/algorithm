//https://school.programmers.co.kr/learn/courses/30/lessons/120908
export {};

function solution(str1: string, str2: string): number {
  return str1.includes(str2) ? 1 : 2;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD")); //1
console.log(solution("ppprrrogrammers", "pppp")); //2
console.log(solution("AbcAbcA", "AAA")); //2
