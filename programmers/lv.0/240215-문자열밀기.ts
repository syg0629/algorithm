//https://school.programmers.co.kr/learn/courses/30/lessons/120921
export {};

function solution(a: string, b: string): number {
  if (a === b) return 0;

  for (let i = 0; i < a.length; i++) {
    a = a.slice(-1) + a.slice(0, -1);
    if (a === b) {
      return i + 1;
    }
  }
  return -1;
}

console.log(solution("hello", "ohell")); //1
console.log(solution("apple", "elppa")); //-1
console.log(solution("atat", "tata")); //1
console.log(solution("abc", "abc")); //0
console.log(solution("abc", "cab")); //1
console.log(solution("abc", "bca")); //2
