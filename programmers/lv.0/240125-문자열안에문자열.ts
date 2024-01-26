//
export {};
function solution(str1: string, str2: string): number {
  const isStr2InStr1 = str1.split(str2);
  return isStr2InStr1.length === 1 ? 2 : 1;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD")); //1
console.log(solution("ppprrrogrammers", "pppp")); //2
console.log(solution("AbcAbcA", "AAA")); //2
