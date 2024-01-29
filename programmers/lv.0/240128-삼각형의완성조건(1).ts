//https://school.programmers.co.kr/learn/courses/30/lessons/120889
export {};

function solution(sides: number[]): number {
  sides.sort((a, b) => b - a);
  if (sides[0] < sides[1] + sides[2]) {
    return 1;
  }
  return 2;
}

console.log(solution([1, 2, 3])); //2
console.log(solution([3, 6, 2])); //2
console.log(solution([199, 72, 222])); //1
