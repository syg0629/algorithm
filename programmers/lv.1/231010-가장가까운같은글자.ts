//https://school.programmers.co.kr/learn/courses/30/lessons/142086
export {};

function solution(s: string): number[] {
  const answer: number[] = [];
  const lastIndices: Record<string, number> = {};
  s.split("").map((x: string, i: number) => {
    if (lastIndices[x] === undefined) {
      answer.push(-1);
    } else {
      answer.push(i - lastIndices[x]);
    }
    lastIndices[x] = i;
  });
  return answer;
}

console.log(solution("banana")); //[-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); //[-1, -1, 1, -1, -1, -1]
