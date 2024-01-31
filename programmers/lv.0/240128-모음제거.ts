//https://school.programmers.co.kr/learn/courses/30/lessons/120849
export {};

function solution(my_string: string): string {
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  const answer: string = [...my_string]
    .filter((x) => !vowels.includes(x))
    .join("");
  return answer;
}

console.log(solution("bus")); //"bs"
console.log(solution("nice to meet you")); //"nc t mt y"
