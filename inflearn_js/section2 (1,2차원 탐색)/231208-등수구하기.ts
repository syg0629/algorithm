/*
 * N(1<=N<=100)명의 학생 점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력
 */
export {};

function solution(arr: number[]): number[] {
  const grade: number[] = [];
  const sorted: number[] = [...arr].sort((x, y) => y - x);
  for (const x of arr) {
    grade.push(sorted.indexOf(x) + 1);
  }
  return grade;
}

// function solution(arr: number[]): number[] {
//   let n: number = arr.length;
//   let answer: number[] = Array.from({ length: n }, () => 1);
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[j] > arr[i]) answer[i]++;
//     }
//   }
//   return answer;
// }

console.log(solution([87, 89, 92, 100, 76])); //[ 4, 3, 2, 1, 5 ]
console.log(solution([92, 92, 92, 80])); //[ 1, 1, 1, 4 ]
