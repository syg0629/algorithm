//https://school.programmers.co.kr/learn/courses/30/lessons/159994
export {};

function solution(cards1: string[], cards2: string[], goal: string[]): string {
  for (const x of goal) {
    if (x === cards1[0]) {
      cards1.shift();
    } else if (x === cards2[0]) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}

// prettier-ignore
console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]	)) //"Yes"
// prettier-ignore
console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]	)) //""No"
