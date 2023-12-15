/**
 * 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있음
 * 같은 숫자의 카드가 여러장 있을 수 있음
 * 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록
 * 3장을 뽑을 수 있는 모든 경우를 기록
 * 기록한 값 중 K번째로 큰 수를 출력
 * ex) 25 25 23 23 22 20 19... K가 3이면 K번째 큰 값은 22
 * K번째 수가 존재하지 않으면 -1를 출력
 */
export {};

function solution(n: number, k: number, card: number[]) {
  let answer: number;
  const set: Set<number> = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let e = j + 1; e < n; e++) {
        set.add(card[i] + card[j] + card[e]);
      }
    }
  }
  const sortedSet: number[] = Array.from(set).sort(
    (a: number, b: number) => b - a
  );

  console.log(sortedSet);
  if (sortedSet[k - 1]) {
    return sortedSet[k - 1];
  } else {
    return (answer = -1);
  }
}

console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42])); //143
