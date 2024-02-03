//https://school.programmers.co.kr/learn/courses/30/lessons/120835
export {};

function solution(emergency: number[]): number[] {
  const orderedEmer: number[] = [...emergency].sort((a, b) => b - a);
  const answer: number[] = emergency.map((x) => orderedEmer.indexOf(x) + 1);
  return answer;
}

console.log(solution([3, 76, 24])); //[3, 1, 2]
console.log(solution([1, 2, 3, 4, 5, 6, 7])); //[7, 6, 5, 4, 3, 2, 1]
console.log(solution([30, 10, 23, 6, 100])); //[2, 4, 3, 5, 1]
