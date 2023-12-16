/**
 * A, B 두개의 집합이 주어지면 공통 원소를 추출, 오름차순으로 출력
 */
export {};

// function solution(arr1: number[], arr2: number[]): number[] {
//   const concatA: number[] = arr1.concat(arr2).sort((x, y) => x - y);
//   const answer: number[] = [];
//   for (let i = 0; i < concatA.length; i++) {
//     if (concatA[i] === concatA[i + 1]) {
//       answer.push(concatA[i]);
//     }
//   }
//   return answer;
// }

//투포인터로 풀어보기
function solution(arr1: number[], arr2: number[]): number[] {
  const answer: number[] = [];
  arr1.sort((a: number, b: number) => a - b);
  arr2.sort((a: number, b: number) => a - b);
  let p1: number = 0;
  let p2: number = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) p1++;
    else if (arr1[p1] > arr2[p2]) p2++;
    else answer.push(arr1[p1++]);
  }
  return answer;
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8])); //[2,3,5]
