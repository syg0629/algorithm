function solution(A) {
  const set = new Set(A);

  for (let i = 1; i <= A.length + 1; i++) {
    if (!set.has(i)) return i;
  }
}

console.log(solution([2, 3, 1, 5])); //4
