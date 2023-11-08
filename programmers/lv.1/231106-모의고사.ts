//https://school.programmers.co.kr/learn/courses/30/lessons/42840
export {};

function solution(answers: number[]): number[] {
  const ranking: number[] = [];
  const studentsAns: number[][] = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const studentsCorAnsCnt: number[] = studentsAns.map((x: number[]) => {
    let correctAnsCnt: number = 0;
    answers.forEach((v: number, i: number) => {
      if (v === x[i % x.length]) correctAnsCnt++;
    });
    return correctAnsCnt;
  });

  const bestScore: number = Math.max(...studentsCorAnsCnt);
  for (const [i, x] of studentsCorAnsCnt.entries()) {
    if (bestScore === x) {
      ranking.push(i + 1);
    }
  }
  return ranking;
}

console.log(solution([1, 2, 3, 4, 5])); //[1]
console.log(solution([1, 3, 2, 4, 2])); //[1,2,3]
console.log(solution([1, 1, 1, 1, 1, 1])); //[1, 3]
console.log(solution([3, 2, 2, 3])); //[2]
