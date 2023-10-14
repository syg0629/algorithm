//https://school.programmers.co.kr/learn/courses/30/lessons/132267
export {};

/*
a : 콜라를 받기 위해 마트에 주어야 하는 병 수 
b : 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 
n : 상빈이가 가지고 있는 빈 병의 개수 
*/

function solution(a: number, b: number, n: number): number {
  let answer: number = 0;
  while (n >= a) {
    const exchangedCola = Math.floor(n / a) * b;
    answer += exchangedCola;
    n = exchangedCola + (n % a);
  }
  return answer;
}

console.log(solution(2, 1, 20)); //19
console.log(solution(3, 1, 20)); //9
console.log(solution(5, 3, 21)); //27
console.log(solution(3, 2, 20)); //36
