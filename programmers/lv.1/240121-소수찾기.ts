//https://school.programmers.co.kr/learn/courses/30/lessons/12921
export {};

function solution(n: number): number {
  const set: Set<number> = new Set();
  for (let i = 3; i <= n; i += 2) {
    set.add(i);
  }
  set.add(2);

  for (let j = 3; j < Math.sqrt(n); j += 2) {
    for (let k = j * j; k <= n; k += j) {
      set.delete(k);
    }
  }
  return set.size;
}

console.log(solution(10)); //4
console.log(solution(5)); //3
