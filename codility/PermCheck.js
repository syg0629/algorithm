function solution(A) {
  const set = new Set(A);

  for (let i = 1; i <= A.length; i++) {
    if (!set.has(i)) return 0;
  }
  return 1;
}

console.log(solution([4, 1, 3, 2])); //1
console.log(solution([4, 1, 3])); //0
