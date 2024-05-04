//https://school.programmers.co.kr/learn/courses/30/lessons/120876
export {};

function solution(lines: number[][]): number {
  let answer: number = 0;
  const arr: number[] = Array(200).fill(0);
  lines.forEach((x) => {
    const [start, end] = x;
    for (let i = start; i < end; i++) {
      arr[i + 100]++;
    }
  });
  answer = arr.filter((x) => x > 1).length;
  return answer;
}

// prettier-ignore
console.log(solution([[0, 1], [2, 5], [3, 9]]	)); //2
// prettier-ignore
console.log(solution([[-1, 1], [1, 3], [3, 9]]	)); //0
// prettier-ignore
console.log(solution([[0, 5], [3, 9], [1, 10]]	)); //8
