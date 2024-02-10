//https://school.programmers.co.kr/learn/courses/30/lessons/120882
export {};

function solution(score: number[][]): number[] {
  const answer: number[] = [];
  const averages: number[] = score.map((x: number[]) => (x[0] + x[1]) / 2);
  const ranking: number[] = [...averages].sort((a: number, b: number) => b - a);
  for (const x of averages) {
    answer.push(ranking.indexOf(x) + 1);
  }
  return answer;
}

//prettier-ignore
console.log(solution([[80, 70], [90, 50], [40, 70], [50, 80]]	)); //[1, 2, 4, 3]
//prettier-ignore
console.log(solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]	)); //[4, 4, 6, 2, 2, 1, 7]
