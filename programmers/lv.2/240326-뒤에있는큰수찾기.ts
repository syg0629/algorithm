//https://school.programmers.co.kr/learn/courses/30/lessons/154539
export {};

//시간초과
// function solution(numbers: number[]): number[] {
//   return numbers.map((x, i) => {
//     const nextBigNum = numbers.slice(i + 1).find((y) => x < y);
//     return nextBigNum ?? -1;
//   });
// }

function solution(numbers: number[]): number[] {
  const answer: number[] = Array(numbers.length).fill(-1);
  const indices: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    //인덱스가 존재하고 존재하는 인덱스 숫자가 현재 숫자보다 다 낮을 경우
    while (indices && numbers[indices.at(-1)!] < numbers[i]) {
      //answer 인덱스에 현재 숫자를 넣어줌
      answer[indices.pop()!] = numbers[i];
    }
    // 현재 인덱스를 넣음
    indices.push(i);
  }
  return answer;
}

console.log(solution([2, 3, 3, 5])); //[3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); //[-1, 5, 6, 6, -1, -1]
