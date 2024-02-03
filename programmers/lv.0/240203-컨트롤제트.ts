//https://school.programmers.co.kr/learn/courses/30/lessons/120853
export {};

function solution(s: string): number {
  const numbers: number[] = s.split(" ").map(Number);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0 && !numbers[i]) {
      numbers[i] = -numbers[i - 1];
    }
  }
  return numbers.reduce((x, y) => x + y, 0);
}

console.log(solution("1 2 Z 3")); //4
console.log(solution("10 20 30 40")); //100
console.log(solution("10 Z 20 Z 1")); //1
console.log(solution("10 Z 20 Z")); //0
console.log(solution("-1 -2 -3 Z")); //-3
console.log(solution("-1 0 -3 Z")); //-1
console.log(solution("0 Z")); //0
