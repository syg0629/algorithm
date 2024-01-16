//https://school.programmers.co.kr/learn/courses/30/lessons/12949
export {};

function solution(arr1: number[][], arr2: number[][]): number[][] {
  const answer: number[][] = [];
  for (let i = 0; i < arr1.length; i++) {
    const multiplyResult: number[] = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let elemAdd: number = 0;
      for (let k = 0; k < arr2.length; k++) {
        elemAdd += arr1[i][k] * arr2[k][j];
      }
      multiplyResult.push(elemAdd);
    }
    answer.push(multiplyResult);
  }
  return answer;
}

//prettier-ignore
console.log(solution([[1, 4], [3, 2], [4, 1]]	, [[3, 3], [3, 3]])); //[[15, 15], [15, 15], [15, 15]]
//prettier-ignore
console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]]	, [[5, 4, 3], [2, 4, 1], [3, 1, 1]]	)); //[[22, 22, 11], [36, 28, 18], [29, 20, 14]]
