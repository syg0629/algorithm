function solution(A) {
  const bag = {};

  for (let i = 0; i < A.length; i++) {
    const number = A[i];

    if (bag[number]) {
      delete bag[number];
    } else {
      bag[number] = 1;
    }
  }
  return Number(Object.keys(bag)[0]);
}

console.log(solution([9, 3, 9, 3, 9, 7, 9])); //7
