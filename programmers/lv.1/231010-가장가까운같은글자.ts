//https://school.programmers.co.kr/learn/courses/30/lessons/142086
export {};

function solution(s: string): number[] {
  const answer: number[] = [];
  const lastIndices: Map<string, number> = new Map();
  for (const [index, value] of s.split("").entries()) {
    const lastIndex: number | undefined = lastIndices.get(value);
    if (lastIndex === undefined) {
      answer.push(-1);
    } else {
      answer.push(index - lastIndex);
    }
    lastIndices.set(value, index);
  }
  return answer;
}

console.log(solution("banana")); //[-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); //[-1, -1, 1, -1, -1, -1]
