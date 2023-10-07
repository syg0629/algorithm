//https://school.programmers.co.kr/learn/courses/30/lessons/12948
export {};

function solution(phone_number: string): string {
  return phone_number.slice(-4).padStart(phone_number.length, "*");
}

console.log(solution("01033334444")); //"*******4444"
console.log(solution("027778888")); //"*****8888"
