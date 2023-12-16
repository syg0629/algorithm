/**
 * 두 배열을 오름차순으로 합쳐 출력
 */
export {};

//이 방법보단 아래 방법이 시간복잡도가 더 좋음
// sort = nlogn 시간복잡도
// function solution(arr1: number[], arr2: number[]): number[] {
//   const concatArr = arr1.concat(arr2).sort((x, y) => x - y);
//   return concatArr;
// }

function solution(arr1: number[], arr2: number[]): number[] {
  const answer: number[] = [];
  const n: number = arr1.length;
  const m: number = arr2.length;
  let p1: number = 0;
  let p2: number = 0;

  while (p1 < n && p2 < m) {
    //arr1[p1]값을 푸쉬하고 p1++
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) {
    answer.push(arr1[p1++]);
  }
  while (p2 < m) {
    answer.push(arr2[p2++]);
  }
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b)); //[ 1, 2, 3, 3, 5, 6, 7, 9 ]
