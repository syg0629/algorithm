//https://school.programmers.co.kr/learn/courses/30/lessons/12930
export {};

function solution(s: string): string {
  let arr: string[] = [];
  const splitedS: string[] = s.split(" ");
  for (let i: number = 0; i < splitedS.length; i++) {
    arr = arr.concat(
      splitedS[i]
        .split("")
        .reduce(
          (x: string, y: string, idx: number) =>
            x + (idx % 2 === 0 ? y.toUpperCase() : y.toLowerCase()),
          ""
        )
    );
    arr = arr.concat(" ");
  }
  return arr.join("");
}

console.log(solution("try hello world")); //"TrY HeLlO WoRlD"
