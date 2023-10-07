//https://school.programmers.co.kr/learn/courses/30/lessons/81301
export {};

function solution(s: string): number {
  // prettier-ignore
  const word = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  for (let i = 0; i <= word.length; i++) {
    if (s.includes(word[i])) {
      s = s.replaceAll(word[i], String(i));
    }
  }
  return Number(s);
}

console.log(solution("one4seveneight")); //1478
console.log(solution("23four5six7")); //234567
console.log(solution("2three45sixseven")); //234567
console.log(solution("123")); //123
console.log(solution("nine")); //9
