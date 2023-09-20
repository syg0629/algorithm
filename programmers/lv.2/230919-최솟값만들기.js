//https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  return A.reduce((p, c, i) => p + c * B[i], 0);
}
