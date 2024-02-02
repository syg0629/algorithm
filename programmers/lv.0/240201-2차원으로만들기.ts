//https://school.programmers.co.kr/learn/courses/30/lessons/120842
export {};

function solution(num_list: number[], n: number): number[][] {
  const answer: number[][] = [[]];
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list.slice(i, i + n));
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2)); //[[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3)); //[[100, 95, 2], [4, 5, 6], [18, 33, 948]]
