//https://school.programmers.co.kr/learn/courses/30/lessons/43165
export {};

function solution(numbers: number[], target: number): number {
  let answer: number = 0;

  function findTargetCnt(idx: number, sum: number) {
    if (idx === numbers.length) {
      if (target === sum) {
        answer++;
      }
      return;
    }

    findTargetCnt(idx + 1, sum + numbers[idx]);
    findTargetCnt(idx + 1, sum - numbers[idx]);
  }
  findTargetCnt(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)); //5
console.log(solution([4, 1, 2, 1], 4)); //2
