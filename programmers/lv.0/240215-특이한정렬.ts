//https://school.programmers.co.kr/learn/courses/30/lessons/120880
export {};

function solution(numlist: number[], n: number): number[] {
  return numlist.sort((a: number, b: number) => {
    const distanceA = Math.abs(n - a);
    const distanceB = Math.abs(n - b);
    if (distanceA === distanceB) {
      return b - a;
    }
    return distanceA - distanceB;
  });
}

console.log(solution([1, 2, 3, 4, 5, 6], 4)); //[4, 5, 3, 6, 2, 1]
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30)); //[36, 40, 20, 47, 10, 6, 7000, 10000]
