//https://school.programmers.co.kr/learn/courses/30/lessons/42748
export {};

function solution(array: number[], commands: number[][]): number[] {
  const completedComm: number[] = [];
  for (let i = 0; i < commands.length; i++) {
    const cutSorted = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a: number, b: number) => a - b);
    completedComm.push(cutSorted[commands[i][2] - 1]);
  }
  return completedComm;
}

//prettier-ignore
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])) //[5, 6, 3]
//prettier-ignore
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[4, 4, 1]])) //[6]
//prettier-ignore
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3]])); //[5]
