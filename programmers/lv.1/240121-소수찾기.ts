//https://school.programmers.co.kr/learn/courses/30/lessons/12921
export {};
import _ from "lodash";

function solution(n: number): number {
  const isPrime: boolean[] = _.times(n, _.constant(true));
  isPrime[0] = false;
  for (let i = 2; i * i <= n; i++) {
    for (let j = i * i; j <= n; j += i) {
      isPrime[j - 1] = false;
    }
  }

  return isPrime.filter((x) => x).length;
}

console.log(solution(10)); //4
console.log(solution(5)); //3
