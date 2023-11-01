//https://school.programmers.co.kr/learn/courses/30/lessons/135808
export {};

function solution(k: number, m: number, score: number[]): number {
  let answer: number = 0;
  score.sort((a: number, b: number) => b - a);
  const box: number = Math.floor(score.length / m);

  for (let i = 1; i <= box; i++) {
    answer += score[m * i - 1] * m;
  }
  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); //8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); //33
