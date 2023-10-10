//https://school.programmers.co.kr/learn/courses/30/lessons/12947
//230930 - 성능 저하 원인 분석
export {};

function solution(x: number): Boolean {
  const sum = String(x)
    .split("")
    .map(Number)
    .reduce((x: number, y: number) => x + y, 0);
  return x % sum === 0;
}

console.log(solution(10)); //true
console.log(solution(12)); //true
console.log(solution(11)); //false
console.log(solution(13)); //false
