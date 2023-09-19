//https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  let sum = 0;
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  A.forEach((a, i) => (sum += a * B[i]));
  return sum;
}
