//https://school.programmers.co.kr/learn/courses/30/lessons/42586
export {};

function solution(progresses: number[], speeds: number[]): number[] {
  const answer: number[] = [];
  const requiredDays: number[] = progresses.map((x, i) =>
    Math.ceil((100 - x) / speeds[i])
  );
  let currentTarget: number = requiredDays[0];
  let cnt: number = 0;
  for (const x of requiredDays) {
    if (x <= currentTarget) {
      cnt++;
    } else {
      currentTarget = x;
      answer.push(cnt);
      cnt = 1;
    }
  }
  answer.push(cnt);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); //[2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //[1, 3, 2]
