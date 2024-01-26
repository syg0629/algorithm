//https://school.programmers.co.kr/learn/courses/30/lessons/120908
export {};

function solution(str1: string, str2: string): number {
  const isStr2InStr1: boolean = str1.includes(str2);
  return isStr2InStr1 ? 1 : 2;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD")); //1
console.log(solution("ppprrrogrammers", "pppp")); //2
console.log(solution("AbcAbcA", "AAA")); //2
