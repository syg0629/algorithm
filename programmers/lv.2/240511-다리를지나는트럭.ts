//https://school.programmers.co.kr/learn/courses/30/lessons/42583
export {};

function solution(
  bridge_length: number,
  weight: number,
  truck_weights: number[]
): number {
  // 다리를 나타내는 배열 생성
  const bridge = new Array(bridge_length).fill(0);
  // 트럭이 다리를 건너는 시간
  let time = 0;

  while (bridge.length) {
    // bridge배열을 순회할 때마다 하나씩 제거
    bridge.shift();
    // 다리를 건널 트럭이 존재하면 실행
    if (truck_weights.length) {
      // 다리 위의 트럭 총 무게를 알기 위해 bridge배열의 총합을 sum에 저장
      const sum = bridge.reduce((a, b) => a + b, 0);
      // bridge내의 트럭과 건너야하는 첫번째 트럭의 무게를 더할 때 다리의 무게보다 작다면 bridge에 truck_wights에서 shift한 값을 push
      // 즉, 건너려고 기다리는 가장 앞의 트럭을 다리로 보냄
      if (sum + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        // 다리의 무게보다 많이 나가면 다리에 있는 하나의 트럭만 다리를 건넘
        bridge.push(0);
      }
    }
    time++;
  }
  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6])); //8
console.log(solution(100, 100, [10])); //101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); //110
