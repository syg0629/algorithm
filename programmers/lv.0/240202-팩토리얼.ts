//https://school.programmers.co.kr/learn/courses/30/lessons/120848
export {};

// function solution(n: number): number {
//   return factorial(n, 1, 1);
// }

// function factorial(n: number, answer: number, curFactorial: number): number {
//   curFactorial *= answer;
//   if (curFactorial > n) {
//     return answer - 1;
//   }
//   return factorial(n, answer + 1, curFactorial);
// }

function solution(n: number): number {
  return factorial(n, 1);
}

function factorial(n: number, answer: number): number {
  if (answer > n) {
    return answer - 1;
  }
  return factorial(n / answer, answer + 1);
}

console.log(solution(3628800)); //10
console.log(solution(7)); //3
