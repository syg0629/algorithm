/**
 * 지도 정도가 N*N 격자판
 * 각 격자에는 그 지역의 높이가 쓰여져 있음
 * 각 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역
 * 봉우리 지역이 몇개 있는지 알아내라
 * 격자 가장자리는 0으로 초기화
 */
export {};

function solution(arr: number[]): number {
  let answer: number = 0;
  let n = arr.length;
  // 12시 3시 6시 9시
  let dx: number[] = [-1, 0, 1, 0];
  let dy: number[] = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag: number = 1;
      for (let k = 0; k < 4; k++) {
        //행 좌표
        let nx: number = i + dx[k];
        //열 좌표
        let ny: number = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          //상하좌우 값이 지금 값보다 크거나 같으면 봉우리가 아님.
          //봉우리가 아님이 판명돠면 더 돌 필요 없으니 break;
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
); //10
