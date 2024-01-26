// https://school.programmers.co.kr/learn/courses/30/lessons/181896
export {};

function solution(num_list: number[]): number | undefined {
  for (const [i, x] of num_list.entries()) {
    if (x < 0) {
      return i;
    }
  }
  return -1;
}

console.log(solution([12, 4, 15, 46, 38, -2, 15])); //5
console.log(solution([13, 22, 53, 24, 15, 6])); //-1
