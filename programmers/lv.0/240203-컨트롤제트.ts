//https://school.programmers.co.kr/learn/courses/30/lessons/120853
export {};

function solution(s: string): number {
  const stack: string[] = [];
  for (const x of s.split(" ")) {
    if (x === "Z") {
      stack.pop();
    } else {
      stack.push(x);
    }
  }
  return stack.map(Number).reduce((x, y) => x + y, 0);
}

console.log(solution("1 2 Z 3")); //4
console.log(solution("10 20 30 40")); //100
console.log(solution("10 Z 20 Z 1")); //1
console.log(solution("10 Z 20 Z")); //0
console.log(solution("-1 -2 -3 Z")); //-3
console.log(solution("-1 0 -3 Z")); //-1
console.log(solution("0 Z")); //0
