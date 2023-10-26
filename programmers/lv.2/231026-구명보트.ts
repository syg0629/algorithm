//https://school.programmers.co.kr/learn/courses/30/lessons/42885
export {};

function solution(people: number[], limit: number): number {
  let answer: number = 0;
  people.sort((x: number, y: number) => x - y);

  while (people.length > 0) {
    let heavy: number | undefined = people.pop();
    if (heavy !== undefined) {
      if (heavy + people[0] <= limit) people.shift();
      answer++;
    }
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100)); //3
console.log(solution([70, 80, 50], 100)); //3
console.log(solution([30, 30, 60], 160)); //2
console.log(solution([10, 50, 100], 160)); //2
console.log(solution([40], 40)); //1
console.log(solution([40, 40, 40, 40, 50], 200)); //3
console.log(solution([60, 60, 51, 51, 100], 100)); //5
console.log(solution([40, 55, 55, 60, 60, 60, 70, 80], 100)); //7
