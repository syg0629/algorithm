/**
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열 팰린드롬
 * 문자열이 팰린드롬이면 "YES" 아니면 "NO"출력
 * 회문 검사할 때 알파벳만 가지고 회문을 검사, 대소문자 구분하지 않음
 * 알파벳 이외의 문자들은 무시
 */
export {};

function solution(s: string): string {
  const regExp = /[^a-z]/g;
  s = s.toLowerCase().replace(regExp, "");
  if (s === s.split("").reverse().join("")) {
    return "YES";
  }
  return "NO";
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof")); //YES
console.log(solution("time: study;up,wow, Yduts; emit")); //NO
