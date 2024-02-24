//https://school.programmers.co.kr/learn/courses/30/lessons/120871
export {};

function solution(n: number): number {
  let answer: number = 0;
  for (let i = 1; i <= n; i++) {
    answer++;
    //i가 9일 때 answer는 12. answer++되면 answer는 13이라서 또 answer++되게 while문에 걸려야 함
    while (answer % 3 === 0 || answer.toString().includes("3")) {
      answer++;
    }
  }
  return answer;
}
console.log(solution(15)); //25
console.log(solution(40)); //76
