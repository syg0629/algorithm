//https://school.programmers.co.kr/learn/courses/30/lessons/120850
//my_string에는 숫자가 한 개 이상 포함되어 있습니다.
export {};

function solution(my_string: string): number[] {
  return my_string
    .match(/\d/g)
    ?.map(Number)
    .sort((a, b) => a - b)!;
}

console.log(solution("hi12392")); //[1, 2, 2, 3, 9]
console.log(solution("p2o4i8gj2")); //[2, 2, 4, 8]
console.log(solution("abcde0")); //[0]
