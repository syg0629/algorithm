//https://school.programmers.co.kr/learn/courses/30/lessons/120841
export {};

function solution(dot: number[]): number {
  const [num1, num2] = dot;
  if (num1 > 0 && num2 > 0) {
    return 1;
  } else if (num1 < 0 && num2 > 0) {
    return 2;
  } else if (num1 < 0 && num2 < 0) {
    return 3;
  } else return 4;
}

console.log(solution([2, 4])); //1
console.log(solution([-7, 9])); //2
