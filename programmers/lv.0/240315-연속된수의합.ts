//https://school.programmers.co.kr/learn/courses/30/lessons/120923
export {};

function solution(num: number, total: number): number[] {
  const avg: number = Math.ceil(total / num);
  const startNum: number = avg - Math.trunc(num / 2);
  const answer: number[] = [];
  for (let i = 0; i < num; i++) {
    answer.push(startNum + i);
  }
  return answer;
}

console.log(solution(3, 12)); //[3, 4, 5]
console.log(solution(5, 15)); //[1, 2, 3, 4, 5]
console.log(solution(4, 14)); //[2, 3, 4, 5]
console.log(solution(5, 5)); //[-1, 0, 1, 2, 3]
