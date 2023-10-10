//https://school.programmers.co.kr/learn/courses/30/lessons/68644
export {};

function solution(numbers: number[]): number[] {
  const answer: number[] = [];
  for (let i: number = 0; i < numbers.length; i++) {
    for (let j: number = i + 1; j < numbers.length; j++) {
      if (!answer.includes(numbers[i] + numbers[j])) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1])); //[2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); //[2,5,7,9,12]
