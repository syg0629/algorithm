// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  const remove = arr
    .slice()
    .sort((a, b) => b - a)
    .pop();
  return arr.length === 1 ? [-1] : arr.filter((n) => n !== remove);
}
