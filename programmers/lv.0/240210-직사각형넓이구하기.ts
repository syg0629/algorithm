//https://school.programmers.co.kr/learn/courses/30/lessons/120860
export {};

function solution(dots: [number, number][]): number {
  const x: number[] = [];
  const y: number[] = [];
  for (const z of dots) {
    x.push(z[0]);
    y.push(z[1]);
  }
  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}

//prettier-ignore
console.log(solution([[1, 1], [2, 1], [2, 2], [1, 2]]	)); //1
//prettier-ignore
console.log(solution([[-1, -1], [1, 1], [1, -1], [-1, 1]]	)); //4
