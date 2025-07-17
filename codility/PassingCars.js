function solution(A) {
  let eastCars = 0;
  let passingPairs = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      eastCars++;
    } else {
      passingPairs += eastCars;

      if (passingPairs > 1000000000) {
        return -1;
      }
    }
  }
  return passingPairs;
}

console.log(solution([0, 1, 0, 1, 1])); //5
