//https://school.programmers.co.kr/learn/courses/30/lessons/154539
//시간초과
export {};

function solution(numbers: number[]): number[] {
  const answer: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    let num: number = -1;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        num = numbers[j];
        break;
      }
    }
    answer.push(num);
  }
  return answer;
}

console.log(solution([2, 3, 3, 5])); //[3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); //[-1, 5, 6, 6, -1, -1]
