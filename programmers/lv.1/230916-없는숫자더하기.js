//https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  return Array(10)
    .fill(1)
    .map((_, i) => i)
    .filter((n) => !numbers.includes(n))
    .reduce((prev, curr) => prev + curr, 0);
}
