//https://school.programmers.co.kr/learn/courses/30/lessons/86491
export {};

function solution(sizes: number[][]): number {
  let MaxWidth = 0;
  let MaxHeight = 0;
  sizes.map((x: number[]) => x.sort((a, b) => a - b));

  for (let i = 0; i < sizes.length; i++) {
    if (MaxWidth <= sizes[i][0]) MaxWidth = sizes[i][0];
    if (MaxHeight <= sizes[i][1]) MaxHeight = sizes[i][1];
  }
  return MaxWidth * MaxHeight;
}

// prettier-ignore
console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])); //4000
// prettier-ignore
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])); //120
// prettier-ignore
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])); //133
// prettier-ignore
console.log(solution([[10, 3], [10, 5], [10, 13], [10, 11], [20, 2]])); //200
// prettier-ignore
console.log(solution( [ [91, 50], [77, 51], [50, 1], [50, 50] ])); //4641
