/**
 * N(1 <= N <= 100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력
 * 첫 번째 수는 무조건 출력
 * 자신의 바로 앞 수 보다 큰 수만 한 줄 출력
 */
export {};

function solution(arr: number[]) {
  const big: number[] = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) big.push(arr[i + 1]);
  }
  return big;
}

console.log(solution([7, 3, 9, 5, 6, 12])); //[7, 9, 6, 12]
