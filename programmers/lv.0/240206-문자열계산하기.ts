//https://school.programmers.co.kr/learn/courses/30/lessons/120902
export {};

function solution(my_string: string): number {
  const tokens: string[] = my_string.split(" ");
  let answer: number = Number(tokens[0]);
  for (let i = 1; i < tokens.length; i += 2) {
    answer +=
      tokens[i] === "+" ? Number(tokens[i + 1]) : -Number(tokens[i + 1]);
  }
  return answer;
}

console.log(solution("3 + 4")); //7
console.log(solution("10 + 1")); //11
console.log(solution("3 + 4 - 10 + 1")); //-2
