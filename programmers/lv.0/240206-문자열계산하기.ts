//https://school.programmers.co.kr/learn/courses/30/lessons/120902
export {};

function solution(my_string: string): number {
  const tokens: string[] = my_string.split(" ");
  let answer: number = Number(tokens[0]);
  for (let i = 1; i < tokens.length; i += 2) {
    const nextNum = Number(tokens[i + 1]);
    answer += tokens[i] === "+" ? nextNum : -nextNum;
  }
  return answer;
}

console.log(solution("3 + 4")); //7
console.log(solution("10 + 1")); //11
console.log(solution("3 + 4 - 10 + 1")); //-2
