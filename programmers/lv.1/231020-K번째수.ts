//https://school.programmers.co.kr/learn/courses/30/lessons/42748
export {};

function solution(
  array: number[],
  commands: [number, number, number][]
): number[] {
  const completedComm: number[] = [];
  for (const x of commands) {
    const [cutStart, cutEnd, index]: number[] = x;
    const cutSorted: number[] = array
      .slice(cutStart - 1, cutEnd)
      .sort((x: number, y: number) => x - y);
    completedComm.push(cutSorted[index - 1]);
  }
  return completedComm;
}

//prettier-ignore
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])) //[5, 6, 3]
//prettier-ignore
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[4, 4, 1]])) //[6]
//prettier-ignore
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3]])); //[5]
