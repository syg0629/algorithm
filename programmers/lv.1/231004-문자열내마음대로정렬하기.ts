//https://school.programmers.co.kr/learn/courses/30/lessons/12915
//231004 - 다시 해보기

/*
function solution(strings, n) {
  let orderBy = [];
  for (let i = 0; i < strings.length; i++) {
    orderBy.push(strings[i].slice(n));
  }
  return orderBy.sort().map((x) => strings.find((y) => y.includes(x)));
}

console.log(solution(["abc", "ab"], 1)); // ["ab", "abc"]
['abc', 'abc']가 출력됨.
*/
export {};

function solution(strings: string[], n: number): string[] {
  strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    return a.localeCompare(b);
  });
  return strings;
}

console.log(solution(["sun", "bed", "car"], 1)); //["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)); //["abcd", "abce", "cdx"]
console.log(solution(["c"], 0)); //["c"]
console.log(solution(["abc", "ab"], 1)); // ["ab", "abc"]
