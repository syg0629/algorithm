//https://school.programmers.co.kr/learn/courses/30/lessons/120885
export {};

function solution(bin1: string, bin2: string): string {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

console.log(solution("10", "11")); //"101"
console.log(solution("1001", "1111")); //"11000"
