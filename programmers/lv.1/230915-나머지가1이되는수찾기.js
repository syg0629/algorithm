//https://school.programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
  for (let i = 0; i < n; i++) {
    if (n % i === 1) return i;
  }
}

console.log(solution(10)); //3
console.log(solution(12)); //11
