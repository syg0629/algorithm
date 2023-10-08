//https://school.programmers.co.kr/learn/courses/30/lessons/12930
export {};

function solution(s: string): string {
  let arr: string[] = [];
  const splitedS = s.split(" ");
  for (let i = 0; i < splitedS.length; i++) {
    arr = arr.concat(
      splitedS[i]
        .split("")
        .reduce(
          (x, y, idx) =>
            x + (idx % 2 === 0 ? y.toUpperCase() : y.toLowerCase()),
          ""
        )
    );
    arr = arr.concat(" ");
  }
  return arr.join("");
}

console.log(solution("try hello world")); //"TrY HeLlO WoRlD"
