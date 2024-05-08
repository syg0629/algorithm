//https://school.programmers.co.kr/learn/courses/30/lessons/43238
export {};

function solution(n: number, times: number[]): number {
  // 최소, 최대값을 알기 위해 정렬
  const sorted = times.sort((x, y) => x - y);
  // 심사관이 한 명을 심사하는데 걸리는 시간 1분 이상이므로 최소 시간은 1분
  let start = 1;
  // 총 최대 심사시간 = 총 인원 * 최대 심사시간
  let end = n * sorted[sorted.length - 1];

  // 이진탐색으로 검사
  while (start <= end) {
    // mid는 최소 + 최대 시간의 중간 값
    const mid = Math.floor((start + end) / 2);
    // 배열을 순회하면서 각 심사관이 중간값 mid에서 몇 번의 심사를 할 수 있는지 계산하여 결과값을 누적
    const sum = times.reduce((x, y) => x + Math.floor(mid / y), 0);

    // 총 소요시간이 주어진 인원 수보다 작으면
    if (sum < n) {
      start = mid + 1;
      // 총 소요시간이 주어진 인원 수보다 크면
    } else {
      end = mid - 1;
    }
  }
  return start;
}

console.log(solution(6, [7, 10])); //28
