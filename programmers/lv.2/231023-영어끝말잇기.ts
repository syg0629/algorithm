//https://school.programmers.co.kr/learn/courses/30/lessons/12981
export {};

function solution(n: number, words: string[]): number[] {
  for (let i = 1; i < words.length; i++) {
    const num: number = (i % n) + 1;
    const turn: number = Math.trunc(i / n) + 1;
    if (
      words[i - 1].substring(words[i - 1].length - 1) !==
      words[i].substring(0, 1)
    ) {
      return [num, turn];
    }
    if (words.indexOf(words[i]) !== i) {
      return [num, turn];
    }
  }
  return [0, 0];
}

// prettier-ignore
console.log(solution(3,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])) //[3,3]
// prettier-ignore
console.log(solution(5,["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])) //[0,0]
// prettier-ignore
console.log(solution(2,["hello", "one", "even", "never", "now", "world", "draw"])) //[1,3]
console.log(solution(3, ["aba", "aba", "bba"])); //[2, 1]
console.log(solution(3, ["tank", "kick", "know", "kick"])); //[1, 2]
