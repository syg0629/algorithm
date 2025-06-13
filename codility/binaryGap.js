function solution(N) {
  const binary = N.toString(2);
  let max = 0;
  let count = 0;
  let started = false;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      if (started) {
        max = Math.max(count, max);
      }
      count = 0;
      started = true;
    } else if (started) {
      count++;
    }
  }
  return max;
}
console.log(solution(9)); // 2
console.log(solution(529)); // 4
console.log(solution(20)); // 1
console.log(solution(15)); // 0
console.log(solution(32)); // 0
console.log(solution(1041)); // 5
