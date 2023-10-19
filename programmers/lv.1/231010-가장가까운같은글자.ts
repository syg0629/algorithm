//https://school.programmers.co.kr/learn/courses/30/lessons/142086
export {};

function solution(s: string): number[] {
  const answer: number[] = [];
  const lastIndices: Record<string, number> = {};
  for (const [index, value] of s.split("").entries()) {
    if (lastIndices[value] === undefined) {
      answer.push(-1);
    } else {
      answer.push(index - lastIndices[value]);
    }
    lastIndices[value] = index;
  }
  return answer;
}

console.log(solution("banana")); //[-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); //[-1, -1, 1, -1, -1, -1]
