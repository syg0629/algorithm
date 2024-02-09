//https://school.programmers.co.kr/learn/courses/30/lessons/120843
export {};

function solution(numbers: number[], k: number): number {
  //x번째로 던져진 지점이 아니라 던진 사람이기 때문에 k - 1
  //한 사람씩 건너뛰므로 곱하기 2
  //배열의 길이를 넘으면 나머지 연산자로 인덱스를 구함
  return numbers[((k - 1) * 2) % numbers.length];
}

console.log(solution([1, 2, 3, 4], 2)); //3
console.log(solution([1, 2, 3, 4, 5, 6], 5)); //3
console.log(solution([1, 2, 3], 3)); //2
