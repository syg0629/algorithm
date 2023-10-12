//https://school.programmers.co.kr/learn/courses/30/lessons/142086
export {};

function solution(s: string): number[] {
  let answer: number[] = [];
  let dupCheck: string[] = [];
  for (let x of s) {
    if (!dupCheck.includes(x)) {
      answer.push(-1);
    } else {
      answer.push(dupCheck.length - dupCheck.lastIndexOf(x));
    }
    dupCheck.push(x);
  }
  return answer;
}

console.log(solution("banana")); //[-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); //[-1, -1, 1, -1, -1, -1]
