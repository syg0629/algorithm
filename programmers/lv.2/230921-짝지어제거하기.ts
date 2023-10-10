// https://school.programmers.co.kr/learn/courses/30/lessons/12973
export {};

function solution(s: string): number {
  let arr: string[] = [s[0]];
  const splitedS: string[] = s.split("");

  for (let i: number = 1; i < splitedS.length; i++) {
    arr.at(-1) === splitedS[i] ? arr.pop() : arr.push(splitedS[i]);
  }
  return arr.length === 0 ? 1 : 0;
}

console.log(solution("baabaa")); //1
console.log(solution("cdcd")); //0
