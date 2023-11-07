//https://school.programmers.co.kr/learn/courses/30/lessons/42840
export {};

function solution(answers: number[]): number[] {
  const ranking: number[] = [];
  const student1: number[] = [1, 2, 3, 4, 5];
  const student2: number[] = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3: number[] = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let student1CorAns: number = 0;
  let student2CorAns: number = 0;
  let student3CorAns: number = 0;

  answers.forEach((x, i) => {
    if (x === student1[i % student1.length]) student1CorAns++;
    if (x === student2[i % student2.length]) student2CorAns++;
    if (x === student3[i % student3.length]) student3CorAns++;
  });

  const bestScore: number = Math.max(
    student1CorAns,
    student2CorAns,
    student3CorAns
  );
  for (const [i, x] of [
    student1CorAns,
    student2CorAns,
    student3CorAns,
  ].entries()) {
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
