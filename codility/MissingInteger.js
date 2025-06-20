function solution(A) {
  const set = new Set(A.filter((x) => x > 0));
  for (let i = 1; i <= set.size + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}

console.log(solution([1, 3, 6, 4, 1, 2])); //5
console.log(solution([1, 2, 3])); //4
console.log(solution([-1, -3])); //1
