//https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  let sum = a + b;
  if (a === b) return a;
  if (a > b) {
    while (a > b) {
      a -= 1;
      if (a == b) return sum;
      sum += a;
    }
    return sum;
  } else {
    while (a < b) {
      b -= 1;
      if (a == b) return sum;
      sum += b;
    }
    return sum;
  }
}
