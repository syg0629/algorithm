//https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((n) => n.replace(n.charAt(), n.charAt().toUpperCase()))
    .join(" ");
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
