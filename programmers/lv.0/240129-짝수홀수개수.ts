//
export {};

function solution(num_list: number[]): number[] {
  let oddCnt = 0;
  let evenCnt = 0;
  for (const x of num_list) {
    if (x % 2 === 0) {
      evenCnt++;
    } else {
      oddCnt++;
    }
  }
  return [evenCnt, oddCnt];
}

console.log(solution([1, 2, 3, 4, 5])); //[2, 3]
console.log(solution([1, 3, 5, 7])); //[0, 4]
