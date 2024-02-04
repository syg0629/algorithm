//https://school.programmers.co.kr/learn/courses/30/lessons/120896
export {};

function solution(s: string): string {
  const map: Map<string, number> = new Map();
  for (const x of [...s]) {
    map.set(x, (map.get(x) ?? 0) + 1);
  }

  const uniqueLetters: string[] = [...map.keys()]
    .filter((x) => map.get(x) === 1)
    .sort();
  return uniqueLetters.join("");
}

console.log(solution("abcabcadc")); //"d"
console.log(solution("abdc")); //"abcd"
console.log(solution("hello")); //"eho"
