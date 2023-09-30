//https://school.programmers.co.kr/learn/courses/30/lessons/12912
//230930 - for문의 i를 사용하지 않아 수정

// function solution(a, b) {
//   let sum = 0;
//   const arr = [a, b];
//   arr.sort((a, b) => a - b);
//   for (let i = arr[0]; arr[0] <= arr[1]; arr[0]++) {
//     sum += arr[0];
//   }
//   return sum;
// }

function solution(a, b) {
  let sum = 0;
  const arr = [a, b];
  arr.sort((a, b) => a - b);
  while (arr[0] <= arr[1]) {
    sum += arr[0];
    arr[0]++;
  }
  return sum;
}

console.log(solution(3, 5)); //12
console.log(solution(3, 3)); //3
console.log(solution(5, 3)); //12
