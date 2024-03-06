//https://school.programmers.co.kr/learn/courses/30/lessons/120924
export {};

function solution(common: number[]): number {
  const diff1: number = common[1] - common[0];
  const diff2: number = common[2] - common[1];
  const lastVal: number = common.at(-1)!;

  if (diff1 === diff2) {
    return lastVal + diff1;
  } else {
    return (lastVal * common[1]) / common[0];
  }
}

console.log(solution([1, 2, 3, 4])); //5
console.log(solution([2, 4, 8])); //16
console.log(solution([2, 4, 6])); //8
console.log(solution([-2, 0, 2])); //4
console.log(solution([-16, -8, -4])); //-2
console.log(solution([-1, 2, -4])); //8
