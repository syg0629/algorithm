//https://school.programmers.co.kr/learn/courses/30/lessons/42746
// export {};

function solution(numbers: number[]): string {
  const sorted: string[] = numbers
    .map(String)
    .sort((a: string, b: string) => Number(b + a) - Number(a + b));
  return sorted[0] === "0" ? "0" : sorted.join("");
}

console.log(solution([6, 10, 2])); //"6210"
console.log(solution([3, 30, 34, 5, 9])); //"9534330"
