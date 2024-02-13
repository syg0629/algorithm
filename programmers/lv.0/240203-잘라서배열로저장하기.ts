//https://school.programmers.co.kr/learn/courses/30/lessons/120913
export {};

function solution(my_str: string, n: number): string[] {
  const answer: string[] = [];
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, i + n));
  }
  return answer;
}

console.log(solution("abc1Addfggg4556b", 6)); //["abc1Ad", "dfggg4", "556b"]
console.log(solution("abcdef123", 3)); //["abc", "def", "123"]
