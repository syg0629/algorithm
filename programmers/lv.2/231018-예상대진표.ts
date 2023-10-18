//https://school.programmers.co.kr/learn/courses/30/lessons/12985
export {};
function solution(n: number, a: number, b: number): number {
  let answer: number = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  return answer;
}

console.log(solution(4, 2, 3)); //2
console.log(solution(8, 4, 7)); //3
console.log(solution(8, 7, 8)); //1
console.log(solution(16, 1, 16)); //4
console.log(solution(16, 6, 16)); //4
console.log(solution(16, 9, 16)); //3
console.log(solution(16, 10, 16)); //3
console.log(solution(16, 7, 8)); //1
