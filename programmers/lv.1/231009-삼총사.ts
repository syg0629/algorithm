//https://school.programmers.co.kr/learn/courses/30/lessons/131705
export {};

function solution(number: number[]): number {
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number.length; j++) {
      for (let e = 0; e < number.length; e++) {
        if (
          i !== j &&
          i !== e &&
          j !== e &&
          number[i] + number[j] + number[e] === 0
        ) {
          count++;
        }
      }
    }
  }
  // 같은 숫자가 들어간 배열이 자리만 바뀌어 총 6번 나오기 때문에 /6
  return count / 6;
}

console.log(solution([-2, 3, 0, 2, -5])); //2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); //5
console.log(solution([-1, 1, -1, 1])); //0
