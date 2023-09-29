//https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  const sum = String(x)
    .split("")
    .reduce((p, c) => p + Number(c), 0);
  return x % sum === 0;
}

console.log(solution(10)); //true
console.log(solution(12)); //true
console.log(solution(11)); //false
console.log(solution(13)); //false
