function solution(X, A) {
  const set = new Set();
  for (const [i, v] of A.entries()) {
    if (v <= X) {
      set.add(v);
    }
    if (set.size === X) {
      return i;
    }
  }
  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])); //6
