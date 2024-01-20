//https://school.programmers.co.kr/learn/courses/30/lessons/161989
export {};

function solution(n: number, m: number, section: number[]): number {
  let answer: number = 0;
  let painted: number = 0;
  for (const x of section) {
    if (x > painted) {
      answer++;
      painted = x + m - 1;
    }
  }
  return answer;
}

console.log(solution(8, 4, [2, 3, 6])); //2
console.log(solution(5, 4, [1, 3])); //1
console.log(solution(4, 1, [1, 2, 3, 4])); //4
