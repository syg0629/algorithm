// https://school.programmers.co.kr/learn/courses/30/lessons/12906
export {};

// function solution(arr: number[]): number[] {
//   let answer: number[] = [];
//   arr.forEach((_, i) => (arr[i] !== arr[i + 1] ? answer.push(arr[i]) : ""));
//   return answer;
// }

function solution(arr: number[]): number[] {
  return arr.filter((_, i: number) => arr[i] !== arr[i + 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); //[1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); //[4,3]
