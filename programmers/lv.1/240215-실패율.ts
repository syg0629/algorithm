//https://school.programmers.co.kr/learn/courses/30/lessons/42889
export {};

//실패율 : 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
//전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
function solution(N: number, stages: number[]): number[] {
  let answer: number[] = [];
  const failureLates: [number, number][] = [];
  for (let i = 1; i <= N; i++) {
    const reach = stages.filter((x) => x >= i).length;
    const clear = stages.filter((x) => x === i).length;
    failureLates.push([i, clear / reach]);
  }
  answer = failureLates
    .sort((a: number[], b: number[]) => b[1] - a[1])
    .map((x) => x[0]);
  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); //[4,1,2,3]
