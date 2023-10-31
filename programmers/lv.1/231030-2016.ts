//https://school.programmers.co.kr/learn/courses/30/lessons/12901
export {};

function solution(a: number, b: number): string {
  const week: string[] = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const daysOfMonths: number[] = [
    31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];
  let day: number = b + 4;
  for (let i = 0; i < a - 1; i++) {
    day += daysOfMonths[i];
  }
  return week[day % 7];
}

console.log(solution(5, 24)); //"TUE"
console.log(solution(1, 1)); //"FRI"
