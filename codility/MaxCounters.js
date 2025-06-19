function solution(N, A) {
  const counters = new Array(N).fill(0);
  let maxCounter = 0;
  let lastUpdate = 0;

  for (const x of A) {
    if (x <= N) {
      if (counters[x - 1] < lastUpdate) {
        counters[x - 1] = lastUpdate;
      }
      counters[x - 1]++;
      maxCounter = Math.max(maxCounter, counters[x - 1]);
    } else if (x === N + 1) {
      lastUpdate = maxCounter;
    }
  }

  for (let i = 0; i < N; i++) {
    if (counters[i] < lastUpdate) {
      counters[i] = lastUpdate;
    }
  }

  return counters;
}
console.log(solution(5, [3, 4, 4, 6, 1, 4, 4])); //[3, 2, 2, 4, 2]
