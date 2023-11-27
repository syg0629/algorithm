// https://school.programmers.co.kr/learn/courses/30/lessons/12980
export {};

function solution(n: number): number {
  let answer: number = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n--;
      answer++;
    }
  }
  return answer;
}

console.log(solution(5)); //2
console.log(solution(6)); //2
console.log(solution(5000)); //5
