/**
 * A, B 두 사람이 가위바위보 게임
 * 총 N번의 게임을 하여 A가 이기면 A를 출력
 * B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력
 * 가위, 바위, 보의 정보는 1: 가위, 2:바위, 3:보
 * 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력
 */
export {};

function solution(a: number[], b: number[]): string {
  let answer: string = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1 && b[i] === 2) {
      answer += "B";
    } else if (a[i] === 2 && b[i] === 3) {
      answer += "B";
    } else if (a[i] === 3 && b[i] === 1) {
      answer += "B";
    } else if (a[i] === b[i]) {
      answer += "D";
    } else {
      answer += "A";
    }
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b)); //"A B A B D"
