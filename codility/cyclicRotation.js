function solution(A, K) {
  if (K <= 0 || A.length === 0) return A;

  const lastEl = A.pop();
  const newArr = [lastEl, ...A];
  
  return solution(newArr, K - 1);
}

console.log(solution([1, 2, 3, 4], 4)); //[1, 2, 3, 4]
