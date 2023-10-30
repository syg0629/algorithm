//https://school.programmers.co.kr/learn/courses/30/lessons/12901
export {};

function solution(a: number, b: number): string {
  const week: string[] = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date: Date = new Date(2016, a - 1, b);
  return week[date.getDay()];
}

console.log(solution(5, 24)); //"TUE"
console.log(solution(1, 1)); //"FRI"
