//https://school.programmers.co.kr/learn/courses/30/lessons/120812
export {};

function solution(array: number[]) {
  const appearanceCnts: Map<number, number> = new Map();
  for (const x of array) {
    appearanceCnts.set(x, (appearanceCnts.get(x) ?? 0) + 1);
  }

  const maxCnt: number = Math.max(...appearanceCnts.values());
  let mode: number = -1;
  let cnt: number = 0;

  for (const [num, appearance] of appearanceCnts) {
    if (appearance === maxCnt) {
      mode = num;
      cnt++;
      if (cnt > 1) {
        return -1;
      }
    }
  }

  return mode;
}

console.log(solution([1, 1, 2, 2, 2])); //2
console.log(solution([1, 2, 3, 3, 3, 4])); //3
console.log(solution([1, 1, 2, 2])); //-1
console.log(solution([1])); //1
