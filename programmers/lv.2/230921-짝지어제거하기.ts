// https://school.programmers.co.kr/learn/courses/30/lessons/12973
export {};

function solution(s: string): number {
  let arr = [s[0]];
  const splitedS = s.split("");

  for (let i = 1; i < splitedS.length; i++) {
    arr.at(-1) === splitedS[i] ? arr.pop() : arr.push(splitedS[i]);
  }
  return arr.length === 0 ? 1 : 0;
}

console.log(solution("baabaa")); //1
console.log(solution("cdcd")); //0
