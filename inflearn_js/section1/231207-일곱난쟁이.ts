/**
 * 아홉난쟁이의 키가 주어졌을 때 일곱 난쟁이를 찾는 프로그램
 * 일곱 난쟁이의 키의 합은 100
 */
export {};

function solution(arr: number[]): number[] {
  const sum: number = arr.reduce((x: number, y: number) => x + y, 0);
  let flag: number = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        //i를 먼저 지우면 index가 당겨져서 j에서 지워야하는게 넘어가버림
        //j부터 지우고 i를 지워야함
        arr.splice(j, 1);
        arr.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if (flag === 1) break;
  }
  return arr;
}

console.log(solution([22, 7, 21, 19, 10, 15, 25, 8, 13])); //[22, 7, 10, 15, 25, 8, 13]
console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13])); //[20, 7, 23, 19, 10, 8, 13]
