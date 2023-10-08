//https://school.programmers.co.kr/learn/courses/30/lessons/42842
//231004 - 다시 해보기
export {};

function solution(brown: number, yellow: number): number[] {
  const sum = brown + yellow;
  //제한사항 brown이 8 이상이므로 i는 3부터
  for (let i = 3; i < sum; i++) {
    let width = sum / i;

    if ((width - 2) * (i - 2) === yellow) {
      return [width, i];
    }
  }
  return [];
}

console.log(solution(10, 2)); //[4,3]
console.log(solution(8, 1)); //[3,3]
console.log(solution(24, 24)); //[8,6]
console.log(solution(18, 6)); //[8,3]
console.log(solution(50, 22)); //[24,3]
