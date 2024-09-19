//https://school.programmers.co.kr/learn/courses/30/lessons/87390
export {};

function solution(n: number, left: number, right: number): number[] {
  const answer: number[] = [];
  while (left <= right) {
    answer.push(Math.max(Math.floor(left / n), left % n) + 1);
    left++;
  }
  return answer;
}

console.log(solution(3, 2, 5)); //[(3, 2, 2, 3)];
console.log(solution(4, 7, 14)); //[(4, 3, 3, 3, 4, 4, 4, 4)];
