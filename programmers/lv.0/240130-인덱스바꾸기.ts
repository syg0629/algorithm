//https://school.programmers.co.kr/learn/courses/30/lessons/120895
export {};

function solution(my_string: string, num1: number, num2: number): string {
  const characters: string[] = [...my_string];
  characters[num1] = my_string[num2];
  characters[num2] = my_string[num1];
  return characters.join("");
}

console.log(solution("hello", 1, 2)); //"hlelo"
console.log(solution("I love you", 3, 6)); //"I l veoyou"
