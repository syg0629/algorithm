//https://school.programmers.co.kr/learn/courses/30/lessons/120894
export {};

function solution(numbers: string): number {
  let answer: string = "";
  let token: string = "";
  const englishNums: Record<string, string> = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  for (const x of numbers) {
    token += x;
    if (englishNums[token]) {
      answer += englishNums[token];
      token = "";
    }
  }
  return Number(answer);
}

console.log(solution("onetwothreefourfivesixseveneightnine")); //123456789
console.log(solution("onefourzerosixseven")); //14067
