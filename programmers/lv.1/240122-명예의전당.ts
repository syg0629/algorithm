//https://school.programmers.co.kr/learn/courses/30/lessons/138477
export {};

function solution(k: number, score: number[]): number[] {
  let orderedScores: number[] = [];
  const answer: number[] = [];

  for (const x of score) {
    orderedScores.push(x);
    orderedScores.sort((a: number, b: number) => b - a);

    if (orderedScores.length > k) {
      orderedScores = orderedScores.slice(0, k);
    }
    answer.push(orderedScores.at(-1)!);
  }

  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); //[10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); //[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
