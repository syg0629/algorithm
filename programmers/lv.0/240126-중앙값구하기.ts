//https://github.com/syg0629/algorithm/pull/21
export {};

function solution(array: number[]): number {
  return array
    .sort((a: number, b: number) => a - b)
    .at(Math.floor(array.length / 2))!;
}
console.log(solution([1, 2, 7, 10, 11])); //7
console.log(solution([9, -1, 0])); //0
