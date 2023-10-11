//https://school.programmers.co.kr/learn/courses/30/lessons/12918
export {};

function solution(s: string): boolean {
  let reg: RegExp = /^\d{4}$|^\d{6}$/;
  return reg.test(s);
}

console.log(solution("a234")); //false
console.log(solution("1234")); //true
