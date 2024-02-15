//https://school.programmers.co.kr/learn/courses/30/lessons/120921
export {};

function solution(A: string, B: string): number {
  if (A === B) return 0;

  for (let i = 0; i < A.length; i++) {
    A = A.slice(-1) + A.slice(0, -1);
    if (A === B) {
      return i + 1;
    }
  }
  return -1;
}

// console.log(solution("hello", "ohell")); //1
// console.log(solution("apple", "elppa")); //-1
// console.log(solution("atat", "tata")); //1
// console.log(solution("abc", "abc")); //0
// console.log(solution("abc", "cab")); //1
console.log(solution("abc", "bca")); //2
