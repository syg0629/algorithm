// https://school.programmers.co.kr/learn/courses/30/lessons/12919
export {};

function solution(seoul: string[]): string {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

console.log(solution(["Jane", "Kim"])); //"김서방은 1에 있다"
