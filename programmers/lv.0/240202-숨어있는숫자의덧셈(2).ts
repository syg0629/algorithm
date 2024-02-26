// https://school.programmers.co.kr/learn/courses/30/lessons/120864
export {};

function solution(my_string: string) {
  const regExp: RegExp = /\d+/g;
  return (
    my_string
      .match(regExp)
      ?.map(Number)
      .reduce((x, y) => x + y, 0) ?? 0
  );
}

console.log(solution("aAb1B2cC34oOp")); //37
console.log(solution("1a2b3c4d123Z")); //133
console.log(solution("test")); //133
