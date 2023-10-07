//https://school.programmers.co.kr/learn/courses/30/lessons/12951
export {};

function solution(s: string): string {
  return s
    .toLowerCase()
    .split(" ")
    .map((n) => n.replace(n.charAt(0), n.charAt(0).toUpperCase()))
    .join(" ");
}

console.log(solution("3people unFollowed me")); //"3people Unfollowed Me"
console.log(solution("for the last week")); //"For The Last Week"
