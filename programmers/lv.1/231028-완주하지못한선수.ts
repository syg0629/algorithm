//https://school.programmers.co.kr/learn/courses/30/lessons/42576
export {};

const partList: Record<string, number> = {};

function solution(participant: string[], completion: string[]) {
  for (const x of participant) {
    partList[x] = partList[x] ?? 0;
    partList[x]++;
  }

  for (const x of completion) {
    partList[x]--;
  }

  return Object.keys(partList)
    .filter((x) => partList[x] === 1)
    .toString();
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
// prettier-ignore
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])) //"vinko"
// prettier-ignore
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])) //"mislav"
