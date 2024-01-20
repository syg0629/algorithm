//https://school.programmers.co.kr/learn/courses/30/lessons/42746
// export {};

function solution(numbers: number[]): string {
  const answer: string = numbers
    .map(String)
    .sort((a: string, b: string) => Number(b + a) - Number(a + b))
    .join("");
  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([6, 10, 2])); //"6210"
console.log(solution([3, 30, 34, 5, 9])); //"9534330"
