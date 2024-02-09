//https://school.programmers.co.kr/learn/courses/30/lessons/181901
export {};

function solution(n: number, k: number): number[] {
  const answer: number[] = [];
  for (let i = k; i <= n; i += k) {
    answer.push(i);
  }
  return answer;
}

console.log(solution(10, 3)); //[3, 6, 9]
console.log(solution(15, 5)); //[5, 10, 15]
