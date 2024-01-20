//https://school.programmers.co.kr/learn/courses/30/lessons/42586
export {};

function solution(progresses: number[], speeds: number[]): number[] {
  const answer: number[] = [];
  const workingDay: number[] = [];
  progresses.map((x, i) => workingDay.push(Math.ceil((100 - x) / speeds[i])));
  let maxDay: number = workingDay[0];
  let cnt: number = 1;
  for (let i = 1; i < workingDay.length; i++) {
    if (workingDay[i] <= maxDay) {
      cnt++;
    } else {
      maxDay = workingDay[i];
      answer.push(cnt);
      cnt = 1;
    }
  }
  answer.push(cnt);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); //[2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //[1, 3, 2]
