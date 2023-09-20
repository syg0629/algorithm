//https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  let a = [n, m];
  a.sort((a, b) => b - a);
  for (let i = a[1]; i > 0; i--) {
    if (a[0] % i === 0 && a[1] % i === 0) return [i, (a[0] * a[1]) / i];
  }
}
