//https://school.programmers.co.kr/learn/courses/30/lessons/120907
export {};

function solution(quiz: string[]): string[] {
  const answer: string[] = quiz.map((a: string) => {
    const [x, operator, y, _, result] = a.split(" ");
    if (operator === "+") {
      return Number(x) + Number(y) === Number(result) ? "O" : "X";
    } else {
      return Number(x) - Number(y) === Number(result) ? "O" : "X";
    }
  });
  return answer;
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"])); //["X", "O"]
console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
); //["O", "O", "X", "O"]
