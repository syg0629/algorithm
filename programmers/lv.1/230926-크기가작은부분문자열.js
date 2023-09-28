//https://school.programmers.co.kr/learn/courses/30/lessons/147355
//230927 - map으로 수정

// function solution(t, p) {
//   let arr = [];
//   for (let i = 0; i <= t.length - p.length; i++) {
//     arr.push(t.slice(i, i + p.length));
//   }
//   return arr.filter((x) => x <= p).length;
// }

function solution(t, p) {
  return t
    .split("")
    .map((_, i) => {
      if (i <= t.length - p.length) return t.slice(i, i + p.length);
    })
    .filter((x) => x !== undefined && x <= p).length;
}
