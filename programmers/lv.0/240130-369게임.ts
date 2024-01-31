//https://school.programmers.co.kr/learn/courses/30/lessons/120891
export {};

function solution(order: number) {
  // const answer = [...order.toString()]
  //   .map(Number)
  //   .filter((x) => x % 3 === 0 && x !== 0).length;
  // return answer;

  const set: Set<number> = new Set([3, 6, 9]);
  return [...order.toString()].map(Number).filter((x) => set.has(x)).length;
}
console.log(solution(3)); //1
console.log(solution(29423)); //2
console.log(solution(40)); //0
